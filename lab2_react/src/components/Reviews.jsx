import { useEffect, useState } from 'react'
import { COMMENTS_URL } from '../config.js'

function Reviews() {
  const [comments, setComments] = useState([]) // список отриманих коментарів
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Запит виконується один раз — під час монтування компонента
  useEffect(() => {
    const controller = new AbortController()

    async function loadComments() {
      try {
        const response = await fetch(COMMENTS_URL, { signal: controller.signal })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const data = await response.json()
        setComments(data)
      } catch (err) {
        if (err.name !== 'AbortError') setError('Не вдалося завантажити відгуки.')
      } finally {
        setLoading(false)
      }
    }

    loadComments()
    return () => controller.abort() // скасування запиту при розмонтуванні
  }, [])

  return (
    <section id="reviews" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8 dark:border-white/10 dark:bg-slate-900">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">Рекомендації</p>
      <h2 className="mb-3 font-serif text-2xl font-semibold tracking-wide text-slate-900 sm:text-3xl dark:text-white">Відгуки попередніх роботодавців</h2>
      {loading && <p className="text-slate-500 dark:text-slate-400">Завантаження відгуків…</p>}
      {error && <p className="text-red-600 dark:text-red-400">{error}</p>}
      {!loading && !error && (
        <p className="break-all text-sm text-slate-500 dark:text-slate-400">Отримано відгуків: {comments.length} (джерело: {COMMENTS_URL})</p>
      )}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {comments.map((comment, index) => (
          <article key={comment.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
            <div className="mb-3 flex items-center gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-emerald-100 font-bold text-emerald-800 dark:bg-emerald-300/15 dark:text-emerald-200">
                {comment.email[0].toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 dark:text-slate-400">Відгук №{index + 1} (id {comment.id})</p>
                <p className="break-all text-sm text-emerald-700 dark:text-emerald-300">{comment.email}</p>
              </div>
            </div>
            <h3 className="mb-2 font-semibold capitalize text-slate-900 dark:text-white">{comment.name}</h3>
            <p className="whitespace-pre-line text-sm leading-6 text-slate-600 dark:text-slate-300">{comment.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews
