import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in HACKSAVVY-26?",
    answer: "The hackathon is open to all undergraduate and postgraduate students. You can form teams of 2 to 4 members. Inter-college teams are allowed and encouraged!",
  },
  {
    question: "What is the registration fee?",
    answer: "The registration fee is ₹400 per team (2-4 members). For exceptional cases with 5 members, the total fee is ₹500. This includes meals and basic accommodation for outstation participants.",
  },
  {
    question: "Is accommodation provided?",
    answer: "Yes, accommodation may be provided for outstation participants based on availability. Contact details for coordination will be shared after registration confirmation.",
  },
  {
    question: "What about the problem statements?",
    answer: "All problem statements are exclusively created by MGIT College and industry partners. They will be revealed at the start of the hackathon during the inauguration ceremony.",
  },
  {
    question: "Who owns the intellectual property of the solutions?",
    answer: "Solutions developed during the hackathon in response to MGIT-defined problem statements will be the intellectual property of MGIT College. MGIT has full rights to use, modify, publish, or implement the solutions as needed.",
  },
  {
    question: "What are the evaluation criteria?",
    answer: "Solutions will be evaluated based on Innovation (25%), Feasibility (25%), Technical Implementation (30%), and Presentation (20%). In case of a tie, preference will be given to 4-member teams.",
  },
  {
    question: "What should we bring to the hackathon?",
    answer: "Bring your laptop, charger, student ID, and any hardware you might need for your project. We'll provide food, drinks, WiFi, and a conducive hacking environment!",
  },
  {
    question: "Can we use pre-built code or templates?",
    answer: "You can use open-source libraries and frameworks, but the core solution must be built during the hackathon. Any form of plagiarism or pre-built solutions may lead to disqualification.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faqs" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you don't find what you're looking for, feel free to reach out!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-heading font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
