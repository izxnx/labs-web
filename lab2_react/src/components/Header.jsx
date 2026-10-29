const links = [
  ['#about', 'Про мене'],
  ['#experience', 'Досвід'],
  ['#reviews', 'Відгуки'],
  ['#education', 'Освіта'],
  ['#skills', 'Навички'],
  ['#contacts', 'Контакти'],
]

function Header({ theme, onToggleTheme }) {
  const isDark = theme === 'dark'
  return (
    <header className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-white via-white to-emerald-100 p-6 shadow-2xl sm:p-10 dark:border-white/10 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="grid size-20 shrink-0 place-items-center rounded-3xl border-2 border-emerald-700/20 bg-emerald-300 text-2xl font-black tracking-wide text-emerald-950 shadow-lg dark:border-emerald-200/30">
          ГВ
        </div>
        <div className="min-w-0 flex-1">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">Резюме · веброзробка · кібербезпека</p>
          <h1 className="font-serif text-4xl font-bold tracking-wide text-slate-900 sm:text-5xl dark:text-white">Гресько Владислав</h1>
          <p className="mt-3 text-base text-slate-600 sm:text-lg dark:text-slate-300">Студент 2 курсу · кібербезпека</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Перемкнути денну/нічну тему"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
          >
            <span aria-hidden="true">{isDark ? '☾' : '☀'}</span>
            {isDark ? 'Нічна тема' : 'Денна тема'}
          </button>
          <a className="inline-flex w-fit items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-bold text-emerald-950 shadow-lg transition hover:scale-105 hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 active:scale-95 dark:focus-visible:outline-white" href="mailto:vladyslav.hresko.kb.2025@lpnu.ua">
            Написати
          </a>
        </div>
      </div>
      <nav className="mt-8 flex flex-wrap gap-2 border-t border-slate-200 pt-5 dark:border-white/10" aria-label="Навігація резюме">
        {links.map(([href, label]) => (
          <a key={href} className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:border-emerald-500/50 hover:bg-emerald-50 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-white/10 dark:text-slate-200 dark:hover:border-emerald-300/50 dark:hover:bg-emerald-300/10 dark:hover:text-white" href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
