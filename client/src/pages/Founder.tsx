import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, Users, Calendar, Trophy } from "lucide-react";

const achievements = [
  { icon: Award, title: "5th Dan Black Belt", description: "Shotokan Karate Master" },
  { icon: Users, title: "1000+ Students", description: "Trained over the years" },
  { icon: Calendar, title: "20+ Years", description: "Teaching Experience" },
  { icon: Trophy, title: "National Champion", description: "Multiple competitions" },
];

export default function Founder() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 bg-foreground">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4">
            Our Founder
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Meet the visionary behind Huura Academy
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="Kashiyappa Bramha.jpg" alt="Master Sensei Kashyapa Brahma" className="rounded-lg shadow-xl" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-6">
                Master Sensei Kashyapa Brahma
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Born in 1975, Kashyapa Brahma began his martial arts journey at the age of 8. His passion for traditional disciplines 
                led him to master not only Karate but also understand the deeper philosophy of movement through dance and yoga.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                After training under renowned masters in Japan and India, he returned with a vision to create a holistic academy 
                that would preserve ancient traditions while making them accessible to modern practitioners.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                In 2010, he founded Huura Academy with the belief that true strength comes from the harmony of body, mind, and spirit. 
                Today, his teachings continue to transform lives across our community.
              </p>
              
              <div className="bg-secondary/20 p-6 rounded-lg mb-8">
                <h3 className="font-heading font-semibold text-xl mb-4">Contact Master Kashyapa Brahma</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Address:</strong> 2nd floor, 2M-445, 2nd Main Rd, Lal Bahadur Nagar, East of NGEF Layout, Kasturi Nagar, Bengaluru, Karnataka 560043
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> <a href="tel:08147733445" className="text-primary hover:underline">081477 33445</a>
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={achievement.title} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                    <achievement.icon className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-semibold">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button size="lg">Train with the Master</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}