import { useLanguage } from "./LanguageContext";
import { getContent } from "./data";

export default function HeroSection() {
  const { language } = useLanguage();
  const content = getContent(language);

  const handleDiscoverClick = () => {
    const target = document.getElementById("history");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero section">
      <div className="hero-overlay" />
      <div className="hero-lights" />
      <div className="container hero-content reveal">
        <p className="kicker">{content.hero.kicker}</p>
        <h1>{content.hero.title}</h1>
        <p className="subtitle">{content.hero.subtitle}</p>
        <button type="button" className="cta" onClick={handleDiscoverClick}>
          {content.hero.cta}
        </button>
      </div>
    </section>
  );
}
