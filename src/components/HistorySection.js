import { useLanguage } from "./LanguageContext";
import { getContent } from "./data";

export default function HistorySection() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <section id="history" className="section container reveal">
      <header className="section-head">
        <p className="kicker">{content.historySection.kicker}</p>
        <h2>{content.historySection.title}</h2>
      </header>
      <div className="timeline">
        {content.historySection.events.map((event) => (
          <article className="timeline-item" key={event.year}>
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-card">
              <img src={event.image} alt={event.title} loading="lazy" />
              <div>
                <h3>{event.title}</h3>
                <p>{event.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
