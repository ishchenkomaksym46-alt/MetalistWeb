import { useLanguage } from "./LanguageContext";
import { getContent } from "./data";

export default function ClubCitySection() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <section id="city" className="section city reveal">
      <div className="container city-grid">
        <div>
          <p className="kicker">{content.city.kicker}</p>
          <h2>{content.city.title}</h2>
          <p>{content.city.text}</p>
          <blockquote>{content.city.quote}</blockquote>
        </div>
        <div className="city-images">
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Metalist%20Stadium%20in%20Kharkiv%20-%20panoramio.jpg"
            alt={content.city.imageAlt}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
