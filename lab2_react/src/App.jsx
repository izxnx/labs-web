import Header from './components/Header.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'

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

function App() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-5 font-sans text-slate-100 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <Header />
        <main className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(290px,0.8fr)]">
          <div className="space-y-6">
            <section id="about" className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-xl sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">Профіль</p>
              <h2 className="mb-4 font-serif text-2xl font-semibold tracking-wide text-white sm:text-3xl">Про мене</h2>
              <p className="max-w-3xl leading-7 text-slate-300">
                Студент 2 курсу Національного університету «Львівська політехніка». Цікавлюся кібербезпекою та штучним інтелектом, вивчаю мови програмування для back-end і front-end розробки. Беру участь у хакатонах і прагну розвиватися в ІТ.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Кібербезпека', 'Веброзробка', 'Штучний інтелект'].map((item) => (
                  <span key={item} className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:scale-105 hover:bg-emerald-300/20">
                    {item}
                  </span>
                ))}
              </div>
            </section>
            <Experience />
          </div>

          <aside className="space-y-6" aria-label="Освіта, навички та контакти">
            <Education />
            <section id="skills" className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-lg sm:p-7">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">Інструменти</p>
              <h2 className="mb-5 font-serif text-2xl font-semibold tracking-wide text-white">Навички</h2>
              <ul className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <li key={skill} className="rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-3 text-sm text-slate-200 transition hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-slate-800">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
            <section id="contacts" className="rounded-3xl border-2 border-emerald-400/30 bg-gradient-to-br from-emerald-950 to-slate-900 p-6 shadow-lg sm:p-7">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">Зв’язок</p>
              <h2 className="mb-4 font-serif text-2xl font-semibold tracking-wide text-white">Контакти</h2>
              <a className="block break-all rounded-xl text-sm text-emerald-100 underline decoration-emerald-500/60 underline-offset-4 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300" href="mailto:vladyslav.hresko.kb.2025@lpnu.ua">
                vladyslav.hresko.kb.2025@lpnu.ua
              </a>
              <a className="mt-3 inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300" href="https://github.com/izxnx" target="_blank" rel="noreferrer">
                GitHub <span className="ml-2 text-emerald-300" aria-hidden="true">↗</span>
              </a>
            </section>
          </aside>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
