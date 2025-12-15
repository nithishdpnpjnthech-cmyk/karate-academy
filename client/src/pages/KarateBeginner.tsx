import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function KarateBeginner() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 bg-foreground">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4">
            Beginner Level Karate
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Start your martial arts journey with foundational techniques
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">About Beginner Level</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Perfect for those new to martial arts. This program introduces fundamental stances, basic kicks, punches, and blocks. 
                You'll learn proper form, breathing techniques, and the philosophy behind Shotokan Karate.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Duration: 3-6 months | Belt Range: White to Yellow Belt
              </p>
              
              <h3 className="font-heading font-semibold text-xl mb-4">What You'll Learn</h3>
              <ul className="space-y-2 mb-8">
                {["Basic stances (Zenkutsu-dachi, Kokutsu-dachi)", "Fundamental punches (Oi-zuki, Gyaku-zuki)", "Basic kicks (Mae-geri, Yoko-geri)", "Blocking techniques", "First kata: Heian Shodan", "Dojo etiquette and discipline"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button size="lg">Book Free Trial Class</Button>
              </Link>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop" alt="Beginner Karate" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
