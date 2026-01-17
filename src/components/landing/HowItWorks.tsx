import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointer, MessageSquare, Lightbulb } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointer,
    title: "Explore the Map",
    description: "Navigate the interactive world map. Click on any country, region, or hotspot to start exploring political events and their impact.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Ask Questions",
    description: "Use the AI chat to ask about any political topic, conflict, or event. Get detailed insights with geographical context.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Visualize Impact",
    description: "See how events ripple across regions. Understand connections between politics, economics, and geography at a glance.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4 animate-fade-up">
            How It Works
          </h2>
          <p className="text-lg text-primary-foreground/70 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Simple, intuitive, and designed to make global politics accessible.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex items-start gap-6 p-6 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 hover:border-accent/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                {/* Step number */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xl font-bold text-accent-foreground font-display">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-semibold text-primary-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[2.75rem] top-20 w-0.5 h-8 bg-primary-foreground/20" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Button variant="default" size="lg" className="group">
              Try PoliticalMap Free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
