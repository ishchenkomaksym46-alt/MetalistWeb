export default function ClubCitySection() {
  return (
    <section id="city" className="section city reveal">
      <div className="container city-grid">
        <div>
          <p className="kicker">Клуб і місто</p>
          <h2>«Металіст» це Харків у русі</h2>
          <p>
            ФК «Металіст» заснований у 1925 році, а домашня арена у Харкові з
            1926-го стала місцем, де формувалася футбольна ідентичність міста.
            Покоління вболівальників перетворили матчі на частину міської
            культури.
          </p>
          <blockquote>
            "Коли на «Металісті» запалюються прожектори, Харків звучить як одна
            команда."
          </blockquote>
        </div>
        <div className="city-images">
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Metalist%20Stadium%20in%20Kharkiv%20-%20panoramio.jpg"
            alt="Стадіон Металіст у Харкові"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
