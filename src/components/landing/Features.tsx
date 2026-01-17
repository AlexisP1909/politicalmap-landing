import { Globe, TrendingUp, MessageCircle, MapPin, Zap, Eye } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Interactive World Map",
    description: "Explore an AI-powered map that visualizes political events, conflicts, and developments across the globe in real-time."
  },
  {
    icon: TrendingUp,
    title: "Impact Analysis",
    description: "Understand how world events affect different regions. See economic, social, and political ripple effects."
  },
  {
    icon: MessageCircle,
    title: "AI-Powered Insights",
    description: "Ask questions about any region or event. Get detailed, context-rich answers powered by advanced AI."
  },
  {
    icon: MapPin,
    title: "Regional Deep Dives",
    description: "Click any country or region to get comprehensive political analysis, key players, and historical context."
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Stay current with breaking political developments. The map updates as events unfold around the world."
  },
  {
    icon: Eye,
    title: "Multiple Perspectives",
    description: "View events through different lenses—economic, humanitarian, geopolitical—to get a complete picture."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Understand Global Events <span className="text-accent">Geographically</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            PoliticalMap combines AI intelligence with interactive mapping to help you see the full picture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card border border-border hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
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
