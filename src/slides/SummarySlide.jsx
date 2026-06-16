import { doList, dontList } from '../content.js'

export default function SummarySlide() {
  return (
    <div className="summary-slide">
      <div className="summary-slide__header">
        <span className="summary-slide__eyebrow">SHRNUTÍ</span>
        <h2 className="summary-slide__title">Co ano, co ne</h2>
      </div>

      <div className="summary-slide__columns">
        <div className="summary-col summary-col--do">
          <div className="summary-col__head">
            <span className="summary-col__mark">✓</span>
            <span>Ano</span>
          </div>
          <ul className="summary-col__list">
            {doList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="summary-col summary-col--dont">
          <div className="summary-col__head">
            <span className="summary-col__mark">✕</span>
            <span>Ne</span>
          </div>
          <ul className="summary-col__list">
            {dontList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
