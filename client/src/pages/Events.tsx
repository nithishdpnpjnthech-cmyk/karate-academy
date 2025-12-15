import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Karate Championship 2025",
    date: "December 15, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Huura Academy Main Hall",
    description: "Our biggest event of the year! Students from all levels compete in kata and kumite categories.",
    category: "Competition",
    spots: "Limited spots available",
  },
  {
    id: 2,
    title: "Navratri Dance Recital",
    date: "October 10-12, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "City Cultural Center",
    description: "A spectacular celebration of classical dance featuring our Bharatanatyam students in traditional performances.",
    category: "Performance",
    spots: "Open to all",
  },
  {
    id: 3,
    title: "International Yoga Day Celebration",
    date: "June 21, 2025",
    time: "5:00 AM - 8:00 AM",
    location: "Central Park Grounds",
    description: "Join hundreds of practitioners for a sunrise yoga session celebrating International Yoga Day.",
    category: "Community Event",
    spots: "Free entry",
  },
  {
    id: 4,
    title: "Self-Defense Workshop for Women",
    date: "March 8, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Huura Academy Studio B",
    description: "A special workshop on International Women's Day focusing on practical self-defense techniques.",
    category: "Workshop",
    spots: "30 spots available",
  },
  {
    id: 5,
    title: "Belt Grading Ceremony - Q1",
    date: "March 28, 2025",
    time: "4:00 PM - 7:00 PM",
    location: "Huura Academy Main Hall",
    description: "Quarterly belt grading ceremony for Karate students advancing to the next level.",
    category: "Grading",
    spots: "Registered students only",
  },
  {
    id: 6,
    title: "Summer Martial Arts Camp",
    date: "May 15 - May 25, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Huura Academy Campus",
    description: "10-day intensive summer camp for kids combining Karate training with fun activities and games.",
    category: "Camp",
    spots: "50 spots available",
  },
];

const pastEvents = [
  {
    id: 101,
    title: "Diwali Cultural Evening",
    date: "November 2024",
    description: "A beautiful evening of dance, music, and celebration.",
  },
  {
    id: 102,
    title: "National Karate Championship",
    date: "September 2024",
    description: "Our students won 5 gold and 3 silver medals at the national level.",
  },
  {
    id: 103,
    title: "Yoga Retreat - Rishikesh",
    date: "August 2024",
    description: "A transformative 3-day retreat at the yoga capital of the world.",
  },
];

export default function Events() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 bg-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
         style={{
            backgroundImage: `url(/gallery/karate/Begin%20Your%20Journey%20Today.jpeg)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4 animate-fade-in-up">
            Events & Competitions
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Join us for exciting events, competitions, and workshops
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-upcoming-events">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't miss out on our exciting upcoming events and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`card-event-${event.id}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-2">
                        {event.category}
                      </span>
                      <h3 className="font-heading font-bold text-xl uppercase tracking-wide">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      {event.spots}
                    </div>
                  </div>
                  
                  <Link href="/contact">
                    <Button className="w-full" data-testid={`button-register-${event.id}`}>
                      Register Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30" data-testid="section-past-events">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-wide mb-4">
              Past Events
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A glimpse of our memorable past events and achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-background p-6 rounded-lg shadow-md animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`card-past-event-${event.id}`}
              >
                <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  {event.date}
                </p>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {event.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button variant="outline" size="lg" data-testid="button-view-gallery">
                View Event Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
