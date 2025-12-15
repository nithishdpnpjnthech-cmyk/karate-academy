import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function KarateIntermediate() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 bg-foreground">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4">
            Intermediate Level Karate
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Build on your foundation with advanced techniques
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">About Intermediate Level</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Build on your foundation with advanced techniques, kata forms, and sparring introduction. 
                Develop speed, power, and precision in your movements.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Duration: 6-12 months | Belt Range: Orange to Green Belt
              </p>
              
              <h3 className="font-heading font-semibold text-xl mb-4">What You'll Learn</h3>
              <ul className="space-y-2 mb-8">
                {["Advanced kata (Heian Nidan to Godan)", "Combination techniques", "Introduction to kumite (sparring)", "Advanced kicks and strikes", "Counter-attack strategies", "Competition preparation"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button size="lg">Enroll Now</Button>
              </Link>
            </div>
            <div>
              <img src="/gallery/events/intermediate.JPG" alt="Beginner Karate" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
