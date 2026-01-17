import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointer, MessageSquare, Lightbulb } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointer,
    title: "Explore the Map",
    description: "Navigate the interactive world map. Click on any country, region, or hotspot to start exploring political events."
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Ask Questions",
    description: "Use the AI chat to ask about any political topic, conflict, or event. Get detailed insights with geographical context."
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Visualize Impact",
    description: "See how events ripple across regions. Understand connections between politics, economics, and geography."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-white/70">
            Simple, intuitive, and designed to make global politics accessible.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Connector Line - Absolute across the simplified container */}
          <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-white/10 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-8 md:items-start group">

                {/* Number Badge */}
                <div className="flex-shrink-0 z-10 w-16 h-16 rounded-full bg-accent border-4 border-primary flex items-center justify-center shadow-lg shadow-accent/20">
                  <span className="text-xl font-bold text-white font-display">{step.number}</span>
                </div>

                {/* Content Card */}
                <div className="flex-1 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <step.icon className="w-6 h-6 text-accent" />
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold h-12 px-8" asChild>
              <a href="https://political-map-702bd8ed.alpic.live/" target="_blank" rel="noopener noreferrer">
                Try PoliticalMap Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
