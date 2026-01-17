import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-accent" />
            <span className="text-xl font-display font-semibold text-foreground">PoliticalMap</span>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact Support</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 PoliticalMap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
