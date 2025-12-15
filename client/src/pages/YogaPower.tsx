import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function YogaPower() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 bg-foreground">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white uppercase mb-4">Power Yoga</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Intense fitness-based yoga</p>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">About Power Yoga</h2>
              <p className="text-muted-foreground text-lg mb-4">Intense, fitness-based approach focusing on building core strength and endurance.</p>
              <p className="text-muted-foreground text-lg mb-6">Duration: 60-75 minutes | Intensity: High</p>
              <h3 className="font-heading font-semibold text-xl mb-4">What You'll Learn</h3>
              <ul className="space-y-2 mb-8">
                {["Strength building poses", "Core conditioning", "Endurance training", "Advanced arm balances", "Intense cardio flow", "Athletic performance"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact"><Button size="lg">Power Up</Button></Link>
            </div>
            <div><img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop" alt="Power Yoga" className="rounded-lg shadow-xl" /></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
