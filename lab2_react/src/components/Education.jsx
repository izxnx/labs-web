function Education() {
  return (
    <section id="education" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-7 dark:border-white/10 dark:bg-slate-900">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">Навчання</p>
          <h2 className="font-serif text-2xl font-semibold tracking-wide text-slate-900 dark:text-white">Освіта</h2>
        </div>
        <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-bold tracking-widest text-slate-500 dark:border-slate-700 dark:text-slate-400">02</span>
      </div>
      <h3 className="text-lg font-semibold leading-snug text-slate-800 dark:text-slate-100">Національний університет «Львівська політехніка»</h3>
      <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">Бакалаврат · 2025–2029</p>
    </section>
  )
}

export default Education
