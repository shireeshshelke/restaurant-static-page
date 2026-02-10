import Navbar from '../../components/Navbar';
import PartyHero from '../../components/service/PartyHero';
import PartyServices from '../../components/service/PartyServices';
import PartyPackages from '../../components/service/PartyPackages';
import PartyFAQ from '../../components/service/PartyFAQ';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Party Services & Catering | HomeEats | Events Made Easy',
  description: 'Premium catering and party services. Dishes, decoration items, food for your celebrations. Make your events memorable.',
};

export default function PartyService() {
  return (
    <>
      <Navbar />
      <main>
        <PartyHero />
        <PartyServices />
        <PartyPackages />
        <PartyFAQ />
      </main>
      <Footer />
    </>
  );
}
