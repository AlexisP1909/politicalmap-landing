import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
        }`}
    >
      <div className="container px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-display font-bold">
          <Globe className="w-6 h-6 text-accent" />
          <span className={isScrolled ? "text-foreground" : "text-white"}>PoliticalMap</span>
        </div>

        <div className="flex-1" />

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Button
            className="hidden md:flex bg-accent hover:bg-accent/90 text-white border-0"
          >
            Launch App
          </Button>
          <Button variant="ghost" className="md:hidden" size="icon">
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
