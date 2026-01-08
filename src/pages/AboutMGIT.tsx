import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Award, Users, Calendar, BookOpen, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Calendar,
    title: "Established 1997",
    description: "Founded by Chaitanya Bharathi Educational Society (CBES)",
  },
  {
    icon: Award,
    title: "NAAC A++ Accredited",
    description: "NBA accredited programs with NIRF ranking 251-300",
  },
  {
    icon: Users,
    title: "75-80% Placements",
    description: "Top recruiters include TCS, Amazon, Deloitte & more",
  },
  {
    icon: Building2,
    title: "30 Acre Campus",
    description: "2,50,787 sq. ft. built-up area with modern infrastructure",
  },
];

const programs = [
  "Computer Science & Engineering",
  "Information Technology",
  "Electronics & Communication",
  "Electrical & Electronics",
  "Mechanical Engineering",
  "Civil Engineering",
  "Mechatronics",
  "Metallurgical & Materials Engineering",
];

const fests = [
  {
    name: "NIRVANA",
    description: "Annual cultural festival featuring renowned artists and performances",
  },
  {
    name: "MAGISTECH",
    description: "Technical symposium organized by ISTE Students' Chapter",
  },
  {
    name: "QUBIT",
    description: "CSE department's annual technical symposium",
  },
  {
    name: "MICROCOSM",
    description: "ECE department's flagship technical event",
  },
];

export default function AboutMGIT() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to HACKSAVVY-26</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-grid">
        <div className="absolute inset-0 radial-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              About <span className="text-gradient">MGIT</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Mahatma Gandhi Institute of Technology
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Gandipet, Hyderabad, Telangana</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mahatma Gandhi Institute of Technology (MGIT) has grown rapidly since its inception in 1997 
                by the Chaitanya Bharathi Educational Society (CBES) in a serene and tranquil atmosphere at 
                Gandipet, Hyderabad. The institute is affiliated to Jawaharlal Nehru Technological University, 
                Hyderabad and has achieved autonomous status (UGC) until 2031.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                The lush green campus of MGIT is spread over 30 acres of pleasant landscape with a constructed 
                area of 2,50,787 sq. ft., featuring state-of-the-art infrastructure including specialized labs 
                and a large digital library.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-gradient-card border border-border card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Programs */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-primary" />
                Academic Programs
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {programs.map((program) => (
                  <div
                    key={program}
                    className="p-4 rounded-xl bg-muted/30 border border-border flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{program}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fests & Events */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-primary" />
                Fests & Events
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {fests.map((fest) => (
                  <div
                    key={fest.name}
                    className="p-6 rounded-2xl border-glow bg-gradient-card"
                  >
                    <h3 className="text-xl font-heading font-semibold text-gradient mb-2">
                      {fest.name}
                    </h3>
                    <p className="text-muted-foreground">{fest.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center p-8 rounded-2xl border-glow bg-gradient-card">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Ready to Hack at <span className="text-gradient">MGIT</span>?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join HACKSAVVY-26 and experience the innovation culture at MGIT
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/#register">Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 HACKSAVVY-26 | Mahatma Gandhi Institute of Technology</p>
        </div>
      </footer>
    </div>
  );
}
