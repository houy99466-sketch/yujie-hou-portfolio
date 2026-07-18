export function EvidenceStrip({ items, label = '项目证据' }) {
  return (
    <div className="evidence-strip" aria-label={label}>
      {items.map((item, index) => (
        <span key={item}>
          <b>0{index + 1}</b>
          {item}
        </span>
      ))}
    </div>
  )
}

