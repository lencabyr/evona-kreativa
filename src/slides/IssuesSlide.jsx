import { additionalIssues } from '../content.js'

export default function IssuesSlide() {
  return (
    <div className="issues-slide">
      <div className="issues-slide__header">
        <span className="issues-slide__eyebrow">MIMO BANNERY</span>
        <h2 className="issues-slide__title">Další prohřešky</h2>
        <p className="issues-slide__lede">
          Kreativa se nehodnotí jen po jednotlivých bannerech — důležitý je
          i celkový dojem napříč formáty a platformami.
        </p>
      </div>

      <div className="issues-slide__list">
        {additionalIssues.map((issue, i) => (
          <div className="issue-block" key={issue.title}>
            <span className="issue-block__number">{String(i + 1).padStart(2, '0')}</span>
            <div className="issue-block__content">
              <h3>{issue.title}</h3>
              <p>{issue.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
