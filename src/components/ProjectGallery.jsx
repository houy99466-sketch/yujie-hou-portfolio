export function ProjectGallery({ images }) {
  if (!images?.length) return null

  return (
    <div className="project-gallery">
      {images.map((image) => (
        <figure key={image.src}>
          <a href={image.src} target="_blank" rel="noreferrer" aria-label={image.alt}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </a>
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}
