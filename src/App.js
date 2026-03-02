import HeroSection from "./components/HeroSection";
import HistorySection from "./components/HistorySection";
import ClubCitySection from "./components/ClubCitySection";
import LegendsSection from "./components/LegendsSection";
import AchievementsSection from "./components/AchievementsSection";
import AnniversarySection from "./components/AnniversarySection";
import GallerySection from "./components/GallerySection";
import SiteFooter from "./components/SiteFooter";
import useRevealAnimations from "./components/useRevealAnimations";

export default function App() {
  useRevealAnimations();

  return (
    <main className="site">
      <HeroSection />
      <HistorySection />
      <ClubCitySection />
      <LegendsSection />
      <AchievementsSection />
      <AnniversarySection />
      <GallerySection />
      <SiteFooter />
    </main>
  );
}
