import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-accent" />
            <span className="text-lg font-display font-semibold">PoliticalMap</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Terms
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/40">
            © 2025 PoliticalMap
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
