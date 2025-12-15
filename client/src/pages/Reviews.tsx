import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    program: "Bharatanatyam",
    rating: 5,
    review: "The classical dance training here is exceptional. Guru Lakshmi's teaching style is both traditional and inspiring. I've grown so much as a dancer.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Arjun Patel",
    program: "Karate",
    rating: 5,
    review: "Sensei Rajesh is an amazing instructor. The discipline and techniques I've learned have transformed not just my physical strength but my mental focus too.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Meera Reddy",
    program: "Yoga",
    rating: 5,
    review: "The yoga classes are perfect for stress relief. Teacher Priya creates such a peaceful environment. I feel more balanced and centered.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Rohit Kumar",
    program: "Kids Karate",
    rating: 5,
    review: "My 8-year-old son loves coming here. The instructors are patient and the kids program is well-structured. Great for building confidence.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Anjali Singh",
    program: "Power Yoga",
    rating: 5,
    review: "Intense workouts that really challenge you. The instructors push you to your limits while ensuring proper form. Highly recommend!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Vikram Joshi",
    program: "Advanced Karate",
    rating: 5,
    review: "Training for my black belt here has been incredible. The advanced techniques and sparring sessions are top-notch. Excellent academy!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  }
];

export default function Reviews() {
  return (
    <Layout>
      <section className="relative py-20 md:py-32 bg-foreground">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-4">
            Student Reviews
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            What our students say about their journey with us
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={review.name} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.program}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}