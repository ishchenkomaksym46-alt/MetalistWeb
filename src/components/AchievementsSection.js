import { useEffect, useState } from "react";
import { achievementStats } from "./data";

function useCounterAnimation() {
  const [counts, setCounts] = useState(achievementStats.map(() => 0));

  useEffect(() => {
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

        const next = achievementStats.map((item) =>
          Math.floor(item.value * eased)
        );
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
  }, []);

  return counts;
}

export default function AchievementsSection() {
  const counts = useCounterAnimation();

  return (
    <section id="achievements" className="section achievements reveal">
      <div className="container">
        <header className="section-head">
          <p className="kicker">Досягнення</p>
          <h2>Факти, що увійшли в історію клубу</h2>
        </header>
        <div className="stats-grid">
          {achievementStats.map((item, index) => (
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
