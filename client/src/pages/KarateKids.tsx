import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function KarateKids() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 bg-foreground">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4">
            Kids Karate Program
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Fun, safe, and educational martial arts for children
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">About Kids Karate</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Age-appropriate training focusing on discipline, respect, and fun learning environment. 
                Our kids program builds confidence, coordination, and character.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Age Range: 5-12 years | Duration: Ongoing
              </p>
              
              <h3 className="font-heading font-semibold text-xl mb-4">Program Benefits</h3>
              <ul className="space-y-2 mb-8">
                {["Builds confidence and self-esteem", "Improves focus and concentration", "Develops discipline and respect", "Enhances physical fitness", "Anti-bullying strategies", "Fun and engaging classes"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button size="lg">Enroll Your Child</Button>
              </Link>
            </div>
            <div>
              <img src="/gallery/karate/kids.JPG" alt="Kids Karate" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
