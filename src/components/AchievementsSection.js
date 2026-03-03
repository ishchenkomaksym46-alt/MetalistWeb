import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { getContent } from "./data";

function useCounterAnimation(targetValues, language) {
  const [counts, setCounts] = useState(targetValues.map(() => 0));

  useEffect(() => {
    setCounts(targetValues.map(() => 0));

    const section = document.querySelector("#achievements");
    if (!section) return undefined;

    let rafId = 0;
    let hasStarted = false;

    const animate = () => {
      const duration = 1500;
      const start = performance.now();

      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        const next = targetValues.map((value) => Math.floor(value * eased));
        setCounts(next);

        if (progress < 1) {
          rafId = requestAnimationFrame(update);
        }
      };

      rafId = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            hasStarted = true;
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [language, targetValues]);

  return counts;
}

export default function AchievementsSection() {
  const { language } = useLanguage();
  const content = getContent(language);
  const stats = content.achievements.stats;
  const targetValues = useMemo(() => stats.map((item) => item.value), [stats]);
  const counts = useCounterAnimation(targetValues, language);

  return (
    <section id="achievements" className="section achievements reveal">
      <div className="container">
        <header className="section-head">
          <p className="kicker">{content.achievements.kicker}</p>
          <h2>{content.achievements.title}</h2>
        </header>
        <div className="stats-grid">
          {stats.map((item, index) => (
            <article className="stat-card" key={item.label}>
              <span className="stat-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>
                {counts[index]}
                {item.suffix}
              </h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
