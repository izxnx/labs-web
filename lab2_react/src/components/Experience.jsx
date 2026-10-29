function Experience() {
  return (
    <section id="experience" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8 dark:border-white/10 dark:bg-slate-900">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">Практика</p>
          <h2 className="font-serif text-2xl font-semibold tracking-wide text-slate-900 sm:text-3xl dark:text-white">Досвід роботи</h2>
        </div>
        <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-bold tracking-widest text-slate-500 dark:border-slate-700 dark:text-slate-400">01</span>
      </div>
      <p className="leading-7 text-slate-600 dark:text-slate-300">Комерційного досвіду поки немає. Працюю над навчальними й клієнтськими проєктами.</p>
      <article className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-emerald-400/50">
        <div className="flex items-start gap-4">
          <span className="mt-2 size-3 shrink-0 rounded-full border-4 border-emerald-200 bg-emerald-400 dark:border-emerald-200/20 dark:bg-emerald-300" aria-hidden="true" />
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Навчальні проєкти та хакатони</h3>
            <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">Брав участь у хакатоні та виконав замовлення для клієнта. Приклади робіт доступні у профілі GitHub.</p>
            <a className="mt-4 inline-flex items-center gap-2 font-semibold text-emerald-700 underline decoration-emerald-500/50 underline-offset-4 transition hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:text-emerald-300 dark:hover:text-emerald-200" href="https://github.com/izxnx" target="_blank" rel="noreferrer">
              Переглянути GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Experience
