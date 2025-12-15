import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    id: "karate",
    title: "Karate",
    subtitle: "Martial Arts Excellence",
    description: "Build strength and self-defense skills through our comprehensive Karate program. From beginners to advanced black belt training, we offer classes for all ages and skill levels.",
    image: "/gallery/karate/01.JPG",
    href: "/programs/karate",
    features: ["Self-Defense Techniques", "Belt Grading System", "Competition Training", "Kids & Adults Classes"],
  },
  {
    id: "bharatanatyam",
    title: "Bharatanatyam",
    subtitle: "Classical Dance Tradition",
    description: "Connect with rhythm and tradition through the ancient art of Bharatanatyam. Learn from certified instructors who bring years of performance and teaching experience.",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&h=900&fit=crop",
    href: "/programs/bharatanatyam",
    features: ["Traditional Adavus", "Mudra Techniques", "Performance Training", "Theory Classes"],
  },
  {
    id: "yoga",
    title: "Yoga",
    subtitle: "Mind-Body Wellness",
    description: "Find your inner peace and flexibility with our holistic yoga programs. From gentle Hatha to powerful Vinyasa, we have classes for every fitness level.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=900&fit=crop",
    href: "/programs/yoga",
    features: ["Hatha & Vinyasa", "Meditation Sessions", "Breathing Techniques", "Flexibility Training"],
  },
];

export default function Programs() {
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
            Our Programs
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Expert-led training in Karate, Bharatanatyam, and Yoga for all ages and skill levels.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-programs-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={program.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
                data-testid={`card-program-${program.id}`}
              >
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-primary text-sm font-medium uppercase tracking-wide mb-1">
                      {program.subtitle}
                    </p>
                    <h3 className="font-heading font-bold text-3xl text-white uppercase tracking-wide">
                      {program.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {program.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={program.href}>
                    <Button className="w-full group" data-testid={`button-view-${program.id}`}>
                      View Classes
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
