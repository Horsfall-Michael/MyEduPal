import { Header } from "../../components/landing/Header.jsx";
import HeroSection from "../../components/landing/HeroSection.jsx";
import Features from "../../components/landing/FeaturesSection.jsx";
import MarketPlaceSection from "../../components/landing/HomePageMarketSection.jsx";
import CommunitySection from "../../components/landing/HomePageCommunitySection.jsx";
import DashboardSection from "../../components/landing/HomePageDashboard.jsx";
import JoinSection from "../../components/landing/JoinSection.jsx";
import Footer from "../../components/landing/Footer.jsx";



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
