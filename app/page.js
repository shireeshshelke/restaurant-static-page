import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MenuCard from '../components/MenuCard';
import MenuHighlights from '../components/MenuHighlights';
import FullMenu from '../components/FullMenu';
import WhyChooseUs from '../components/WhyChooseUs';
import HygieneShowcase from '../components/HygieneShowcase';
import Testimonials from '../components/Testimonials';
import HowToOrder from '../components/HowToOrder';
import OperatingHours from '../components/OperatingHours';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuCard />
        <MenuHighlights />
        <FullMenu />
        <WhyChooseUs />
        <HygieneShowcase />
        <Testimonials />
        <HowToOrder />
        <OperatingHours />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
