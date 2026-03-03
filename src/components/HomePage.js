import HeroSection from "./HeroSection";
import LottieSection from "./LottieSection";
import HistorySection from "./HistorySection";
import ClubCitySection from "./ClubCitySection";
import LegendsSection from "./LegendsSection";
import AchievementsSection from "./AchievementsSection";
import AnniversarySection from "./AnniversarySection";
import GallerySection from "./GallerySection";
import SiteFooter from "./SiteFooter";
import useRevealAnimations from "./useRevealAnimations";

export default function HomePage() {
  useRevealAnimations();

  return (
    <main>
      <HeroSection />
      <LottieSection />
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
