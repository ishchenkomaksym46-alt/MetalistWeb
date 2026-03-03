const timelineImages = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Kharkiv%20Metalist%20Stadium%201.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/FC%20Metalist%20Kharkiv%20-%20Malm%C3%B6%20FF%20%286525388189%29.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Metalist%20Stadium%20Kharkiv.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/FC%20Metalist%20Kharkiv.jpg",
];

const legendImages = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Oleksandr%20Horyainov.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Marko%20Devi%C4%87.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5f/Jos%C3%A9_Ernesto_Sosa.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Taison%20Barcellos%20Freda.jpg",
];

const commonGalleryImages = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Kharkiv%20Metalist%20Stadium%208.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Metalist%20Stadium%20in%20Kharkiv%20-%20panoramio.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/FC%20Metalist%20Kharkiv%20-%20Malm%C3%B6%20FF%20%286525390231%29.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/FC%20Metalist%20Kharkiv%20-%20FK%20Austria%20Wien%20%286471784579%29.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/FC%20Metalist%20Kharkiv.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Kharkiv%20Metalist%20Stadium%202.jpg",
];

const lottieAnimations = [
  "https://assets4.lottiefiles.com/packages/lf20_touohxv0.json",
  "https://assets10.lottiefiles.com/packages/lf20_xlmz9xwm.json",
  "https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json",
];

