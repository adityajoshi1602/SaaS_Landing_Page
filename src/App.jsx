import Navbar from "./components/sections/navbar";
import Hero from "./components/sections/hero";
import Features from "./components/sections/features";
import HowItWorks from "./components/sections/how-it-works";
import Testimonials from "./components/sections/testimonials";
import Pricing from "./components/sections/pricing";
import FAQ from "./components/sections/faq";
import Footer from "./components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      {/* <Pricing /> */}
      <FAQ />
      <Footer />
    </main>
  );
}
