import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/poltek.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="inline-block whitespace-nowrap">
                Politeknik Baja Tegal
              </span>
              <span className="block text-3xl md:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
                Lulusan Unggul, Siap Bersaing di Dunia Industri
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Kami berfokus membekali mahasiswa dengan kemampuan teknis dan
              keterampilan interpersonal, agar siap menghadapi tantangan dunia
              kerja dan berkontribusi dalam inovasi industri.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToContact} className="group">
                Daftar Sekarang
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="relative translate-x-4 md:translate-x-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-3xl opacity-20" />
            <img
              src={heroImage}
              alt="Politeknik Baja"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;