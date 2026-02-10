import Navbar from '../../components/Navbar';
import TiffinHero from '../../components/service/TiffinHero';
import TiffinPlans from '../../components/service/TiffinPlans';
import TiffinBenefits from '../../components/service/TiffinBenefits';
import TiffinFAQ from '../../components/service/TiffinFAQ';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Tiffin Service | HomeEats | Daily Nutritious Meals',
  description: 'Healthy daily meal plans delivered to your door. Customizable, nutritious tiffin service with flexible plans.',
};

export default function TiffinService() {
  return (
    <>
      <Navbar />
      <main>
        <TiffinHero />
        <TiffinBenefits />
        <TiffinPlans />
        <TiffinFAQ />
      </main>
      <Footer />
    </>
  );
}
