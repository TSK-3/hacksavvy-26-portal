import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Radial glow background */}
      <div className="absolute inset-0 radial-glow" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{
      animationDelay: "-3s"
    }} />
      
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            <span className="text-foreground">HACK</span>
            <span className="text-gradient glow-text">SAVVY</span>
            <span className="text-foreground">-26</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            Code. Create. Conquer.
            <br />
            Join the ultimate 36-hour innovation challenge at MGIT.
          </p>

          {/* Event details */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Feb 12-13, 2026 • 9:00 AM</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>MGIT, Hyderabad</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span>500+ Participants</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#register">Register Your Team</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in" style={{
          animationDelay: "0.5s"
        }}>
          {[{
            value: "₹2L+",
            label: "Prize Pool"
          }, {
            value: "36",
            label: "Hours"
          }, {
            value: "100+",
            label: "Teams"
          }, {
            value: "10+",
            label: "Themes"
          }].map(stat => <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};