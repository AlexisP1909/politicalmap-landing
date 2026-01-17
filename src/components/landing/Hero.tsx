import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

const WorldMap = () => (
  <svg
    viewBox="0 0 2000 1000"
    className="w-full h-auto"
    preserveAspectRatio="xMidYMid slice"
  >
    {/* North America */}
    <path 
      d="M150,150 L180,120 L220,110 L280,100 L340,95 L400,100 L450,90 L480,100 L510,95 L540,110 L560,130 L550,160 L520,180 L480,190 L440,200 L400,220 L360,250 L320,280 L280,300 L240,320 L200,350 L180,380 L160,420 L140,460 L130,500 L140,520 L180,540 L220,550 L260,540 L300,520 L340,500 L380,480 L420,450 L440,420 L420,400 L380,380 L340,360 L300,350 L260,360 L220,380 L180,400 L150,380 L130,340 L120,300 L130,260 L150,220 L170,180 L150,150 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Canada/Alaska region */}
    <path 
      d="M100,80 L150,60 L200,50 L280,45 L360,50 L440,60 L500,80 L540,70 L580,80 L560,110 L520,100 L480,90 L420,85 L360,80 L300,85 L240,95 L180,100 L140,110 L100,80 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Greenland */}
    <path 
      d="M620,60 L680,50 L740,60 L780,90 L760,130 L720,150 L680,140 L640,120 L620,90 L620,60 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* South America */}
    <path 
      d="M280,550 L320,540 L360,560 L400,590 L420,640 L430,700 L420,760 L400,820 L370,870 L340,910 L310,930 L280,920 L260,880 L250,820 L260,760 L280,700 L290,640 L280,590 L280,550 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Europe */}
    <path 
      d="M880,120 L920,100 L980,95 L1040,100 L1080,120 L1100,150 L1080,180 L1040,200 L1000,210 L960,220 L920,230 L880,220 L860,190 L870,150 L880,120 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* UK/Ireland */}
    <path 
      d="M820,140 L850,130 L870,150 L860,180 L830,190 L810,170 L820,140 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Scandinavia */}
    <path 
      d="M940,50 L980,40 L1020,50 L1040,80 L1030,110 L1000,90 L970,80 L940,50 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Africa */}
    <path 
      d="M880,280 L940,260 L1000,270 L1060,290 L1100,330 L1120,390 L1110,460 L1080,530 L1040,590 L1000,640 L960,670 L920,680 L880,660 L850,620 L840,560 L850,500 L870,440 L880,380 L870,320 L880,280 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Madagascar */}
    <path 
      d="M1140,560 L1160,540 L1175,560 L1170,610 L1150,640 L1130,620 L1140,560 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Middle East */}
    <path 
      d="M1100,240 L1160,230 L1200,250 L1220,290 L1200,330 L1160,350 L1120,340 L1100,300 L1100,240 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Russia/Northern Asia */}
    <path 
      d="M1100,80 L1200,60 L1320,50 L1440,55 L1560,70 L1680,90 L1780,120 L1820,160 L1800,200 L1720,220 L1620,230 L1520,220 L1420,200 L1320,180 L1220,160 L1140,150 L1100,120 L1100,80 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* India */}
    <path 
      d="M1280,320 L1340,300 L1400,320 L1420,380 L1400,450 L1360,500 L1320,520 L1280,500 L1260,440 L1270,380 L1280,320 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Southeast Asia */}
    <path 
      d="M1440,380 L1500,360 L1560,380 L1580,440 L1560,500 L1520,540 L1480,560 L1440,540 L1420,480 L1440,420 L1440,380 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* China */}
    <path 
      d="M1420,200 L1520,180 L1620,190 L1700,220 L1720,280 L1680,340 L1620,380 L1540,400 L1460,380 L1400,340 L1380,280 L1400,230 L1420,200 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Japan */}
    <path 
      d="M1760,240 L1800,220 L1830,240 L1840,290 L1820,340 L1780,360 L1750,340 L1740,290 L1760,240 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Indonesia */}
    <path 
      d="M1480,580 L1540,560 L1600,570 L1660,590 L1700,620 L1680,660 L1620,680 L1560,670 L1500,650 L1460,620 L1480,580 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Philippines */}
    <path 
      d="M1660,440 L1700,420 L1730,450 L1720,500 L1690,530 L1650,510 L1660,440 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Australia */}
    <path 
      d="M1560,700 L1660,680 L1760,700 L1840,750 L1860,820 L1820,890 L1740,930 L1640,940 L1560,900 L1520,840 L1530,770 L1560,700 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* New Zealand */}
    <path 
      d="M1900,850 L1930,830 L1960,860 L1950,920 L1920,950 L1890,930 L1900,850 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
    
    {/* Papua New Guinea */}
    <path 
      d="M1780,620 L1840,600 L1880,630 L1870,680 L1820,700 L1770,680 L1780,620 Z"
      className="fill-transparent stroke-white/30 stroke-[1.5]"
    />
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
              Explore Beta
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
