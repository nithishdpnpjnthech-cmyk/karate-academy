import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const plans = [
  {
    id: "kids",
    name: "Kids Plan",
    price: "2,499",
    period: "month",
    description: "Perfect for young martial artists",
    features: [
      { text: "12 Sessions / Month", included: true },
      { text: "Belt Grading Support", included: true },
      { text: "Age-appropriate Training", included: true },
      { text: "Progress Reports", included: true },
      { text: "Certification Included", included: false },
      { text: "Competition Training", included: false },
    ],
    popular: false,
  },
  {
    id: "students",
    name: "Students Plan",
    price: "3,999",
    period: "month",
    description: "Most popular choice for dedicated learners",
    features: [
      { text: "16 Sessions / Month", included: true },
      { text: "Belt Grading Support", included: true },
      { text: "Competition Training", included: true },
      { text: "Certification Included", included: true },
      { text: "Workshop Access", included: true },
      { text: "Personal Training", included: false },
    ],
    popular: true,
  },
  {
    id: "adults",
    name: "Adults / Professionals",
    price: "5,999",
    period: "month",
    description: "Comprehensive package for serious practitioners",
    features: [
      { text: "Unlimited Sessions", included: true },
      { text: "Weekend Special Batches", included: true },
      { text: "Personal Training Option", included: true },
      { text: "All Certifications", included: true },
      { text: "Priority Scheduling", included: true },
      { text: "Guest Passes (2/month)", included: true },
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 bg-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(/gallery/karate/Begin%20Your%20Journey%20Today.jpeg)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4 animate-fade-in-up">
            Pricing Plans
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Flexible membership options for every journey
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-pricing-cards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <Card
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-300 animate-fade-in-up ${
                  plan.popular
                    ? "border-2 border-primary shadow-xl scale-[1.02] lg:scale-105"
                    : "border border-border shadow-lg hover:shadow-xl"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
                data-testid={`card-plan-${plan.id}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-bl-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pt-8 pb-6">
                  <h3 className="font-heading font-bold text-xl uppercase tracking-wide mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-medium">₹</span>
                    <span className="text-5xl font-heading font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/ {plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.text}
                        className={`flex items-center gap-3 ${
                          feature.included ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {feature.included ? (
                          <Check className="w-5 h-5 text-primary shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 shrink-0" />
                        )}
                        <span className={feature.included ? "" : "line-through opacity-50"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                      data-testid={`button-select-${plan.id}`}
                    >
                      Select Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Not sure which plan is right for you?
            </p>
            <Link href="/contact">
              <Button variant="outline" size="lg" data-testid="button-contact-help">
                Contact Us for Help
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30" data-testid="section-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-lg mb-2">
                Can I try a class before committing?
              </h3>
              <p className="text-muted-foreground">
                Yes! We offer a free trial class for all new students. Contact us to schedule your session.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-lg mb-2">
                Can I switch between programs?
              </h3>
              <p className="text-muted-foreground">
                Absolutely. Our plans are flexible and allow you to attend any class within your session limit.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-lg mb-2">
                What's included in the certification?
              </h3>
              <p className="text-muted-foreground">
                Our certifications are recognized industry-wide and include belt rankings for Karate, 
                level certifications for Bharatanatyam, and RYT hours for Yoga.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-lg mb-2">
                Is there a family discount?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer special family packages. Contact us for more information on family discounts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
