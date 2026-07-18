export function PageIntro({ eyebrow, title, description, aside }) {
  return (
    <header className="page-intro">
      <div className="shell page-intro-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-intro-copy">
          <p>{description}</p>
          {aside ? <span>{aside}</span> : null}
        </div>
      </div>
    </header>
  )
}

