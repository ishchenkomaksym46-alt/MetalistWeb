import { useLanguage } from "./LanguageContext";
import { getContent } from "./data";

export default function MetalistFullHistoryPage() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <main className="full-history-page">
      <section className="section full-history-hero">
        <div className="container reveal is-visible">
          <p className="kicker">{content.fullHistory.kicker}</p>
          <h1>{content.fullHistory.title}</h1>
          <p className="subtitle">{content.fullHistory.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container history-article">
          <div className="history-intro reveal is-visible">
            <h2>{content.fullHistory.introTitle}</h2>
            <p>{content.fullHistory.introText}</p>
          </div>

          <div className="history-timeline reveal is-visible">
            {content.fullHistory.timeline.map((item) => (
              <article className="history-block" key={item.period}>
                <p className="history-period">{item.period}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <article className="history-block reveal is-visible">
            <p className="history-period">{content.fullHistory.summaryLabel}</p>
            <h3>{content.fullHistory.summaryTitle}</h3>
            <p>{content.fullHistory.summaryText}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
