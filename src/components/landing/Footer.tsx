import { Compass } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-accent" />
            <span className="text-xl font-display font-semibold">PoliticalMap</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8 text-sm">
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
              Terms
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/50">
            © 2025 PoliticalMap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
