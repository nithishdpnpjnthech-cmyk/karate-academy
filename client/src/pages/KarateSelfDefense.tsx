import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function KarateSelfDefense() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 bg-foreground">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4">
            Self-Defense Workshops
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Practical self-defense for real-world situations
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">About Self-Defense Workshops</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Practical self-defense techniques for real-world situations. Open to all skill levels. 
                Learn how to protect yourself and your loved ones with confidence.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Format: Weekend workshops | Duration: 2-4 hours per session
              </p>
              
              <h3 className="font-heading font-semibold text-xl mb-4">What You'll Learn</h3>
              <ul className="space-y-2 mb-8">
                {["Situational awareness techniques", "Escape from grabs and holds", "Strike points and vulnerable areas", "Ground defense basics", "De-escalation strategies", "Confidence building exercises"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button size="lg">Register for Workshop</Button>
              </Link>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1564415051543-cb73a40c6a38?w=800&h=600&fit=crop" alt="Self Defense" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
