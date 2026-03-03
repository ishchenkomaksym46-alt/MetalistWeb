import { NavLink } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { getContent } from "./data";

export default function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const content = getContent(language);

  return (
    <header className="site-header">
      <div className="container site-header-row">
        <NavLink to="/" className="brand-link">
          {content.nav.brand}
        </NavLink>

        <div className="header-actions">
          <nav className="site-nav" aria-label="Main navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}
            >
              {content.nav.home}
            </NavLink>
            <NavLink
              to="/history_of_metalist"
              className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}
            >
              {content.nav.fullHistory}
            </NavLink>
          </nav>

          <div className="language-switch" aria-label={content.nav.languageLabel}>
            <button
              type="button"
              className={language === "ua" ? "lang-btn is-active" : "lang-btn"}
              onClick={() => setLanguage("ua")}
            >
              UA
            </button>
            <button
              type="button"
              className={language === "en" ? "lang-btn is-active" : "lang-btn"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
