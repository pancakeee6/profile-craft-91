import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            InnovateCo
          </h2>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-foreground transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('team')} className="text-foreground/80 hover:text-foreground transition-colors">
              Team
            </button>
            <Button onClick={() => scrollToSection('contact')} size="sm">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
