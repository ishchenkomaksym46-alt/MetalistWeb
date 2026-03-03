import { useLanguage } from "./LanguageContext";
import { galleryImages, getContent } from "./data";

export default function GallerySection() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <section id="gallery" className="section container reveal">
      <header className="section-head">
        <p className="kicker">{content.gallery.kicker}</p>
        <h2>{content.gallery.title}</h2>
      </header>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${content.gallery.imageAltPrefix} ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
