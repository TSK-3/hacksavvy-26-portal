import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gradient mb-4">
              HACKSAVVY-26
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              A national-level hackathon organized by Mahatma Gandhi Institute of Technology, Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#themes" className="hover:text-primary transition-colors">Themes</a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-primary transition-colors">Timeline</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-primary transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>MGIT, Gandipet, Hyderabad - 500075</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hacksavvy@mgit.ac.in" className="hover:text-primary transition-colors">
                  hacksavvy@mgit.ac.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 HACKSAVVY. All rights reserved.</p>
          <p>
            Organized by{" "}
            <a
              href="https://mgit.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              MGIT, Hyderabad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
