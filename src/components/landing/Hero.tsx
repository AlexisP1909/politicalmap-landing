import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import worldMap from "@/assets/world.svg";

const Hero = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-9">

      {/* World Map Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-6xl px-8 opacity-20">
          <img 
            src={worldMap} 
            alt="World map" 
            className="w-full h-auto [filter:brightness(0)_invert(1)]"
          />
        </div>
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-up">
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/80">AI-Powered Political Map</span>
          </div>

          {/* Main headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Explore the world through <span className="text-accent">Political Insights</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Get real-time political insights and visualize the geographical impact of world events through an
            interactive AI-powered map.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" className="group">
              Explore Beta
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              See How It Works
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground/50 text-sm animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2">
              <span>Interactive</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/30" />
            <span>Sourced from reliable newspapers</span>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary-foreground/30" />
            <span>Politically neutral reports</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
