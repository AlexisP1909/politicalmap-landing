import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import worldMap from "@/assets/world.svg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary text-primary-foreground">
      {/* Background Map - Full Width */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <img
          src={worldMap}
          alt="World Map"
          className="w-full h-full object-cover [filter:brightness(0)_invert(1)]"
        />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30 pointer-events-none" />

      <div className="container z-10 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">



          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-20 tracking-tight">
            Explore the world through <br />
            <span className="text-accent">Political Insights</span>
          </h1>

          {/* Subheading */}


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white min-w-[160px] h-12 text-lg" asChild>
              <a href="https://polimapfix-5f912d17.alpic.live/try" target="_blank" rel="noopener noreferrer">
                Explore Beta
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white/70 hover:text-white hover:bg-white/10 min-w-[160px] h-12 text-lg" asChild>
              <a href="#how-it-works">
                See How It Works
              </a>
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
