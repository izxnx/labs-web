# labs-web

Лабораторні роботи з дисципліни «Технології веб програмування».
Гресько Владислав, КБ-206, варіант 8.

| Лабораторна | Що зроблено | Де лежить |
|---|---|---|
| №2 | Резюме на HTML; резюме на React-компонентах | `index.html`, `lab2_react/` |
| №3 | Стилізація резюме: CSS та Tailwind CSS | `part1-css/`, `lab2_react/` |
| №4 | Робота з JavaScript: localStorage, Fetch API, форма зворотного зв'язку (Formspree), денна/нічна тема | `lab4-js/` (частина 1), `lab2_react/` (частина 2) |

## Запуск

Частина 1 лабораторної №4 — відкрити `lab4-js/index.html` у браузері (або `npx serve lab4-js`).

React-проєкт:

```bash
cd lab2_react
npm install
npm run dev
```

## Лабораторна №4 — налаштування

- Відгуки: `https://jsonplaceholder.typicode.com/posts/8/comments` (варіант 8).
- Форма зворотного зв'язку: замініть `YOUR_FORM_ID` на свій ендпойнт Formspree у
  `lab4-js/index.html` та `lab2_react/src/config.js`.
