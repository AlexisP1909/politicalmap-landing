import { Map, MessageCircle, Scale, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Political Mapping",
    description: "Visualize where ideas, politicians, and policies sit on the political spectrum with nuanced, multi-dimensional analysis.",
  },
  {
    icon: MessageCircle,
    title: "Smart Conversations",
    description: "Engage in thoughtful discussions about political topics. Ask questions, get balanced perspectives, and deepen your understanding.",
  },
  {
    icon: Scale,
    title: "Balanced Perspectives",
    description: "Explore arguments from all sides. PoliticalMap presents diverse viewpoints without pushing any particular agenda.",
  },
  {
    icon: Zap,
    title: "Real-Time Analysis",
    description: "Stay current with AI-powered analysis of breaking political news, policies, and debates as they unfold.",
  },
  {
    icon: Users,
    title: "Understand Voters",
    description: "Gain insights into different voter demographics, their concerns, and what drives their political choices.",
  },
  {
    icon: Shield,
    title: "Fact-First Approach",
    description: "Built on verified information with clear sourcing. Know where the data comes from and how conclusions are drawn.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background pattern-grid">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 animate-fade-up">
            Make Sense of the{" "}
            <span className="text-accent">Political Landscape</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
            PoliticalMap uses advanced AI to help you navigate complex political terrain 
            with clarity and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
