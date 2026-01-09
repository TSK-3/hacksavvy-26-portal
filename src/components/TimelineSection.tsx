import { useEffect, useRef, useState } from "react";

const timelineEvents = [
  {
    date: "Feb 15, 2026",
    title: "Registration Opens",
    description: "Team registration begins. Form your dream team!",
  },
  {
    date: "Mar 1, 2026",
    title: "Registration Closes",
    description: "Last date to register your team.",
  },
  {
    date: "Mar 15, 2026 | 9:00 AM",
    title: "Inauguration & Kickoff",
    description: "Opening ceremony and problem statement reveal.",
  },
  {
    date: "Mar 15, 2026 | 10:00 AM",
    title: "Hacking Begins",
    description: "24 hours of non-stop coding and innovation!",
  },
  {
    date: "Mar 16, 2026 | 10:00 AM",
    title: "Hacking Ends",
    description: "Final submissions and project freeze.",
  },
  {
    date: "Mar 16, 2026 | 12:00 PM",
    title: "Presentations & Judging",
    description: "Pitch your solution to the jury.",
  },
  {
    date: "Mar 16, 2026 | 4:00 PM",
    title: "Winners Announced",
    description: "Prize distribution and closing ceremony.",
  },
];

export const TimelineSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      const scrolled = Math.max(0, windowHeight - sectionTop);
      const progress = Math.min(100, (scrolled / (sectionHeight + windowHeight)) * 100);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="timeline" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Event <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mark your calendars! Here's everything you need to know about the event schedule.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line - background */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-border" />

            {/* Timeline line - progress fill */}
            <div
              className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-secondary to-primary transition-all duration-300"
              style={{ height: `${scrollProgress}%` }}
            />

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2 glow-primary" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="p-4 rounded-xl bg-card border border-border card-hover">
                    <span className="text-xs font-medium text-primary">{event.date}</span>
                    <h3 className="text-lg font-heading font-semibold mt-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
