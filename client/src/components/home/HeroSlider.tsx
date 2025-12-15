import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Master the Art of Self-Defense",
    subtitle: "Power, discipline & focus through expert-led Karate training.",
    buttonText: "Join Now",
    buttonHref: "/programs/karate",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1920&h=1080&fit=crop",
  },
  {
    id: 2,
    title: "Grace Through Classical Dance",
    subtitle: "Learn traditional Bharatanatyam with certified instructors.",
    buttonText: "Enroll Today",
    buttonHref: "/programs/bharatanatyam",
    image: "/bharatanatyam.jpg",
  },
  {
    id: 3,
    title: "Balance Body & Mind",
    subtitle: "Holistic yoga sessions to improve flexibility & mindfulness.",
    buttonText: "Start Your Journey",
    buttonHref: "/programs/yoga",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden" data-testid="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 hero-gradient" />
          
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div
                className={`${
                  index === currentSlide ? "animate-fade-in-up" : ""
                }`}
              >
                <h1
                  className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl text-white uppercase tracking-wider mb-4 md:mb-6 text-shadow"
                  data-testid={`text-hero-title-${index}`}
                >
                  {slide.title}
                </h1>
                <p
                  className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto animation-delay-200"
                  style={{ animationDelay: "0.2s" }}
                  data-testid={`text-hero-subtitle-${index}`}
                >
                  {slide.subtitle}
                </p>
                <Link href={slide.buttonHref}>
                  <Button
                    size="lg"
                    className="text-base md:text-lg px-8 md:px-10 py-6 animation-delay-400"
                    style={{ animationDelay: "0.4s" }}
                    data-testid={`button-hero-cta-${index}`}
                  >
                    {slide.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-colors"
        aria-label="Previous slide"
        data-testid="button-hero-prev"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-colors"
        aria-label="Next slide"
        data-testid="button-hero-next"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`button-hero-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
