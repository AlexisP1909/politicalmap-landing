import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

const WorldMap = () => (
  <svg
    viewBox="0 0 1000 500"
    className="w-full h-auto opacity-20"
    fill="currentColor"
  >
    {/* Simplified world map paths */}
    <path d="M150,120 Q200,100 250,120 T350,110 Q400,130 450,120 T550,130 Q580,110 620,125 T700,115 Q750,135 800,120 L820,140 Q780,160 750,150 T680,165 Q640,145 600,160 T520,155 Q480,175 440,160 T360,170 Q320,150 280,165 T200,155 Q160,175 130,160 Z" />
    <path d="M100,180 Q150,160 200,180 T300,175 Q350,195 400,180 T500,190 Q540,170 580,185 T660,175 Q700,195 740,180 T820,190 Q860,170 900,185 L920,220 Q880,240 840,225 T760,240 Q720,220 680,235 T600,225 Q560,245 520,230 T440,245 Q400,225 360,240 T280,230 Q240,250 200,235 T120,250 Q80,230 60,245 L50,210 Z" />
    <path d="M200,280 Q260,260 320,280 T420,275 Q470,295 520,280 T620,290 Q660,270 700,285 L720,320 Q680,340 640,325 T560,340 Q520,320 480,335 T400,325 Q360,345 320,330 T240,345 Q200,325 180,340 L170,300 Z" />
    <path d="M600,320 Q650,300 700,320 T780,315 Q820,335 860,320 L880,360 Q840,380 800,365 T720,380 Q680,360 640,375 T580,365 L570,340 Z" />
    <path d="M750,380 Q800,360 850,380 T920,375 L940,420 Q900,440 860,425 T780,440 Q740,420 720,435 L710,400 Z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-9">

      {/* World Map Background */}
      <div className="absolute inset-0 flex items-center justify-center text-primary-foreground pointer-events-none">
        <div className="w-full max-w-6xl px-8">
          <WorldMap />
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
              Explore the Map
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              See How It Works
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/50 text-sm animate-fade-up"
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
