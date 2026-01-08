import { Award, Gift, Medal, Star } from "lucide-react";

const prizes = [
  {
    place: "1st",
    prize: "₹50,000",
    icon: Award,
    color: "from-yellow-400 to-amber-600",
    extras: ["Winner Trophy", "Internship Opportunities", "Swag Kit"],
  },
  {
    place: "2nd",
    prize: "₹30,000",
    icon: Medal,
    color: "from-gray-300 to-gray-500",
    extras: ["Runner-up Trophy", "Mentorship Sessions", "Swag Kit"],
  },
  {
    place: "3rd",
    prize: "₹20,000",
    icon: Star,
    color: "from-amber-600 to-amber-800",
    extras: ["Trophy", "Course Vouchers", "Swag Kit"],
  },
];

export const PrizesSection = () => {
  return (
    <section id="prizes" className="py-24 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Prizes & <span className="text-gradient">Rewards</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Win big! Top teams take home cash prizes, trophies, and exclusive opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={prize.place}
              className={`relative p-8 rounded-2xl border border-border bg-card card-hover text-center ${
                index === 0 ? "md:-mt-4 md:scale-105" : ""
              }`}
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${prize.color} flex items-center justify-center mb-6`}
              >
                <prize.icon className="w-10 h-10 text-background" />
              </div>

              {/* Place */}
              <div className="text-sm font-medium text-muted-foreground mb-2">
                {prize.place} Place
              </div>

              {/* Prize Amount */}
              <div className="text-4xl font-heading font-bold text-gradient mb-6">
                {prize.prize}
              </div>

              {/* Extras */}
              <ul className="space-y-2">
                {prize.extras.map((extra) => (
                  <li key={extra} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Gift className="w-4 h-4 text-primary" />
                    {extra}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Special Prizes */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-heading font-semibold mb-4">Special Category Prizes</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Best UI/UX", "Best AI Solution", "Most Innovative", "Best Freshers Team"].map((category) => (
              <div
                key={category}
                className="px-6 py-3 rounded-full bg-gradient-card border border-border text-sm font-medium"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
