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
  "Build physical strength and endurance",
  "Develop self-defense capabilities",
  "Improve focus and mental discipline",
  "Boost confidence and self-esteem",
  "Learn traditional martial arts values",
  "Progress through belt ranking system",
];

const classLevels = [
  {
    id: "beginner",
    title: "Beginner Level",
    description: "Perfect for those new to martial arts. Learn fundamental stances, basic kicks, and punches.",
    duration: "3-6 months",
    beltRange: "White to Yellow Belt",
  },
  {
    id: "intermediate",
    title: "Intermediate Level",
    description: "Build on your foundation with advanced techniques, kata forms, and sparring introduction.",
    duration: "6-12 months",
    beltRange: "Orange to Green Belt",
  },
  {
    id: "advanced",
    title: "Advanced Black Belt",
    description: "Master complex kata, competition preparation, and teaching assistant opportunities.",
    duration: "12+ months",
    beltRange: "Brown to Black Belt",
  },
  {
    id: "kids",
    title: "Kids Karate",
    description: "Age-appropriate training focusing on discipline, respect, and fun learning environment.",
    duration: "Ongoing",
    ageRange: "Ages 5-12",
  },
  {
    id: "self-defense",
    title: "Self-Defense Workshops",
    description: "Practical self-defense techniques for real-world situations. Open to all skill levels.",
    duration: "Weekend sessions",
    format: "Workshop style",
  },
];

const schedule = [
  { day: "Monday", time: "6:00 PM - 7:30 PM", level: "Beginners" },
  { day: "Tuesday", time: "6:00 PM - 7:30 PM", level: "Kids" },
  { day: "Wednesday", time: "6:00 PM - 8:00 PM", level: "Intermediate" },
  { day: "Thursday", time: "6:00 PM - 7:30 PM", level: "Beginners" },
  { day: "Friday", time: "6:00 PM - 8:00 PM", level: "Advanced" },
  { day: "Saturday", time: "9:00 AM - 11:00 AM", level: "All Levels" },
];

export default function ProgramKarate() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1920&h=600&fit=crop)`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-medium uppercase tracking-wide mb-2 animate-fade-in-up">
            Martial Arts Excellence
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4 animate-fade-in-up animation-delay-100">
            Karate Program
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Master the art of Shotokan Karate with our expert instructors
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-about-karate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-6">
                What is Shotokan Karate?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Shotokan is one of the most widely practiced styles of Karate in the world. Founded by Gichin Funakoshi, 
                it emphasizes deep stances, powerful techniques, and the development of character through rigorous training.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At Huura Academy, we follow the traditional Shotokan curriculum while incorporating modern training 
                methods. Our program is designed to build not just physical strength, but also mental fortitude and 
                ethical character.
              </p>
              
              <h3 className="font-heading font-semibold text-xl uppercase tracking-wide mb-4">
                Benefits of Training
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
                  src="https://images.unsplash.com/photo-1564415051543-cb73a40c6a38?w=800&h=800&fit=crop"
                  alt="Karate Training"
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
              We offer programs for all ages and skill levels, from complete beginners to advanced practitioners.
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
                    {level.beltRange && (
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Award className="w-4 h-4 text-primary" />
                        {level.beltRange}
                      </span>
                    )}
                    {level.ageRange && (
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        {level.ageRange}
                      </span>
                    )}
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
                Sensei Kashyapa Brahma
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                5th Dan Black Belt with over 20 years of experience in Shotokan Karate. Sensei Kumar has trained 
                under renowned masters in Japan and has competed at national and international levels.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                His teaching philosophy combines traditional values with modern pedagogy, ensuring that every 
                student receives personalized attention and guidance on their martial arts journey.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl max-w-sm mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop"
                  alt="Sensei Kashyapa Brahma"
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
              Find the perfect time slot for your training sessions.
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
