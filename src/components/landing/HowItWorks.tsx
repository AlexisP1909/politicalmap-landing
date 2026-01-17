import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Lightbulb, Target } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Ask Your Question",
    description: "Type any political question, topic, or issue you want to understand better. From policy details to ideological positions.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Get Balanced Analysis",
    description: "PoliticalMap analyzes your query and presents multiple perspectives, historical context, and relevant data points.",
  },
  {
    number: "03",
    icon: Target,
    title: "Map Your Understanding",
    description: "See where ideas fit on the political spectrum. Understand relationships between positions and form your own informed views.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 animate-fade-up">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Simple, powerful, and designed to enhance your political understanding.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex items-start gap-6 p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                {/* Step number */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground font-display">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[2.75rem] top-20 w-0.5 h-8 bg-border" />
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
