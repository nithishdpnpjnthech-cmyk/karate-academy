import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function KarateAdvanced() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 bg-foreground">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4">
            Advanced Black Belt Karate
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Master complex techniques and become a black belt
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">About Advanced Level</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Master complex kata, competition preparation, and teaching assistant opportunities. 
                This level prepares you for black belt grading and leadership roles.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Duration: 12+ months | Belt Range: Brown to Black Belt
              </p>
              
              <h3 className="font-heading font-semibold text-xl mb-4">What You'll Learn</h3>
              <ul className="space-y-2 mb-8">
                {["Advanced kata (Tekki, Bassai Dai, Kanku Dai)", "Free sparring techniques", "Tournament strategies", "Teaching methodology", "Black belt examination prep", "Leadership and mentoring"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button size="lg">Join Advanced Training</Button>
              </Link>
            </div>
            <div>
              <img src="/gallery/karate/advance.JPG" alt="Advanced Karate" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
