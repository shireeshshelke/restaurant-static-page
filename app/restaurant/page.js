import Navbar from '../../components/Navbar';
import RestaurantHero from '../../components/service/RestaurantHero';
import MenuCard from '../../components/MenuCard';
import MenuHighlights from '../../components/MenuHighlights';
import WhyChooseUs from '../../components/WhyChooseUs';
import HygieneShowcase from '../../components/HygieneShowcase';
import Testimonials from '../../components/Testimonials';
import HowToOrder from '../../components/HowToOrder';
import OperatingHours from '../../components/OperatingHours';
import FAQ from '../../components/FAQ';
import FinalCTA from '../../components/FinalCTA';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Restaurant Menu | HomeEats | Fresh Daily Meals',
  description: 'Order authentic home-cooked meals from HomeEats. 85+ menu items available. Fresh, hygienic, delivered daily.',
};

export default function RestaurantService() {
  return (
    <>
      <Navbar />
      <main>
        <RestaurantHero />
        <MenuCard />
        <MenuHighlights />
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
