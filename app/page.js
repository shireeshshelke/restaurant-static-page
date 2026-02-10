import Navbar from '../components/Navbar';
import LandingHero from '../components/LandingHero';
import ServiceSelector from '../components/ServiceSelector';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <LandingHero />
        <ServiceSelector />
      </main>
      <Footer />
    </>
  );
}
