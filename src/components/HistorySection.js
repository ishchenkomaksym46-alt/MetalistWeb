import { timelineEvents } from "./data";

export default function HistorySection() {
  return (
    <section id="history" className="section container reveal">
      <header className="section-head">
        <p className="kicker">Історія стадіону</p>
        <h2>Століття, написане світлом прожекторів і голосом трибун</h2>
      </header>
      <div className="timeline">
        {timelineEvents.map((event) => (
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
