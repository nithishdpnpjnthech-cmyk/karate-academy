import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden"
      data-testid="section-cta"
       style={{
            backgroundImage: `url(/gallery/karate/Begin%20Your%20Journey%20Today.jpeg)`,
          }}
    >
      
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-white uppercase tracking-wide mb-6">
          Begin Your Journey Today
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Join thousands of students who have transformed their lives through our programs. 
          Book a free trial class and experience the difference.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="text-lg px-8" data-testid="button-cta-trial">
              Book Free Trial
            </Button>
          </Link>
          <Link href="/programs">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/20 border-white/50 text-white backdrop-blur-sm"
              data-testid="button-cta-programs"
            >
              Explore Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

