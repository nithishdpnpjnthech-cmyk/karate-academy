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
            Mr. Kashyapa Brahma, Founder and Director of Huura Multi Skill Academy Pvt. Ltd., is a dedicated Karate practitioner, educator, and mentor committed to building discipline, confidence, and strong character through skill-based learning.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="Kashiyappa.jpg" alt="Master Sensei Kashyapa Brahma" className="rounded-lg shadow-xl" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-6">
                Master Sensei Kashyapa Brahma
              </h2>
              <h3 className="font-heading font-semibold text-xl mb-4">About the Founder &amp; Director</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Mr. Kashyapa Brahma, Founder and Director of Huura Multi Skill Academy Pvt. Ltd., is a dedicated Karate practitioner, educator, and mentor committed to building discipline, confidence, and strong character through skill-based learning. Born and raised in Bengaluru, Karnataka, his journey reflects over two decades of continuous practice, teaching, and community engagement.
              </p>

              <h3 className="font-heading font-semibold text-xl mb-4">Professional Journey &amp; Philosophy</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With 20+ years of Karate practice and 12+ years of teaching experience, Sensei Kashyapa has trained thousands of students, guiding them to experience martial arts not merely as a sport, but as a way of life rooted in focus, respect, resilience, and self-discipline. His teaching philosophy extends beyond physical training to include life skills, mental strength, and personal growth.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                In addition to martial arts, he is a certified Learn-to-Swim instructor, having helped thousands of individuals develop water confidence and essential swimming skills—reinforcing his belief that life skills are as important as competitive abilities.
              </p>

              <h3 className="font-heading font-semibold text-xl mb-4">Leadership &amp; Contributions</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Sensei Kashyapa holds several key leadership roles within the martial arts community: Founder, Mizu Tai Khi Karate-Do Federation; President, Karnataka Goju-Ryu Karate-Do Federation; and Referee Commission Secretary, UGKFI. A 4th Dan Black Belt certified by the International Okinawa Goju-Ryu Karate Organisation, he also holds a World Goju-Ryu Karate Federation Referee Licence and has officiated at international championships in Malaysia, Nepal, Austria, and Sri Lanka.
              </p>

              <h3 className="font-heading font-semibold text-xl mb-4">Huura Multi Skill Academy — The Vision in Action</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Huura Multi Skill Academy was founded to create a single, trusted platform that connects learners with qualified coaches across multiple disciplines. The academy offers structured training in Karate, Bharatanatyam, Yoga, Swimming, Football, Badminton, Basketball, Gymnastics, Skating, and other skill-based programs, supporting learners of all ages to achieve their personal goals while also providing sustainable opportunities for coaches.
              </p>

              <h3 className="font-heading font-semibold text-xl mb-4">Beyond Training</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Beyond coaching and leadership, Sensei Kashyapa runs ALFO Events, a professional event production company, and is an experienced Master of Ceremonies. Passionate about teaching life skills beyond the training floor, he believes in holistic development through discipline and mindful living. In his personal time, he enjoys exploring and sharing vegan cooking, reflecting his balanced approach to health and lifestyle.
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