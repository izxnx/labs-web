function Experience() {
  return (
    <section id="experience" className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-lg sm:p-8">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">Практика</p>
          <h2 className="font-serif text-2xl font-semibold tracking-wide text-white sm:text-3xl">Досвід роботи</h2>
        </div>
        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-bold tracking-widest text-slate-400">01</span>
      </div>
      <p className="leading-7 text-slate-300">Комерційного досвіду поки немає. Працюю над навчальними й клієнтськими проєктами.</p>
      <article className="mt-6 rounded-2xl border border-slate-700 bg-slate-800/70 p-5 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-xl">
        <div className="flex items-start gap-4">
          <span className="mt-2 size-3 shrink-0 rounded-full border-4 border-emerald-200/20 bg-emerald-300" aria-hidden="true" />
          <div>
            <h3 className="text-lg font-semibold text-white">Навчальні проєкти та хакатони</h3>
            <p className="mt-2 leading-7 text-slate-300">Брав участь у хакатоні та виконав замовлення для клієнта. Приклади робіт доступні у профілі GitHub.</p>
            <a className="mt-4 inline-flex items-center gap-2 font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 transition hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300" href="https://github.com/izxnx" target="_blank" rel="noreferrer">
              Переглянути GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Experience
