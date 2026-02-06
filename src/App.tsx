import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturesStrip } from "./components/FeaturesStrip";
import { WorkflowsSection } from "./components/WorkflowsSection";
import { BundlesSection } from "./components/BundlesSection";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

import { CartProvider } from "./context/CartContext";
import { CartDrawer } from "./components/CartDrawer";

export function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-950 text-white antialiased">
        <Header />
        <Hero />
        <FeaturesStrip />
        <WorkflowsSection />
        <BundlesSection />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
