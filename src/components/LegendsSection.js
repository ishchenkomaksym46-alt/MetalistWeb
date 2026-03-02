import { legends } from "./data";

export default function LegendsSection() {
  return (
    <section id="legends" className="section container reveal">
      <header className="section-head">
        <p className="kicker">Легенди й герої</p>
        <h2>Імена, що створили характер «Металіста»</h2>
      </header>
      <div className="legend-grid">
        {legends.map((legend) => (
          <article className="legend-card" key={legend.name}>
            <img src={legend.image} alt={legend.name} loading="lazy" />
            <div className="legend-base">
              <p className="legend-position">{legend.position}</p>
              <h3>{legend.name}</h3>
              <p>{legend.achievement}</p>
            </div>
            <div className="legend-hover">
              <p>{legend.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
