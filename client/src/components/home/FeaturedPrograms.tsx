import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    id: "karate",
    title: "Karate",
    description: "Build strength, discipline, and self-defense skills with our comprehensive martial arts training.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&h=400&fit=crop",
    href: "/programs/karate",
  },
  {
    id: "bharatanatyam",
    title: "Bharatanatyam",
    description: "Connect with rhythm and tradition through the ancient art of classical Indian dance.",
    image: "/bharatanatyam.jpg",
    href: "/programs/bharatanatyam",
  },
  {
    id: "yoga",
    title: "Yoga",
    description: "Find your inner peace and flexibility with our holistic yoga and meditation programs.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    href: "/programs/yoga",
  },
];

export function FeaturedPrograms() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30" data-testid="section-featured-programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
            Our Programs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our expertly designed programs tailored for all skill levels and age groups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <Link key={program.id} href={program.href}>
              <Card
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 0.15}s` }}
                data-testid={`card-program-${program.id}`}
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-white uppercase tracking-wide">
                    {program.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {program.description}
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    View Classes
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
