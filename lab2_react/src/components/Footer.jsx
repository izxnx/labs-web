import { useEffect, useState } from 'react'

function Footer() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    // 1. Зчитуємо системну інформацію під час монтування компонента
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      cpuCores: navigator.hardwareConcurrency,
      screen: `${window.screen.width}x${window.screen.height}`,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }

    // 2. Зберігаємо дані в localStorage
    Object.entries(info).forEach(([key, value]) => {
      localStorage.setItem(`sys_${key}`, String(value))
    })

    // 3. Отримуємо всі записи з localStorage для відображення в JSX
    const entries = Object.keys(localStorage)
      .sort()
      .map((key) => ({ key, value: localStorage.getItem(key) }))
    // eslint-disable-next-line react-hooks/set-state-in-effect -- за методичкою значення встановлюється в useEffect при монтуванні
    setRows(entries)
  }, [])

  return (
    <footer className="space-y-5 border-t border-slate-200 py-5 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900" aria-labelledby="system-info-title">
        <h2 id="system-info-title" className="mb-3 font-serif text-lg font-semibold text-slate-900 dark:text-white">Системна інформація (localStorage)</h2>
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200 dark:border-white/10">
              <th className="py-2 pr-4 font-semibold">Ключ</th>
              <th className="py-2 font-semibold">Значення</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-b border-slate-100 align-top dark:border-white/5">
                <td className="whitespace-nowrap py-2 pr-4 font-mono text-emerald-700 dark:text-emerald-300">{row.key}</td>
                <td className="break-all py-2 text-slate-700 dark:text-slate-300">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p>© 2026 Гресько Владислав</p>
        <a className="w-fit rounded-lg underline decoration-slate-400 underline-offset-4 transition hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:decoration-slate-600 dark:hover:text-white" href="#about">На початок ↑</a>
      </div>
    </footer>
  )
}

export default Footer
