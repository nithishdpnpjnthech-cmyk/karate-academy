import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function BharatanatyamIntermediate() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 bg-foreground">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white uppercase mb-4">Intermediate Nritta</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Advanced technique building in Bharatanatyam</p>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">About Intermediate Nritta</h2>
              <p className="text-muted-foreground text-lg mb-4">Build on basics with complex adavu combinations, jathis, and introductory items.</p>
              <p className="text-muted-foreground text-lg mb-6">Duration: 12 months | Focus: Technique Building</p>
              <h3 className="font-heading font-semibold text-xl mb-4">What You'll Learn</h3>
              <ul className="space-y-2 mb-8">
                {["Complex adavu combinations", "Jathis and rhythmic patterns", "Alarippu and Jatiswaram", "Advanced footwork", "Expression techniques", "Stage presence"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact"><Button size="lg">Enroll Now</Button></Link>
            </div>
            <div><img src="/bharatanatyam.jpg" alt="Intermediate" className="rounded-lg shadow-xl" /></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
