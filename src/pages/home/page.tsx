
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ResearchSection from './components/ServicesSection';
import CareerSection from './components/SolutionsSection';
import MediaSection from './components/TeamSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <CareerSection />
        <MediaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
