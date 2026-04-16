import Header from '../components/Header';
import LeadForm from '../components/LeadForm';
import { Hero, Features, Fleet, Footer } from '../components/Blocks';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Fleet />
      {/* Serviços component was simplified into Hero/Blocks for this MVP, we can expand later */}
      <LeadForm />
      <Footer />
    </main>
  );
}
