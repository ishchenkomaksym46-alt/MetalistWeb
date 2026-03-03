import { useLanguage } from "./LanguageContext";
import { getContent } from "./data";

export default function SiteFooter() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <footer className="footer">
      <div className="container footer-row">
        <p>{content.footer.text}</p>
        <div className="socials" aria-label="social links">
          <a href="#anniversary" aria-label="Instagram">
            IG
          </a>
          <a href="#anniversary" aria-label="YouTube">
            YT
          </a>
          <a href="#anniversary" aria-label="Facebook">
            FB
          </a>
          <h4>{content.footer.madeBy}</h4>
        </div>
      </div>
    </footer>
  );
}
