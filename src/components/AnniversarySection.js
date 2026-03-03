import { useMemo } from "react";
import { useLanguage } from "./LanguageContext";
import { getContent } from "./data";

export default function AnniversarySection() {
  const particleItems = useMemo(() => new Array(18).fill(null), []);
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <section id="anniversary" className="section anniversary reveal">
      <div className="container anniversary-wrap">
        <div className="anniversary-emblem">
          <span>100</span>
          <small>{content.anniversary.years}</small>
        </div>
        <div>
          <p className="kicker">{content.anniversary.kicker}</p>
          <h2>{content.anniversary.title}</h2>
          <p>{content.anniversary.text}</p>
        </div>
        <div className="particles" aria-hidden="true">
          {particleItems.map((_, index) => (
            <span key={`particle-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
