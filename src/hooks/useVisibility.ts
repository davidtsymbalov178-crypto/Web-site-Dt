import { useEffect, useState, type RefObject } from 'react'

export function useVisibility(ref: RefObject<HTMLElement | null>, rootMargin = '150px') {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin, threshold: 0 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return visible
}
