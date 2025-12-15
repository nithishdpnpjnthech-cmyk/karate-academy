import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/home/HeroSlider";
import { QuickIntro } from "@/components/home/QuickIntro";
import { FeaturedPrograms } from "@/components/home/FeaturedPrograms";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <HeroSlider />
      <QuickIntro />
      
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="animate-slide-in-left flex flex-col justify-center h-full order-first lg:order-none">
              <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-6">
                Meet Our Founder
              </h2>
              <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
                Master Sensei Kashyapa Brahma
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Mr. Kashyapa Brahma began his martial arts journey at age 8 and founded Huura Academy in 2010 to create a holistic space for traditional disciplines that blend technical training with life skills.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With 20+ years of practice and 12+ years of teaching, Sensei Kashyapa has trained thousands of students, emphasizing discipline, respect, resilience, and personal growth.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl text-primary">20+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl text-primary">1000+</p>
                  <p className="text-sm text-muted-foreground">Students Trained</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl text-primary">5th Dan</p>
                  <p className="text-sm text-muted-foreground">Black Belt</p>
                </div>
              </div>
              <Link href="/founder">
                <Button size="lg">
                  Read Full Story
                </Button>
              </Link>
            </div>
            <div className="relative animate-slide-in-right flex items-center justify-center order-last lg:order-none">
              <div className="max-w-[390px] w-full rounded-lg overflow-hidden shadow-xl mx-auto">
                <img src="Kashiyappa.jpg" alt="Master Sensei Kashyapa Brahma" className="w-full h-auto object-cover" />

              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold text-lg">Master</p>
                <p className="text-sm">& Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedPrograms />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
              What Our Students Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Real stories from our community of warriors, dancers, and wellness enthusiasts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Priya Sharma", program: "Bharatanatyam", review: "The classical dance training here is exceptional. I've grown so much as a dancer." },
              { name: "Arjun Patel", program: "Karate", review: "The discipline and techniques I've learned have transformed my mental focus." },
              { name: "Meera Reddy", program: "Yoga", review: "Perfect for stress relief. I feel more balanced and centered after every class." }
            ].map((review, index) => (
              <Card key={review.name} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{review.review}"</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.program}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/reviews">
              <Button variant="outline" size="lg">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <CTASection />
    </Layout>
  );
}
