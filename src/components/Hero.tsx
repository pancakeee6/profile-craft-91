import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Innovation
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Meets Excellence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We transform businesses through cutting-edge technology solutions and strategic consulting. 
              Partner with us to unlock your company's full potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToContact} className="group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-3xl opacity-20" />
            <img 
              src={heroImage} 
              alt="Modern office workspace" 
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
