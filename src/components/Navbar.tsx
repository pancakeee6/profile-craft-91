import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-poltek.png";
import { Menu } from "lucide-react"; // ikon titik tiga (menu)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // biar menu ketutup setelah diklik
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo dan Nama Kampus */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Politeknik Baja Tegal"
              className="h-10 w-auto"
            />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Politeknik Baja Tegal
            </h2>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("Tentang")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection("Prospek Kerja")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Prospek Kerja
            </button>
            <button
              onClick={() => scrollToSection("Alumni")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Alumni
            </button>
            <Button onClick={() => scrollToSection("Hubungi Kami")} size="sm">
              Hubungi Kami
            </Button>
          </div>

          {/* Tombol Titik 3 / Menu Hamburger (Mobile) */}
          <button
            className="md:hidden text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={26} />
          </button>
        </div>

        {/* Dropdown Menu untuk Mobile */}
        {menuOpen && (
          <div className="flex flex-col mt-4 md:hidden gap-3 bg-background/95 p-4 rounded-2xl shadow-lg border border-border">
            <button
              onClick={() => scrollToSection("Tentang")}
              className="text-left text-foreground/80 hover:text-foreground"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection("Prospek Kerja")}
              className="text-left text-foreground/80 hover:text-foreground"
            >
              Prospek Kerja
            </button>
            <button
              onClick={() => scrollToSection("Alumni")}
              className="text-left text-foreground/80 hover:text-foreground"
            >
              Alumni
            </button>
            <Button
              onClick={() => scrollToSection("Hubungi kami")}
              size="sm"
              className="w-fit"
            >
              Hubungi Kami
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
