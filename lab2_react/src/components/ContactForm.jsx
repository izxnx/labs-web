import { useEffect, useState } from 'react'
import { FORMSPREE_ENDPOINT, MODAL_DELAY_MS } from '../config.js'

const inputClass =
  'rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 font-normal text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 dark:border-slate-700 dark:bg-slate-800 dark:text-white'

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)

  // Відкрити модальне вікно через 1 хвилину після монтування
  useEffect(() => {
    // Якщо вікно вже закривали в цій сесії — повторно не показуємо
    if (sessionStorage.getItem('feedbackClosed') === 'true') return

    const timerId = setTimeout(() => setIsOpen(true), MODAL_DELAY_MS)
    return () => clearTimeout(timerId) // очищення таймера
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('feedbackClosed', 'true')
  }

  // Умовний рендеринг: поки isOpen === false, нічого не рендериться
  return (
    isOpen && (
      <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/60 p-4">
        <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 text-slate-800 shadow-2xl dark:border-white/10 dark:bg-slate-900 dark:text-slate-100">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">Зворотний зв'язок</p>
          <h2 id="modal-title" className="mb-4 font-serif text-2xl font-semibold text-slate-900 dark:text-white">Напишіть мені</h2>

          <form action={FORMSPREE_ENDPOINT} method="POST" className="grid gap-3 text-sm font-semibold">
            <label className="grid gap-1">Ім'я
              <input className={inputClass} type="text" name="name" required placeholder="Ваше ім'я" />
            </label>
            <label className="grid gap-1">Email
              <input className={inputClass} type="email" name="email" required placeholder="name@example.com" />
            </label>
            <label className="grid gap-1">Номер телефону
              <input className={inputClass} type="tel" name="phone" required placeholder="+380 XX XXX XX XX" />
            </label>
            <label className="grid gap-1">Повідомлення
              <textarea className={inputClass} name="message" rows="4" required placeholder="Текст у довільній формі" />
            </label>
            <div className="mt-2 flex gap-3">
              <button type="submit" className="flex-1 rounded-xl bg-emerald-500 px-4 py-3 font-bold text-emerald-950 transition hover:bg-emerald-400">Надіслати</button>
              <button type="button" onClick={handleClose} className="rounded-xl border border-slate-300 px-4 py-3 font-semibold transition hover:bg-slate-100 dark:border-white/15 dark:hover:bg-white/10">Закрити</button>
            </div>
          </form>
        </div>
      </div>
    )
  )
}

export default ContactForm
