import { useState } from 'react'

const IMAGE_SRC = '/images/Programms.png'

export default function WorkPreview() {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="work-preview-placeholder">
        <p>Добавь файл</p>
        <code>public/images/Programms.png</code>
      </div>
    )
  }

  return (
    <div className="work-preview">
      <img
        src={IMAGE_SRC}
        alt="Рабочий процесс — код проекта в редакторе"
        className={`work-preview-img ${loaded ? 'is-visible' : ''}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
      {!loaded && <div className="work-preview-skeleton" />}
    </div>
  )
}
