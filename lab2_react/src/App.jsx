import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Reviews from './components/Reviews.jsx'
import Footer from './components/Footer.jsx'
import ContactForm from './components/ContactForm.jsx'

const skills = [
  'Python',
  'Java',
  'C# та C++',
  'JavaScript та React',
  'HTML та CSS',
  'Git та GitHub',
  'Docker',
  'Англійська — B2+',
]

// Денна тема з 07:00 до 21:00, нічна — в інший час
function getThemeByTime() {
  const hours = new Date().getHours()
  return hours >= 7 && hours < 21 ? 'light' : 'dark'
}

function App() {
  const [theme, setTheme] = useState('light')

  // Автоматичне перемикання: перевірка часу при початковому завантаженні
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- за методичкою значення встановлюється в useEffect при монтуванні
    setTheme(getThemeByTime())
  }, [])

  // Застосування стилів: клас dark на <body> відповідно до стану theme
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Ручне перемикання кнопкою в шапці
  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-5 font-sans text-slate-800 transition-colors sm:px-8 sm:py-10 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl space-y-6">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(290px,0.8fr)]">
          <div className="space-y-6">
            <section id="about" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 dark:border-white/10 dark:bg-slate-900">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">Профіль</p>
              <h2 className="mb-4 font-serif text-2xl font-semibold tracking-wide text-slate-900 sm:text-3xl dark:text-white">Про мене</h2>
              <p className="max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
                Студент 2 курсу Національного університету «Львівська політехніка». Цікавлюся кібербезпекою та штучним інтелектом, вивчаю мови програмування для back-end і front-end розробки. Беру участь у хакатонах і прагну розвиватися в ІТ.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Кібербезпека', 'Веброзробка', 'Штучний інтелект'].map((item) => (
                  <span key={item} className="rounded-full border border-emerald-600/20 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 transition hover:scale-105 hover:bg-emerald-100 dark:border-emerald-300/20 dark:bg-emerald-300/10 dark:text-emerald-100 dark:hover:bg-emerald-300/20">
                    {item}
                  </span>
                ))}
              </div>
            </section>
            <Experience />
            <Reviews />
          </div>

          <aside className="space-y-6" aria-label="Освіта, навички та контакти">
            <Education />
            <section id="skills" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-7 dark:border-white/10 dark:bg-slate-900">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">Інструменти</p>
              <h2 className="mb-5 font-serif text-2xl font-semibold tracking-wide text-slate-900 dark:text-white">Навички</h2>
              <ul className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <li key={skill} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 transition hover:-translate-y-1 hover:border-emerald-500/60 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-emerald-400/60 dark:hover:bg-slate-800">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
            <section id="contacts" className="rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-lg sm:p-7 dark:border-emerald-400/30 dark:from-emerald-950 dark:to-slate-900">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">Зв’язок</p>
              <h2 className="mb-4 font-serif text-2xl font-semibold tracking-wide text-slate-900 dark:text-white">Контакти</h2>
              <a className="block break-all rounded-xl text-sm text-emerald-800 underline decoration-emerald-500/60 underline-offset-4 transition hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:text-emerald-100 dark:hover:text-white dark:focus-visible:outline-emerald-300" href="mailto:vladyslav.hresko.kb.2025@lpnu.ua">
                vladyslav.hresko.kb.2025@lpnu.ua
              </a>
              <a className="mt-3 inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:scale-105 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:focus-visible:outline-emerald-300" href="https://github.com/izxnx" target="_blank" rel="noreferrer">
                GitHub <span className="ml-2 text-emerald-600 dark:text-emerald-300" aria-hidden="true">↗</span>
              </a>
            </section>
          </aside>
        </main>
        <Footer />
      </div>
      <ContactForm />
    </div>
  )
}

export default App
