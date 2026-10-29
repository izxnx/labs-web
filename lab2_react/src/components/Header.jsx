const links = [
  ['#about', 'Про мене'],
  ['#experience', 'Досвід'],
  ['#education', 'Освіта'],
  ['#skills', 'Навички'],
  ['#contacts', 'Контакти'],
]

function Header() {
  return (
    <header className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 p-6 shadow-2xl sm:p-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="grid size-20 shrink-0 place-items-center rounded-3xl border-2 border-emerald-200/30 bg-emerald-300 text-2xl font-black tracking-wide text-emerald-950 shadow-lg">
          ГВ
        </div>
        <div className="min-w-0 flex-1">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">Резюме · веброзробка · кібербезпека</p>
          <h1 className="font-serif text-4xl font-bold tracking-wide text-white sm:text-5xl">Гресько Владислав</h1>
          <p className="mt-3 text-base text-slate-300 sm:text-lg">Студент 2 курсу · кібербезпека</p>
        </div>
        <a className="inline-flex w-fit items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-bold text-emerald-950 shadow-lg transition hover:scale-105 hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-95" href="mailto:vladyslav.hresko.kb.2025@lpnu.ua">
          Написати
        </a>
      </div>
      <nav className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-5" aria-label="Навігація резюме">
        {links.map(([href, label]) => (
          <a key={href} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-300/50 hover:bg-emerald-300/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300" href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
