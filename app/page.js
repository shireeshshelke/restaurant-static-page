import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import MenuHighlights from '../components/MenuHighlights';
import HygieneShowcase from '../components/HygieneShowcase';
import YourStory from '../components/YourStory';
import Testimonials from '../components/Testimonials';
import HowToOrder from '../components/HowToOrder';
import ServiceArea from '../components/ServiceArea';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <MenuHighlights />
        <HygieneShowcase />
        <YourStory />
        <Testimonials />
        <HowToOrder />
        <ServiceArea />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
