import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section id="Tentang">
        <Hero />
        <About />
      </section>

      <section id="Prospek Kerja">
        <Services />
      </section>

      <section id="Alumni">
        <Team />
      </section>

      <section id="Hubungi Kami">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
