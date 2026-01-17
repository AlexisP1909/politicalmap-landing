import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container px-6">
        <div className="glass-card mt-4 px-6 py-3 rounded-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-accent" />
            <span className="text-lg font-display font-semibold text-foreground">PoliticalMap</span>
          </div>

          {/* CTA */}
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
