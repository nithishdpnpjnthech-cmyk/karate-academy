import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function BharatanatyamBasics() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 bg-foreground">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4">
            Basics & Adavus
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Foundation course in classical Bharatanatyam dance
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">About Basics & Adavus</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Foundation course covering basic postures, hand gestures (mudras), and fundamental adavus (steps). 
                Learn the building blocks of this ancient art form.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Duration: 6 months | Focus: Fundamentals
              </p>
              
              <h3 className="font-heading font-semibold text-xl mb-4">What You'll Learn</h3>
              <ul className="space-y-2 mb-8">
                {["Basic aramandi (half-sitting posture)", "Fundamental hand gestures (mudras)", "Tatta, Natta, and Visharu adavus", "Rhythm and tala basics", "Body alignment and posture", "Introduction to abhinaya (expression)"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button size="lg">Start Your Journey</Button>
              </Link>
            </div>
            <div>
              <img src="/bharatanatyam.jpg" alt="Bharatanatyam Basics" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
