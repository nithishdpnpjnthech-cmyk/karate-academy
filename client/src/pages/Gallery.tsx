import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useLocation } from "wouter";

const filters = [
  { id: "all", label: "All" },
  { id: "karate", label: "Karate" },
  { id: "bharatanatyam", label: "Bharatanatyam" },
  { id: "yoga", label: "Yoga" },
  { id: "events", label: "Events" },
  { id: "achievements", label: "Achievements" },
];

const galleryItems = [
  { id: 1, category: "events", image: "/gallery/karate/WhatsApp Image 2025-11-22 at 11.47.40 (1).jpeg", title: "9th AGKF Sri Lanka Event" },
  { id: 2, category: "events", image: "/gallery/karate/WhatsApp Image 2025-11-22 at 11.47.40 (2).jpeg", title: "Sri Lanka Tournament Event" },
  { id: 3, category: "events", image: "/gallery/karate/WhatsApp Image 2025-11-22 at 11.47.40 (3).jpeg", title: "AGKF Event" },
  { id: 4, category: "events", image: "/gallery/karate/WhatsApp Image 2025-11-22 at 11.47.40 (4).jpeg", title: "International Event" },
  { id: 5, category: "events", image: "/gallery/karate/WhatsApp Image 2025-11-22 at 11.47.40.jpeg", title: "Sri Lanka Competition" },
  { id: 6, category: "achievements", image: "/gallery/karate/WhatsApp Image 2025-11-22 at 11.49.38.jpeg", title: "9th AGKF Achievement" },
  { id: 7, category: "achievements", image: "/gallery/karate/WhatsApp Image 2025-11-22 at 11.52.01 (5).jpeg", title: "Sri Lanka Victory" },
  { id: 8, category: "achievements", image: "/gallery/karate/WhatsApp Image 2025-11-22 at 11.52.01 (6).jpeg", title: "Championship Achievement" },
  { id: 9, category: "achievements", image: "/gallery/karate/WhatsApp Image 2025-11-22 at 11.52.01 (7).jpeg", title: "Tournament Success" },
  { id: 10, category: "achievements", image: "/gallery/karate/WhatsApp Image 2025-11-22 at 11.52.01 (8).jpeg", title: "AGKF Success" },
  { id: 41, category: "karate", image: "/gallery/karate/0J3A6916.JPG", title: "1st Bushi Budo Championship" },
  { id: 42, category: "karate", image: "/gallery/karate/0J3A7014.JPG", title: "Bushi Budo Tournament" },
  { id: 43, category: "karate", image: "/gallery/karate/0J3A7016.JPG", title: "Karate Competition" },
  { id: 45, category: "karate", image: "/gallery/karate/0J3A7096.JPG", title: "Tournament Action" },
  { id: 48, category: "events", image: "/gallery/karate/0J3A7378.JPG", title: "Championship Event" },
  { id: 49, category: "karate", image: "/gallery/karate/Copy of IMG_6195.JPG", title: "Bushi Budo Action" },
  { id: 50, category: "karate", image: "/gallery/karate/Copy of IMG_6196.JPG", title: "Karate Training" },
  { id: 51, category: "karate", image: "/gallery/karate/Copy of IMG_6201.JPG", title: "Tournament Skills" },
  { id: 52, category: "karate", image: "/gallery/karate/Copy of IMG_6202.JPG", title: "Martial Arts" },
  { id: 53, category: "karate", image: "/gallery/karate/Copy of IMG_6205.JPG", title: "Karate Excellence" },
  { id: 54, category: "karate", image: "/gallery/karate/IMG_6368.JPG", title: "Bushi Budo Training" },
  { id: 55, category: "karate", image: "/gallery/karate/IMG_6369.JPG", title: "Championship Form" },
  { id: 56, category: "karate", image: "/gallery/karate/IMG_6371.JPG", title: "Karate Technique" },
  { id: 57, category: "karate", image: "/gallery/karate/IMG_6374.JPG", title: "Tournament Action" },
  { id: 58, category: "karate", image: "/gallery/karate/IMG_6395.JPG", title: "Martial Arts Skills" },
  { id: 59, category: "karate", image: "/gallery/karate/IMG_6399.JPG", title: "Karate Competition" },
  { id: 60, category: "karate", image: "/gallery/karate/IMG_6400.JPG", title: "Bushi Budo Excellence" },
  { id: 61, category: "karate", image: "/gallery/events/Copy of _S3L0108.JPG", title: "Explode 2025 Karate" },
  { id: 62, category: "karate", image: "/gallery/events/Copy of _S3L0114.JPG", title: "Explode 2025 Training" },
  { id: 63, category: "karate", image: "/gallery/events/Copy of _S3L0123.JPG", title: "Explode 2025 Competition" },
  { id: 64, category: "karate", image: "/gallery/events/Copy of _S3L0130.JPG", title: "Explode 2025 Tournament" },
  { id: 65, category: "karate", image: "/gallery/events/Copy of _S3L0133.JPG", title: "Explode 2025 Action" },
  { id: 66, category: "karate", image: "/gallery/events/Copy of _S3L0136.JPG", title: "Explode 2025 Skills" },
  { id: 67, category: "karate", image: "/gallery/events/Copy of _S3L0146.JPG", title: "Explode 2025 Excellence" },
  { id: 68, category: "karate", image: "/gallery/events/Copy of _S3L0213.JPG", title: "Explode 2025 Championship" },
  { id: 71, category: "events", image: "/gallery/events/Copy of _S3L0505.JPG", title: "Explode 2025 Action Event" },
  { id: 74, category: "karate", image: "/gallery/events/_S3L0737.JPG", title: "Explode 2025 Tournament" },
  { id: 75, category: "karate", image: "/gallery/events/_S3L1515.JPG", title: "Explode 2025 Mastery" },
  { id: 76, category: "karate", image: "/gallery/events/_S3L1566.JPG", title: "Explode 2025 Performance" },
  { id: 77, category: "karate", image: "/gallery/events/_S3L1580.JPG", title: "Explode 2025 Victory" },

  { id: 69, category: "achievements", image: "/gallery/events/Copy of _S3L0348.JPG", title: "Explode 2025 Training Achievement" },
  { id: 72, category: "achievements", image: "/gallery/events/Copy of _S3L0548.JPG", title: "Explode 2025 Competition Success" },
  { id: 73, category: "achievements", image: "/gallery/events/Copy of _S3L0643.JPG", title: "Explode 2025 Excellence" },
  { id: 78, category: "events", image: "/gallery/events/_S3L1706.JPG", title: "Explode 2025 Focus Event" },
  { id: 79, category: "achievements", image: "/gallery/events/_S3L1708.JPG", title: "Explode 2025 Technique Mastery" },

  { id: 92, category: "karate", image: "/gallery/achievements/IMG_1662.JPG", title: "Kumite Training" },
  { id: 93, category: "karate", image: "/gallery/achievements/IMG_1704.JPG", title: "Seminar Training" },
  { id: 94, category: "karate", image: "/gallery/achievements/IMG_1710.JPG", title: "Kumite Practice" },
  { id: 95, category: "karate", image: "/gallery/achievements/IMG_1776.JPG", title: "Seminar Training" },
  { id: 96, category: "karate", image: "/gallery/achievements/IMG_1784.JPG", title: "Kumite Skills" },
  { id: 97, category: "karate", image: "/gallery/achievements/IMG_1788.JPG", title: "Training Session" },
  { id: 98, category: "karate", image: "/gallery/achievements/IMG_1819.JPG", title: "Seminar Practice" },
  { id: 101, category: "karate", image: "/gallery/karate/Copy of IMG_8199.JPG", title: "2nd National Coimbatore" },
  { id: 102, category: "karate", image: "/gallery/karate/Copy of IMG_8203.JPG", title: "Coimbatore Tournament" },
  { id: 103, category: "karate", image: "/gallery/karate/Copy of IMG_8234.JPG", title: "National Competition" },

  { id: 105, category: "karate", image: "/gallery/karate/Copy of IMG_8324.JPG", title: "2nd National Event" },
  { id: 106, category: "karate", image: "/gallery/karate/Copy of IMG_8331.JPG", title: "Tournament Action" },
  { id: 107, category: "karate", image: "/gallery/karate/Copy of IMG_8361.JPG", title: "Coimbatore Training" },
  { id: 108, category: "karate", image: "/gallery/karate/Copy of IMG_8362.JPG", title: "National Skills" },
  { id: 37, category: "achievements", image: "/gallery/achievements/0J3A8135.JPG", title: "National Tournament" },
  { id: 39, category: "achievements", image: "/gallery/achievements/0J3A8138.JPG", title: "Championship Success" },
  { id: 40, category: "achievements", image: "/gallery/achievements/0J3A8142.JPG", title: "National Achievement" },
  { id: 35, category: "events", image: "/gallery/achievements/0J3A8128.JPG", title: "1st National Mumbai Event" },

  // 2nd KGKF Event Images
  { id: 109, category: "events", image: "/gallery/events/Copy of DSC00584.JPG", title: "2nd KGKF Championship" },
  { id: 110, category: "events", image: "/gallery/events/Copy of DSC00595.JPG", title: "2nd KGKF Competition" },
  { id: 111, category: "events", image: "/gallery/events/Copy of DSC00600.JPG", title: "2nd KGKF Tournament" },
  { id: 112, category: "events", image: "/gallery/events/Copy of DSC00604.JPG", title: "2nd KGKF Action" },
  { id: 113, category: "events", image: "/gallery/events/Copy of DSC00613.JPG", title: "2nd KGKF Skills" },
  { id: 114, category: "events", image: "/gallery/events/Copy of DSC01016.JPG", title: "2nd KGKF Excellence" },
  { id: 115, category: "events", image: "/gallery/events/Copy of DSC01152.JPG", title: "2nd KGKF Performance" },
  { id: 116, category: "events", image: "/gallery/events/Copy of DSC01155.JPG", title: "2nd KGKF Victory" },
  { id: 117, category: "events", image: "/gallery/events/Copy of DSC01200.JPG", title: "2nd KGKF Training" },
  { id: 118, category: "events", image: "/gallery/events/Copy of DSC01266.JPG", title: "2nd KGKF Mastery" },
  { id: 119, category: "events", image: "/gallery/events/Copy of DSC01280.JPG", title: "2nd KGKF Focus" },
  { id: 120, category: "events", image: "/gallery/events/Copy of DSC01566.JPG", title: "2nd KGKF Technique" },
  { id: 121, category: "events", image: "/gallery/events/Copy of DSC01633.JPG", title: "2nd KGKF Spirit" },
  { id: 122, category: "events", image: "/gallery/events/Copy of DSC02005.JPG", title: "2nd KGKF Discipline" },
  { id: 123, category: "events", image: "/gallery/events/Copy of DSC02009.JPG", title: "2nd KGKF Power" },
  { id: 124, category: "events", image: "/gallery/events/Copy of DSC02010.JPG", title: "2nd KGKF Strength" },
  { id: 125, category: "events", image: "/gallery/events/Copy of DSC02014.JPG", title: "2nd KGKF Dedication" },
  { id: 126, category: "events", image: "/gallery/events/Copy of DSC02015.JPG", title: "2nd KGKF Honor" },
  { id: 127, category: "events", image: "/gallery/events/Copy of DSC02018.JPG", title: "2nd KGKF Respect" },
  { id: 128, category: "events", image: "/gallery/events/Copy of DSC02021.JPG", title: "2nd KGKF Courage" },
  { id: 129, category: "events", image: "/gallery/events/Copy of DSC02022.JPG", title: "2nd KGKF Unity" },
  { id: 130, category: "events", image: "/gallery/events/Copy of DSC02026.JPG", title: "2nd KGKF Teamwork" },
  { id: 131, category: "events", image: "/gallery/events/Copy of DSC02090.JPG", title: "2nd KGKF Achievement" },
  { id: 132, category: "events", image: "/gallery/events/Copy of DSC02101.JPG", title: "2nd KGKF Success" },
  { id: 133, category: "events", image: "/gallery/events/Copy of DSC02171.JPG", title: "2nd KGKF Glory" },
  { id: 134, category: "events", image: "/gallery/events/Copy of DSC02174.JPG", title: "2nd KGKF Pride" },
  { id: 135, category: "events", image: "/gallery/events/DSC01647.JPG", title: "2nd KGKF Moment" },
  { id: 136, category: "events", image: "/gallery/events/DSC01649.JPG", title: "2nd KGKF Experience" },
  { id: 137, category: "events", image: "/gallery/events/DSC01660.JPG", title: "2nd KGKF Journey" },
  { id: 138, category: "events", image: "/gallery/events/DSC01681.JPG", title: "2nd KGKF Legacy" },
  { id: 139, category: "events", image: "/gallery/events/DSC01699.JPG", title: "2nd KGKF Tradition" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleUrlChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const filter = urlParams.get('filter');
      if (filter && filters.some(f => f.id === filter)) {
        setActiveFilter(filter);
      } else {
        setActiveFilter('all');
      }
    };
    
    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, [location]);

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

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
            Gallery
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Moments of excellence, discipline, and achievement
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => {
                  const newUrl = filter.id === 'all' ? '/gallery' : `/gallery?filter=${filter.id}`;
                  window.history.pushState({}, '', newUrl);
                  setActiveFilter(filter.id);
                }}
                className="transition-all"
                data-testid={`button-filter-${filter.id}`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(item)}
                data-testid={`gallery-item-${item.id}`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-white/70 text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
          data-testid="lightbox"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
            data-testid="button-close-lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image.replace("w=600", "w=1200").replace("w=400", "w=1200").replace("w=800", "w=1200")}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white font-heading text-xl">{selectedImage.title}</p>
              <p className="text-white/60 capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
