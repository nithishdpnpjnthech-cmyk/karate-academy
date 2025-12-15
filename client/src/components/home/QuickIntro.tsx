import { Shield, Flower2, Leaf } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "Discipline",
    description: "Build mental strength and self-control through rigorous martial arts training.",
  },
  {
    icon: Flower2,
    title: "Culture",
    description: "Connect with ancient traditions through classical Bharatanatyam dance.",
  },
  {
    icon: Leaf,
    title: "Wellness",
    description: "Achieve balance and inner peace with our holistic yoga programs.",
  },
];

export function QuickIntro() {
  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-quick-intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4 animate-fade-in-up">
            More Than a Gym
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            We are a sanctuary for physical and mental growth. Discover your potential through our expert-led programs.
          </p>
          <div className="mt-8 animate-fade-in-up animation-delay-300">
            <Link href="/founder">
              <Button variant="outline" size="lg">
                Know More About Our Founder
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              data-testid={`card-feature-${feature.title.toLowerCase()}`}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <feature.icon className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-semibold text-xl uppercase tracking-wide mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
