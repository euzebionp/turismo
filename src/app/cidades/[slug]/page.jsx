import Header from '../../../components/Header';
import LeadForm from '../../../components/LeadForm';
import { Hero, Features, Fleet, Footer } from '../../../components/Blocks';

export async function generateMetadata({ params }) {
  const cityName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `Fretamento de Ônibus em ${cityName} | Nova Turismo`,
    description: `Serviço premium de locação de ônibus executivo e fretamento corporativo em ${cityName}. Alto padrão com frota Marcopolo G8.`,
  };
}

export default function CityPage({ params }) {
  const cityName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return (
    <main>
      <Header />
      <Hero cityName={cityName} />
      <Features />
      <Fleet />
      <LeadForm />
      <Footer />
    </main>
  );
}
