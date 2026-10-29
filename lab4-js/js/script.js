// Лабораторна робота №4 «Робота з JavaScript». Гресько Владислав, варіант 8.

const VARIANT = 8;                                        // номер у журналі групи
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`;
const FEEDBACK_DELAY = 60000;                              // 1 хвилина, мс

// ===== 1. Зберігання даних у браузері =====

// Збирає інформацію про ОС і браузер та зберігає кожне значення
// в localStorage під окремим ключем із префіксом "sys_"
function saveSystemInfo() {
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    appVersion: navigator.appVersion,
    vendor: navigator.vendor,
    language: navigator.language,
    languages: (navigator.languages || []).join(', '),
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
    cpuCores: navigator.hardwareConcurrency,
    screen: `${screen.width}x${screen.height}, ${screen.colorDepth}-bit`,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    visitedAt: new Date().toLocaleString('uk-UA'),
  };

  for (const [key, value] of Object.entries(info)) {
    localStorage.setItem('sys_' + key, String(value));   // localStorage зберігає лише рядки
  }
  // Додатково — весь об'єкт одним JSON-рядком
  localStorage.setItem('systemInfo', JSON.stringify(info));
}

// Виводить УСІ пари ключ/значення з localStorage у таблицю футера
function renderStorage() {
  const tbody = document.getElementById('storage-body');
  tbody.innerHTML = '';

  const keys = [];
  for (let i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
  keys.sort();

  keys.forEach((key) => {
    const tr = document.createElement('tr');
    const tdKey = document.createElement('td');
    const tdValue = document.createElement('td');
    tdKey.textContent = key;
    tdValue.textContent = localStorage.getItem(key);
    tr.append(tdKey, tdValue);
    tbody.append(tr);
  });
}

// ===== 2. Динамічний вміст із сервера (Fetch API) =====

async function loadReviews() {
  const status = document.getElementById('reviews-status');
  const list = document.getElementById('reviews-list');

  try {
    const response = await fetch(COMMENTS_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const comments = await response.json();

    // Коментарі виводяться в тому порядку, в якому їх повернув сервер
    comments.forEach((comment, index) => list.append(createReviewCard(comment, index + 1)));
    status.textContent = `Отримано відгуків: ${comments.length} (джерело: ${COMMENTS_URL})`;
  } catch (error) {
    console.error('Помилка завантаження відгуків:', error);
    status.textContent = 'Не вдалося завантажити відгуки. Спробуйте пізніше.';
  }
}

function createReviewCard(comment, number) {
  const card = document.createElement('article');
  card.className = 'review';
  card.innerHTML = `
    <div class="review-head">
      <div class="review-avatar"></div>
      <div>
        <div class="review-num"></div>
        <div class="review-email"></div>
      </div>
    </div>
    <h3 class="review-title"></h3>
    <p class="review-body"></p>`;
  // textContent замість innerHTML для даних із сервера — захист від XSS
  card.querySelector('.review-avatar').textContent = comment.email[0].toUpperCase();
  card.querySelector('.review-num').textContent = `Відгук №${number} (id ${comment.id})`;
  card.querySelector('.review-email').textContent = comment.email;
  card.querySelector('.review-title').textContent = comment.name;
  card.querySelector('.review-body').textContent = comment.body;
  return card;
}

// ===== 3. Форма зворотного зв'язку в модальному вікні =====

function setupFeedbackModal() {
  const modal = document.getElementById('feedback-modal');
  const closeBtn = document.getElementById('modal-close');
  const form = document.getElementById('feedback-form');
  const status = document.getElementById('form-status');

  const open = () => { modal.hidden = false; };
  const close = () => { modal.hidden = true; };

  // Показати форму, коли користувач пробув на сайті 1 хвилину
  setTimeout(open, FEEDBACK_DELAY);

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) close();               // клік по затемненому фону
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });

  // Надсилання на Formspree (дані форми → лист на пошту студента).
  // Запит відправляється у фоні, щоб користувач залишився на сторінці.
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.className = 'form-status';
    status.textContent = 'Надсилання…';
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      status.classList.add('ok');
      status.textContent = 'Дякуємо! Повідомлення надіслано.';
      form.reset();
    } catch (error) {
      status.classList.add('err');
      status.textContent = 'Помилка надсилання. Спробуйте ще раз.';
    }
  });
}

// ===== 4. Денний / нічний режим =====

// Денна тема з 07:00 до 21:00, нічна — в увесь інший час
function getThemeByTime(date = new Date()) {
  const hours = date.getHours();
  return hours >= 7 && hours < 21 ? 'light' : 'dark';
}

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  document.querySelector('.theme-icon').textContent = theme === 'dark' ? '☾' : '☀';
  document.getElementById('theme-label').textContent =
    theme === 'dark' ? 'Нічна тема' : 'Денна тема';
}

function setupTheme() {
  let theme = getThemeByTime();
  applyTheme(theme);

  // Ручне перемикання кнопкою в шапці
  document.getElementById('theme-toggle').addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
  });

  // Перевірка щохвилини: якщо час доби змінився (07:00 / 21:00) — змінюємо тему
  let lastAuto = theme;
  setInterval(() => {
    const auto = getThemeByTime();
    if (auto !== lastAuto) {
      lastAuto = theme = auto;
      applyTheme(theme);
    }
  }, 60000);
}

// ===== Запуск =====
document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  saveSystemInfo();
  renderStorage();
  loadReviews();
  setupFeedbackModal();
});