export const contentByLang = {
  ua: {
    nav: {
      brand: "ФК Металіст Харків",
      home: "Головна",
      fullHistory: "Повна історія клубу",
      languageLabel: "Мова",
    },
    hero: {
      kicker: "Харків. 1926-2026.",
      title: "Металіст. Спортивна Душа Міста",
      subtitle:
        "100 років стадіону «Металіст» у Харкові. 100 років футболу, пам'яті й міської єдності.",
      cta: "Відкрити спадщину",
    },
    wow: {
      kicker: "Lottie x Металіст",
      title: "Атмосфера матчу в живій анімації",
      subtitle:
        "Наведіть курсор на картки, рухайте мишкою по світловій зоні та відчуйте динаміку великого футбольного вечора.",
      cards: [
        { title: "Енергія трибун", text: "Пульс натовпу, що веде команду вперед." },
        { title: "Ритм атаки", text: "Темп, швидкість і мить вирішального пасу." },
        { title: "Емоція голу", text: "Той самий вибух радості, заради якого живе футбол." },
      ],
    },
    historySection: {
      kicker: "Історія стадіону",
      title: "Століття, написане світлом прожекторів і голосом трибун",
      events: [
        {
          year: "1926",
          title: "Відкриття стадіону",
          text: "Стадіон у Харкові відкрився у 1926 році та став головною футбольною ареною міста.",
        },
        {
          year: "1988",
          title: "Тріумф у Кубку СРСР",
          text: "ФК «Металіст» виграв Кубок СРСР 1987/88 і закріпив місце в історії вітчизняного футболу.",
        },
        {
          year: "2009-2012",
          title: "Нова епоха арени",
          text: "Після реконструкції стадіон відкрили у 2009 році, а у 2012-му він приймав матчі Євро-2012.",
        },
        {
          year: "2007-2013",
          title: "Золотий період клубу",
          text: "Шість поспіль бронзових медалей УПЛ і срібло сезону 2012/13 стали піком сучасної історії.",
        },
      ],
    },
    city: {
      kicker: "Клуб і місто",
      title: "«Металіст» це Харків у русі",
      text:
        "ФК «Металіст» заснований у 1925 році, а домашня арена з 1926-го стала простором, де формувалася футбольна ідентичність міста. Покоління вболівальників перетворили матчі на частину міської культури.",
      quote:
        '"Коли на «Металісті» запалюються прожектори, Харків звучить як одна команда."',
      imageAlt: "Стадіон Металіст у Харкові",
    },
    legends: {
      kicker: "Легенди й герої",
      title: "Імена, що створили характер «Металіста»",
      list: [
        {
          name: "Oleksandr Horyainov",
          position: "Воротар",
          achievement: "Один із символів клубу та багаторічний лідер оборони.",
          detail: "Легенда харківського «Металіста», відомий надійністю й самовідданістю.",
        },
        {
          name: "Marko Devic",
          position: "Нападник",
          achievement: "Один із ключових гравців атакувальної епохи клубу.",
          detail: "Результативний форвард, який визначав темп ключових матчів.",
        },
        {
          name: "Jose Ernesto Sosa",
          position: "Півзахисник",
          achievement: "Креативний лідер команди в єврокубковий період.",
          detail: "Технічний плеймейкер, що формував стиль гри «Металіста».",
        },
        {
          name: "Taison",
          position: "Атакувальний гравець",
          achievement: "Один із найяскравіших футболістів клубу початку 2010-х.",
          detail: "Швидкість, дриблінг і характер, які запам'яталися вболівальникам.",
        },
      ],
    },
    achievements: {
      kicker: "Досягнення",
      title: "Факти, що увійшли в історію клубу",
      stats: [
        { icon: "USSR", label: "Кубок СРСР", value: 1, suffix: "" },
        { icon: "SIL", label: "Срібло УПЛ", value: 1, suffix: "" },
        { icon: "BRZ", label: "Бронза УПЛ поспіль", value: 6, suffix: "" },
        { icon: "EL", label: "Чвертьфінал Ліги Європи", value: 1, suffix: "" },
      ],
    },
    anniversary: {
      years: "РОКІВ",
      kicker: "Ювілей 1926-2026",
      title: "Один стадіон. Одне місто. Один незламний дух.",
      text:
        "Через перемоги та випробування стадіон «Металіст» залишається місцем, де Харків єднається, пам'ятає і рухається вперед.",
    },
    gallery: {
      kicker: "Галерея",
      title: "Кадри стадіону, команди та великої історії",
      imageAltPrefix: "Фото Металіста",
    },
    footer: {
      text: "Стадіон «Металіст», Харків 1926-2026",
      madeBy: "Made by Maxym Ishchenko",
    },
    fullHistory: {
      kicker: "Історичний нарис",
      title: "Повна історія ФК «Металіст» (Харків)",
      subtitle:
        "Систематизована хронологія від заснування у 1925 році до сучасного періоду.",
      introTitle: "Як формувався клуб",
      introText:
        "«Металіст» пройшов шлях від заводської команди до учасника єврокубкових плей-оф і став одним із головних футбольних символів Харкова.",
      timeline: [
        {
          period: "1925-1945",
          title: "Заводські витоки",
          text: "Команда виникла при Харківському паровозобудівному заводі та заклала робітничу футбольну традицію міста.",
        },
        {
          period: "1946-1966",
          title: "Дзержинець і Авангард",
          text: "Після війни клуб виступав під назвами «Дзержинець» і «Авангард», поступово закріплюючись у всесоюзних лігах.",
        },
        {
          period: "1967-1982",
          title: "Назва «Металіст»",
          text: "У 1967 році команда отримала історичну назву «Металіст» і стала відомим брендом харківського футболу.",
        },
        {
          period: "1983-1991",
          title: "Кубок СРСР і Вища ліга",
          text: "У 1983 році клуб виграв Кубок СРСР, а в 1988 році повернувся до елітного дивізіону союзного футболу.",
        },
        {
          period: "1992-2004",
          title: "Перші роки незалежності",
          text: "У чемпіонаті України «Металіст» переживав складні періоди, але зберігав спортивну ідентичність і підтримку міста.",
        },
        {
          period: "2005-2013",
          title: "Пікова епоха",
          text: "Шість бронз УПЛ поспіль, срібло сезону 2012/13 і чвертьфінал Ліги Європи вивели клуб на міжнародний рівень.",
        },
        {
          period: "2014-2016",
          title: "Криза",
          text: "Фінансові проблеми та борги призвели до втрати професійного статусу і завершення історичного циклу клубу.",
        },
        {
          period: "2016-2026",
          title: "Спадкоємність і відновлення",
          text: "У Харкові виникли проєкти-спадкоємці, а бренд «Металіст» зберіг історичну вагу навіть у надскладних умовах війни.",
        },
      ],
      summaryLabel: "Підсумок",
      summaryTitle: "Місце «Металіста» в українському футболі",
      summaryText:
        "Історичний «Металіст» залишається клубом із потужною спадщиною, фанатською культурою та великим символічним значенням для Харкова.",
      sourcesTitle: "Джерела",
    },
  },
  en: {
    nav: {
      brand: "FC Metalist Kharkiv",
      home: "Home",
      fullHistory: "Full Club History",
      languageLabel: "Language",
    },
    hero: {
      kicker: "Kharkiv. 1926-2026.",
      title: "Metalist. The Sporting Soul of the City",
      subtitle:
        "100 years of Metalist Stadium in Kharkiv. A century of football, memory, and civic unity.",
      cta: "Explore The Legacy",
    },
    wow: {
      kicker: "Lottie x Metalist",
      title: "Matchday atmosphere in live animation",
      subtitle:
        "Hover cards, move your mouse through the light zone, and feel the pace of a big football night.",
      cards: [
        { title: "Stands Energy", text: "The crowd pulse that pushes the team forward." },
        { title: "Attack Rhythm", text: "Tempo, acceleration, and the key pass moment." },
        { title: "Goal Emotion", text: "That exact burst of joy football is built on." },
      ],
    },
    historySection: {
      kicker: "Stadium History",
      title: "A century written by floodlights and the voice of the stands",
      events: [
        {
          year: "1926",
          title: "Stadium Opening",
          text: "The Kharkiv stadium opened in 1926 and became the city's main football arena.",
        },
        {
          year: "1988",
          title: "USSR Cup Triumph",
          text: "Metalist won the 1987/88 USSR Cup and secured a place in Eastern European football history.",
        },
        {
          year: "2009-2012",
          title: "A New Arena Era",
          text: "After large reconstruction, the stadium reopened in 2009 and hosted UEFA Euro 2012 matches.",
        },
        {
          year: "2007-2013",
          title: "Golden Club Period",
          text: "Six straight UPL bronze medals and the 2012/13 silver became the modern peak of the club.",
        },
      ],
    },
    city: {
      kicker: "Club and City",
      title: "Metalist is Kharkiv in motion",
      text:
        "Founded in 1925, Metalist grew with the city. Since 1926, the home stadium has been a place where Kharkiv's football identity was shaped by generations of supporters.",
      quote: '"When Metalist floodlights switch on, Kharkiv sounds like one team."',
      imageAlt: "Metalist Stadium in Kharkiv",
    },
    legends: {
      kicker: "Legends and Heroes",
      title: "Names that built Metalist character",
      list: [
        {
          name: "Oleksandr Horyainov",
          position: "Goalkeeper",
          achievement: "One of the club symbols and a long-time defensive leader.",
          detail: "A Metalist icon known for reliability and commitment.",
        },
        {
          name: "Marko Devic",
          position: "Forward",
          achievement: "A key figure of the club's attacking era.",
          detail: "A productive striker who set the tone in big matches.",
        },
        {
          name: "Jose Ernesto Sosa",
          position: "Midfielder",
          achievement: "Creative leader during the European run years.",
          detail: "A technical playmaker who shaped Metalist style.",
        },
        {
          name: "Taison",
          position: "Attacking Player",
          achievement: "One of the brightest names of early 2010s Metalist.",
          detail: "Speed, dribbling, and personality supporters still remember.",
        },
      ],
    },
    achievements: {
      kicker: "Achievements",
      title: "Facts that entered club history",
      stats: [
        { icon: "USSR", label: "USSR Cup", value: 1, suffix: "" },
        { icon: "SIL", label: "UPL Silver", value: 1, suffix: "" },
        { icon: "BRZ", label: "Consecutive UPL Bronzes", value: 6, suffix: "" },
        { icon: "EL", label: "Europa League Quarter-Final", value: 1, suffix: "" },
      ],
    },
    anniversary: {
      years: "YEARS",
      kicker: "Anniversary 1926-2026",
      title: "One stadium. One city. One unbreakable spirit.",
      text:
        "Through victories and difficult seasons, Metalist Stadium remains a place where Kharkiv unites, remembers, and moves forward.",
    },
    gallery: {
      kicker: "Gallery",
      title: "Frames of the stadium, the team, and a big history",
      imageAltPrefix: "Metalist photo",
    },
    footer: {
      text: "Metalist Stadium, Kharkiv 1926-2026",
      madeBy: "Made by Maxym Ishchenko",
    },
    fullHistory: {
      kicker: "Historical Overview",
      title: "Complete History of FC Metalist (Kharkiv)",
      subtitle: "A structured timeline from the 1925 foundation to the modern era.",
      introTitle: "How the club was formed",
      introText:
        "Metalist evolved from an industrial factory side into a European competition contender and became one of Kharkiv's strongest football symbols.",
      timeline: [
        {
          period: "1925-1945",
          title: "Factory origins",
          text: "The team was born at the Kharkiv Locomotive Plant and established the city's working-class football tradition.",
        },
        {
          period: "1946-1966",
          title: "Dzerzhynets and Avanhard",
          text: "After WWII, the club played under different names while stabilizing in Soviet football competitions.",
        },
        {
          period: "1967-1982",
          title: "The Metalist identity",
          text: "In 1967, the team adopted the Metalist name and became a recognized Kharkiv football brand.",
        },
        {
          period: "1983-1991",
          title: "USSR Cup and top tier",
          text: "Metalist won the USSR Cup in 1983 and returned to top-level Soviet football in the late 1980s.",
        },
        {
          period: "1992-2004",
          title: "Early independence era",
          text: "In Ukrainian football, the club faced instability but maintained its sporting identity and support base.",
        },
        {
          period: "2005-2013",
          title: "Peak period",
          text: "Six straight UPL bronze medals, 2012/13 silver, and a Europa League quarter-final marked the highest era.",
        },
        {
          period: "2014-2016",
          title: "Crisis",
          text: "Financial issues and debts led to the loss of professional status and the end of the historic cycle.",
        },
        {
          period: "2016-2026",
          title: "Continuity and recovery attempts",
          text: "Successor projects appeared in Kharkiv, and the Metalist legacy remained culturally significant even during wartime.",
        },
      ],
      summaryLabel: "Summary",
      summaryTitle: "Metalist's place in Ukrainian football",
      summaryText:
        "Historic Metalist remains a club with deep legacy, strong fan culture, and major symbolic value for Kharkiv.",
      sourcesTitle: "Sources",
    },
  },
};

export const galleryImages = commonGalleryImages;
export const lottieSources = lottieAnimations;

export function getContent(language) {
  const locale = language === "en" ? "en" : "ua";
  const content = contentByLang[locale];

  return {
    ...content,
    historySection: {
      ...content.historySection,
      events: content.historySection.events.map((event, index) => ({
        ...event,
        image: timelineImages[index],
      })),
    },
    legends: {
      ...content.legends,
      list: content.legends.list.map((legend, index) => ({
        ...legend,
        image: legendImages[index],
      })),
    },
  };
}
