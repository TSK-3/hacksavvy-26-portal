import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "24 hours of non-stop hacking",
  "Mentorship from industry experts",
  "Networking with like-minded innovators",
  "Free meals & refreshments",
  "Exciting prizes worth ₹1L+",
  "Certificates for all participants",
];

export const RegisterSection = () => {
  return (
    <section id="register" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card border-glow rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Ready to <span className="text-gradient">Hack?</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Don't miss your chance to be part of the biggest hackathon at MGIT. 
                  Register now and showcase your innovation!
                </p>

                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right content - CTA */}
              <div className="text-center md:text-left">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="text-sm text-muted-foreground mb-2">Registration Fee</div>
                  <div className="text-4xl font-heading font-bold text-gradient mb-4">
                    ₹400
                    <span className="text-lg text-muted-foreground font-normal"> / team</span>
                  </div>

                  <Button variant="hero" size="xl" className="w-full group">
                    Register Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4">
                    Registration closes on March 1, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
