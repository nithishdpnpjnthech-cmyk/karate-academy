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
import { Check, Clock, Users, Award } from "lucide-react";

const benefits = [
  "Learn ancient Indian classical dance form",
  "Develop grace, poise, and expression",
  "Improve flexibility and coordination",
  "Understand music and rhythm theory",
  "Participate in cultural performances",
  "Earn certified dance credentials",
];

const classLevels = [
  {
    id: "basics",
    title: "Basics & Adavus",
    description: "Foundation course covering basic postures, hand gestures, and fundamental adavus (steps).",
    duration: "6 months",
    focus: "Fundamentals",
  },
  {
    id: "intermediate",
    title: "Intermediate Nritta",
    description: "Build on basics with complex adavu combinations, jathis, and introductory items.",
    duration: "12 months",
    focus: "Technique Building",
  },
  {
    id: "levelup",
    title: "Level-Up Classes",
    description: "Advanced choreography, complex rhythmic patterns, and full margam items.",
    duration: "18+ months",
    focus: "Advanced Training",
  },
  {
    id: "performance",
    title: "Performance Training",
    description: "Intensive preparation for stage performances, arangetrams, and competitions.",
    duration: "Customized",
    focus: "Stage Ready",
  },
  {
    id: "theory",
    title: "Theory & Mudras",
    description: "Deep dive into Natyashastra, Abhinaya, hasta mudras, and the philosophy of dance.",
    duration: "Ongoing",
    focus: "Academic Study",
  },
];

const schedule = [
  { day: "Monday", time: "5:00 PM - 6:30 PM", level: "Basics" },
  { day: "Tuesday", time: "5:00 PM - 7:00 PM", level: "Intermediate" },
  { day: "Wednesday", time: "5:00 PM - 6:30 PM", level: "Basics" },
  { day: "Thursday", time: "5:00 PM - 7:30 PM", level: "Advanced" },
  { day: "Friday", time: "5:00 PM - 7:00 PM", level: "Intermediate" },
  { day: "Saturday", time: "10:00 AM - 12:00 PM", level: "All Levels" },
];

export default function ProgramBharatanatyam() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1547153760-18fc86324498?w=1920&h=600&fit=crop)`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-medium uppercase tracking-wide mb-2 animate-fade-in-up">
            Classical Dance Tradition
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4 animate-fade-in-up animation-delay-100">
            Bharatanatyam Program
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Experience the grace and beauty of South Indian classical dance
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-about-bharatanatyam">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-6">
                The Art of Bharatanatyam
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Bharatanatyam is one of the oldest and most prestigious classical dance forms of India, originating 
                in Tamil Nadu. It combines Nritta (pure dance), Nritya (expressive dance), and Natya (drama) to 
                create a complete art form.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our program follows the traditional Thanjavur style while making the art accessible to modern 
                learners. Students develop not just technical proficiency but also an understanding of the 
                cultural and spiritual dimensions of this ancient art.
              </p>
              
              <h3 className="font-heading font-semibold text-xl uppercase tracking-wide mb-4">
                What You Will Learn
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
                  src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&h=800&fit=crop"
                  alt="Bharatanatyam Dance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30" data-testid="section-class-levels">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
              Class Levels
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Progressive training from fundamental basics to performance-ready expertise.
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
                      <Award className="w-4 h-4 text-primary" />
                      {level.focus}
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
                Guru Lakshmi Venkataraman
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                A distinguished Bharatanatyam artist with over 25 years of experience, Guru Lakshmi trained 
                under legendary masters in Chennai. She has performed at prestigious venues across India and 
                internationally.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Her approach blends traditional pedagogy with innovative teaching methods, making the 
                art accessible while preserving its authenticity. Many of her students have gone on to 
                become professional dancers themselves.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl max-w-sm mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&h=800&fit=crop"
                  alt="Guru Lakshmi Venkataraman"
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
              Class Schedule
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join our classes at times that suit your schedule.
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
                      <th className="px-6 py-4 text-left font-heading font-semibold uppercase tracking-wide">Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((item, index) => (
                      <tr
                        key={item.day}
                        className={`${index % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
                      >
                        <td className="px-6 py-4 font-medium">{item.day}</td>
                        <td className="px-6 py-4 text-muted-foreground">{item.time}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                            {item.level}
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
