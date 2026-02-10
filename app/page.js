import Navbar from '../components/Navbar';
import ServiceSelector from '../components/ServiceSelector';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceSelector />
      </main>
      <Footer />
    </>
  );
}
