import Header from '../../../components/Header';
import LeadForm from '../../../components/LeadForm';
import { Hero, Features, Fleet, Footer } from '../../../components/Blocks';

export async function generateMetadata({ params }) {
  const serviceName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${serviceName} de Luxo | Nova Turismo`,
    description: `Opções exclusivas de ${serviceName} com frota de alto padrão operada pela Nova Turismo.`,
  };
}

export default function ServicePage({ params }) {
  const serviceName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return (
    <main>
      <Header />
      <Hero cityName={serviceName} />
      <Features />
      <Fleet />
      <LeadForm />
      <Footer />
    </main>
  );
}
