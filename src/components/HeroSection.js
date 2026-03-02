export default function HeroSection() {
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
        <p className="kicker">Харків. 1926-2026.</p>
        <h1>Металіст Спортивна Душа Міста</h1>
        <p className="subtitle">
          100 років стадіону «Металіст» у Харкові. 100 років футболу, пам'яті й
          міської єдності.
        </p>
        <button type="button" className="cta" onClick={handleDiscoverClick}>
          Відкрити Спадщину
        </button>
      </div>
    </section>
  );
}
