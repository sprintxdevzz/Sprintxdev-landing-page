import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { Methodology } from './components/Methodology';
import { DashboardPreview } from './components/DashboardPreview';
import { TheEdge } from './components/TheEdge';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-primary/20">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Solutions />
        <Methodology />
        <DashboardPreview />
        <TheEdge />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
