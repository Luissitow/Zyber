import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

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
