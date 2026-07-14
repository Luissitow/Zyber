import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsappFloat from "@/components/layout/WhatsappFloat";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Process />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
