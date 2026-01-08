import { Brain, Cloud, Cpu, Globe, Heart, Leaf, Lock, Smartphone } from "lucide-react";

const themes = [
  { icon: Brain, name: "AI/ML", description: "Machine Learning & Artificial Intelligence solutions" },
  { icon: Globe, name: "Web3 & Blockchain", description: "Decentralized applications & smart contracts" },
  { icon: Heart, name: "HealthTech", description: "Healthcare innovation & medical solutions" },
  { icon: Leaf, name: "Sustainability", description: "Green tech & environmental solutions" },
  { icon: Lock, name: "Cybersecurity", description: "Security tools & privacy solutions" },
  { icon: Cloud, name: "Cloud Computing", description: "Scalable cloud-native applications" },
  { icon: Smartphone, name: "IoT & Hardware", description: "Connected devices & embedded systems" },
  { icon: Cpu, name: "Open Innovation", description: "Any innovative idea that solves real problems" },
];

export const ThemesSection = () => {
  return (
    <section id="themes" className="py-24 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Hackathon <span className="text-gradient">Themes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from a variety of themes to build your innovative solution. 
            All themes have specific problem statements provided by industry partners and MGIT.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {themes.map((theme, index) => (
            <div
              key={theme.name}
              className="group relative p-6 rounded-2xl bg-card border border-border card-hover overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <theme.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{theme.name}</h3>
                <p className="text-sm text-muted-foreground">{theme.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Problem statements will be revealed at the start of the hackathon
        </p>
      </div>
    </section>
  );
};
