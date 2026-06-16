export default function BannerSlide({ pair, index, total }) {
  return (
    <div className="banner-slide">
      <div className="banner-slide__header">
        <span className="banner-slide__index">PŘÍPAD {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <h2 className="banner-slide__title">{pair.label}</h2>
        <span className="banner-slide__context">{pair.context}</span>
      </div>

      <div className="banner-slide__body">
        <div className="banner-slide__images">
          <div className="banner-card">
            <div className="banner-card__frame banner-card__frame--ours">
              {pair.images.ours ? (
                <img src={pair.images.ours} alt={`${pair.label} — náš banner`} />
              ) : (
                <div className="banner-card__placeholder">obrázek bude doplněn</div>
              )}
            </div>
            <div className="banner-card__tag banner-card__tag--ours">NÁŠ · {pair.verdictOurs}</div>
          </div>

          <div className="banner-card">
            <div className="banner-card__frame banner-card__frame--client">
              {pair.images.client ? (
                <img src={pair.images.client} alt={`${pair.label} — klientský banner`} />
              ) : (
                <div className="banner-card__placeholder">obrázek bude doplněn</div>
              )}
            </div>
            <div className="banner-card__tag banner-card__tag--client">KLIENT · {pair.verdictClient}</div>
          </div>
        </div>

        <div className="banner-slide__analysis">
          <ul className="banner-slide__points">
            {pair.points.map((p) => (
              <li key={p.heading} className="banner-point">
                <div className="banner-point__heading">{p.heading}</div>
                <div className="banner-point__row">
                  <span className="banner-point__dot banner-point__dot--ours" />
                  <span>{p.ours}</span>
                </div>
                <div className="banner-point__row">
                  <span className="banner-point__dot banner-point__dot--client" />
                  <span>{p.client}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="banner-slide__summary">{pair.summary}</p>
        </div>
      </div>
    </div>
  )
}
