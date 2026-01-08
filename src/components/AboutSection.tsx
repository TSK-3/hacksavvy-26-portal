import { Code2, Lightbulb, Trophy, Users } from "lucide-react";
const features = [{
  icon: Code2,
  title: "Build & Innovate",
  description: "Transform your ideas into working prototypes in just 36 hours with cutting-edge technology."
}, {
  icon: Users,
  title: "Team Collaboration",
  description: "Form teams of 2-5 members. Inter-college teams are welcome and encouraged!"
}, {
  icon: Lightbulb,
  title: "Expert Mentorship",
  description: "Get guidance from industry experts and faculty mentors throughout the hackathon."
}, {
  icon: Trophy,
  title: "Win Big",
  description: "Compete for exciting prizes and recognition in the tech community."
}];
export const AboutSection = () => {
  return <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            What is <span className="text-gradient">HACKSAVVY-26</span>?
          </h2>
          <p className="text-lg text-muted-foreground">HACKSAVVY-26 is a 36-hour national-level hackathon organized by Mahatma Gandhi Institute of Technology (MGIT). It's where brilliant minds come together to solve real-world problems through innovation, coding, and creativity.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <div key={feature.title} className="group p-6 rounded-2xl bg-gradient-card border border-border card-hover" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>)}
        </div>

        {/* Eligibility Card */}
        <div className="mt-16 p-8 rounded-2xl border-glow bg-gradient-card max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading font-bold mb-4 text-center">
            Who Can <span className="text-gradient">Participate?</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <h4 className="text-foreground font-semibold mb-2">Eligibility</h4>
              <ul className="space-y-2 text-sm">
                <li>• All undergraduate & postgraduate students</li>
                <li>• Teams of 2-5 members</li>
                <li>• Inter-college teams allowed</li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-2">Registration Fee</h4>
              <ul className="space-y-2 text-sm">
                <li>• ₹2500 per team (non-refundable)</li>
                <li>• Includes meals & accommodation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};