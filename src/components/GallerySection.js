import { galleryImages } from "./data";

export default function GallerySection() {
  return (
    <section id="gallery" className="section container reveal">
      <header className="section-head">
        <p className="kicker">Галерея</p>
        <h2>Кадри стадіону, команди та великої історії</h2>
      </header>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Фото Металіста ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
