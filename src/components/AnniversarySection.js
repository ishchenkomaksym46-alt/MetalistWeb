import { useMemo } from "react";

export default function AnniversarySection() {
  const particleItems = useMemo(() => new Array(18).fill(null), []);

  return (
    <section id="anniversary" className="section anniversary reveal">
      <div className="container anniversary-wrap">
        <div className="anniversary-emblem">
          <span>100</span>
          <small>РОКІВ</small>
        </div>
        <div>
          <p className="kicker">Ювілей 1926-2026</p>
          <h2>Один стадіон. Одне місто. Один незламний дух.</h2>
          <p>
            Через перемоги та випробування стадіон «Металіст» залишається місцем,
            де Харків єднається, пам'ятає і рухається вперед.
          </p>
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
