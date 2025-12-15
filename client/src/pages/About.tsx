import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Award, Shield, Users, Target } from "lucide-react";

const values = [
  { title: "Discipline", description: "Building mental fortitude and self-control" },
  { title: "Respect", description: "Honoring traditions and fellow practitioners" },
  { title: "Perseverance", description: "Never giving up on your journey" },
];

const whyChooseUs = [
  { icon: Award, text: "Certified Instructors" },
  { icon: Shield, text: "Safety First Environment" },
  { icon: Target, text: "State-of-the-art Dojo" },
  { icon: Users, text: "Personalized Attention" },
];

export default function About() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 bg-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&h=600&fit=crop)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4 animate-fade-in-up">
            About Us
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Building Warriors of Character Since 2010
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-our-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded in 2010, Huura Academy started with a simple mission: to empower individuals through martial arts, 
                classical dance, and yoga. What began as a small dojo with just a handful of students has grown into a 
                thriving community of warriors, dancers, and wellness enthusiasts.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our founder, Master Sensei Kashyapa Brahma, envisioned a space where traditional disciplines could be taught 
                with modern teaching methods. Today, we continue to honor that vision by offering world-class training 
                in Karate, Bharatanatyam, and Yoga.
              </p>
              <Link href="/contact">
                <Button size="lg" data-testid="button-join-us">
                  Join Our Community
                </Button>
              </Link>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop"
                  alt="Huura Academy Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <p className="font-heading font-bold text-3xl">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30" data-testid="section-mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-lg animate-fade-in-up">
              <h3 className="font-heading font-bold text-2xl uppercase tracking-wide mb-4 text-primary">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower individuals of all ages through martial arts, dance, and yoga, fostering physical 
                fitness, mental strength, and spiritual growth in a supportive and disciplined environment.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-lg animate-fade-in-up animation-delay-200">
              <h3 className="font-heading font-bold text-2xl uppercase tracking-wide mb-4 text-primary">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To create a community of warriors with character, spreading the values of discipline, respect, 
                and perseverance across generations and inspiring excellence in every aspect of life.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-wide mb-8">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  data-testid={`text-value-${value.title.toLowerCase()}`}
                >
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="font-heading font-bold text-2xl text-primary">
                      {value.title.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-heading font-semibold text-xl uppercase tracking-wide mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the difference with our world-class facilities and expert instructors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.text}
                className="flex items-center gap-4 p-6 bg-secondary/30 rounded-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`card-why-${index}`}
              >
                <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
