import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { getContent, lottieSources } from "./data";

function handleCardPointerMove(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  event.currentTarget.style.setProperty("--mx", `${x}px`);
  event.currentTarget.style.setProperty("--my", `${y}px`);
}

export default function LottieSection() {
  const { language } = useLanguage();
  const content = getContent(language);

  useEffect(() => {
    if (!window.LottieInteractivity || !window.LottieInteractivity.create) {
      return;
    }

    lottieSources.forEach((_, index) => {
      window.LottieInteractivity.create({
        mode: "cursor",
        player: `#wow-lottie-${index}`,
        actions: [{ type: "seek", visibility: [0, 1], frames: [0, 180] }],
      });
    });
  }, []);

  return (
    <section className="section container wow reveal">
      <header className="section-head">
        <p className="kicker">{content.wow.kicker}</p>
        <h2>{content.wow.title}</h2>
        <p className="wow-subtitle">{content.wow.subtitle}</p>
      </header>

      <div className="wow-grid">
        {content.wow.cards.map((card, index) => (
          <article className="wow-card" key={card.title} onMouseMove={handleCardPointerMove}>
            <div className="wow-card-glow" aria-hidden="true" />
            <div className="wow-lottie-frame">
              <lottie-player
                id={`wow-lottie-${index}`}
                src={lottieSources[index]}
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "190px" }}
                loop
                autoplay
              />
            </div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
