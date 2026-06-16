import { useState, useEffect, useCallback, useMemo } from 'react'
import TitleSlide from './slides/TitleSlide.jsx'
import BannerSlide from './slides/BannerSlide.jsx'
import SummarySlide from './slides/SummarySlide.jsx'
import IssuesSlide from './slides/IssuesSlide.jsx'
import { bannerPairs } from './content.js'
import './deck.css'

export default function App() {
  const slides = useMemo(() => {
    const list = [{ type: 'title' }]
    bannerPairs.forEach((pair, i) => {
      list.push({ type: 'banner', pair, index: i })
    })
    list.push({ type: 'summary' })
    list.push({ type: 'issues' })
    return list
  }, [])

  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((next) => {
    if (next < 0 || next >= slides.length || next === current) return
    setDirection(next > current ? 1 : -1)
    setCurrent(next)
  }, [current, slides.length])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handler = (e) => {
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault()
        next()
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  // touch swipe support
  useEffect(() => {
    let startX = 0
    const onStart = (e) => { startX = e.touches[0].clientX }
    const onEnd = (e) => {
      const dx = e.changedTouches[0].clientX - startX
      if (Math.abs(dx) > 60) {
        if (dx < 0) next(); else prev()
      }
    }
    window.addEventListener('touchstart', onStart)
    window.addEventListener('touchend', onEnd)
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [next, prev])

  const slide = slides[current]

  return (
    <div className="deck">
      <div className="deck__progress">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`deck__dot ${i === current ? 'deck__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="deck__meta">
        <span className="deck__meta-label">KREATIVA POD LUPOU</span>
        <span className="deck__meta-count">{String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
      </div>

      <div className="deck__stage" key={current}>
        <div className={`deck__slide deck__slide--enter-${direction > 0 ? 'right' : 'left'}`}>
          {slide.type === 'title' && <TitleSlide />}
          {slide.type === 'banner' && <BannerSlide pair={slide.pair} index={slide.index} total={bannerPairs.length} />}
          {slide.type === 'summary' && <SummarySlide />}
          {slide.type === 'issues' && <IssuesSlide />}
        </div>
      </div>

      <button
        className="deck__nav deck__nav--prev"
        onClick={prev}
        disabled={current === 0}
        aria-label="Předchozí slide"
      >
        ←
      </button>
      <button
        className="deck__nav deck__nav--next"
        onClick={next}
        disabled={current === slides.length - 1}
        aria-label="Další slide"
      >
        →
      </button>
    </div>
  )
}
