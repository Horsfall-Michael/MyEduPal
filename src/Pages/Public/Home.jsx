import { Header } from "../../components/Header.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import Features from "../../components/FeaturesSection.jsx";
import MarketPlaceSection from "../../components/HomePageMarketSection.jsx";
import CommunitySection from "../../components/HomePageCommunitySection.jsx";
import DashboardSection from "../../components/HomePageDashboard.jsx";
import JoinSection from "../../components/JoinSection.jsx";
import Footer from "../../components/Footer.jsx";



import "./Home.css";

export function HomePage() {
  return (
    <>
      <Header />
      <HeroSection/>
      <Features/>
      <MarketPlaceSection />
      <CommunitySection />
      <DashboardSection />
      <JoinSection />
      <Footer />
    </>
  );
}
