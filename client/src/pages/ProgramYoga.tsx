import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Clock, Users, Heart } from "lucide-react";

const benefits = [
  "Improve flexibility and strength",
  "Reduce stress and anxiety",
  "Enhance mental clarity and focus",
  "Better sleep quality",
  "Increased energy levels",
  "Mind-body connection",
];

const classLevels = [
  {
    id: "hatha",
    title: "Hatha Yoga",
    description: "Traditional yoga focusing on physical postures (asanas) and breath control (pranayama). Perfect for beginners.",
    duration: "60-75 minutes",
    intensity: "Gentle to Moderate",
  },
  {
    id: "vinyasa",
    title: "Vinyasa Flow",
    description: "Dynamic practice linking breath with movement. Build strength while maintaining fluidity.",
    duration: "60 minutes",
    intensity: "Moderate to High",
  },
  {
    id: "power",
    title: "Power Yoga",
    description: "Intense, fitness-based approach focusing on building core strength and endurance.",
    duration: "60-75 minutes",
    intensity: "High",
  },
  {
    id: "flexibility",
    title: "Flexibility & Mobility",
    description: "Targeted sessions to improve range of motion and reduce muscle tension.",
    duration: "45-60 minutes",
    intensity: "Gentle",
  },
  {
    id: "meditation",
    title: "Meditation & Breathwork",
    description: "Guided meditation and pranayama techniques for mental wellness and inner peace.",
    duration: "30-45 minutes",
    intensity: "Restorative",
  },
];

const schedule = [
  { day: "Monday", time: "6:00 AM - 7:00 AM", type: "Hatha Yoga" },
  { day: "Monday", time: "6:30 PM - 7:30 PM", type: "Vinyasa Flow" },
  { day: "Tuesday", time: "6:00 AM - 7:00 AM", type: "Power Yoga" },
  { day: "Wednesday", time: "6:00 AM - 7:00 AM", type: "Hatha Yoga" },
  { day: "Wednesday", time: "6:30 PM - 7:15 PM", type: "Meditation" },
  { day: "Thursday", time: "6:00 AM - 7:00 AM", type: "Vinyasa Flow" },
  { day: "Friday", time: "6:00 AM - 6:45 AM", type: "Flexibility" },
  { day: "Saturday", time: "7:00 AM - 8:30 AM", type: "All Styles" },
  { day: "Sunday", time: "8:00 AM - 9:00 AM", type: "Meditation" },
];

export default function ProgramYoga() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=600&fit=crop)`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-medium uppercase tracking-wide mb-2 animate-fade-in-up">
            Mind-Body Wellness
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4 animate-fade-in-up animation-delay-100">
            Yoga Program
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Find balance, flexibility, and inner peace through yoga
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-about-yoga">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-6">
                Transform Your Life Through Yoga
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Yoga is more than just physical exercise - it's a complete system for harmonizing body, mind, 
                and spirit. Our comprehensive program draws from multiple traditions to offer a holistic 
                approach to wellness.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you're looking to build strength, increase flexibility, reduce stress, or deepen your 
                meditation practice, our certified instructors will guide you on your personal journey to 
                optimal health and well-being.
              </p>
              
              <h3 className="font-heading font-semibold text-xl uppercase tracking-wide mb-4">
                Benefits of Regular Practice
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=800&fit=crop"
                  alt="Yoga Practice"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-class-types">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
              Class Types
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From gentle restorative sessions to intense power flows, find the style that suits you.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {classLevels.map((level, index) => (
              <AccordionItem
                key={level.id}
                value={level.id}
                className="bg-background rounded-lg shadow-md border-0 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`accordion-${level.id}`}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="font-heading font-semibold text-lg uppercase tracking-wide text-left">
                    {level.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground mb-4">{level.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {level.duration}
                    </span>
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Heart className="w-4 h-4 text-primary" />
                      {level.intensity}
                    </span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-instructor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-medium uppercase tracking-wide mb-2">
                Your Instructor
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
                Yoga Teacher Priya Sharma
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                A certified 500-hour RYT with specializations in Hatha, Vinyasa, and Restorative yoga. 
                Priya has studied at renowned ashrams in Rishikesh and has been teaching for over 15 years.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Her classes focus on alignment, breath awareness, and mindful movement. She creates a 
                welcoming space for practitioners of all levels to explore and deepen their practice.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl max-w-sm mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=800&fit=crop"
                  alt="Yoga Teacher Priya Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-schedule">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
              Weekly Schedule
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Morning and evening sessions available throughout the week.
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full" data-testid="table-schedule">
                  <thead>
                    <tr className="bg-foreground text-white">
                      <th className="px-6 py-4 text-left font-heading font-semibold uppercase tracking-wide">Day</th>
                      <th className="px-6 py-4 text-left font-heading font-semibold uppercase tracking-wide">Time</th>
                      <th className="px-6 py-4 text-left font-heading font-semibold uppercase tracking-wide">Class Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((item, index) => (
                      <tr
                        key={`${item.day}-${item.time}`}
                        className={`${index % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
                      >
                        <td className="px-6 py-4 font-medium">{item.day}</td>
                        <td className="px-6 py-4 text-muted-foreground">{item.time}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                            {item.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8" data-testid="button-book-trial">
                Book a Free Trial Class
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
