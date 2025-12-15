import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const programsDropdown = [
  {
    title: "Karate",
    href: "/programs/karate",
    items: [
      { title: "Beginner Level", href: "/programs/karate/beginner" },
      { title: "Intermediate Level", href: "/programs/karate/intermediate" },
      { title: "Advanced Black Belt", href: "/programs/karate/advanced" },
      { title: "Kids Karate", href: "/programs/karate/kids" },
      { title: "Self-Defense Workshops", href: "/programs/karate/self-defense" },
    ],
  },
  {
    title: "Bharatanatyam",
    href: "/programs/bharatanatyam",
    items: [
      { title: "Basics & Adavus", href: "/programs/bharatanatyam/basics" },
      { title: "Intermediate Nritta", href: "/programs/bharatanatyam/intermediate" },
      { title: "Level-Up Classes", href: "/programs/bharatanatyam/levelup" },
      { title: "Performance Training", href: "/programs/bharatanatyam/performance" },
      { title: "Theory & Mudras", href: "/programs/bharatanatyam/theory" },
    ],
  },
  {
    title: "Yoga",
    href: "/programs/yoga",
    items: [
      { title: "Hatha Yoga", href: "/programs/yoga/hatha" },
      { title: "Vinyasa Flow", href: "/programs/yoga/vinyasa" },
      { title: "Power Yoga", href: "/programs/yoga/power" },
      { title: "Flexibility & Mobility", href: "/programs/yoga/flexibility" },
      { title: "Meditation & Breathwork", href: "/programs/yoga/meditation" },
    ],
  },
];

const galleryDropdown = [
  { title: "All", href: "/gallery" },
  { title: "Karate", href: "/gallery?filter=karate" },
  { title: "Bharatanatyam", href: "/gallery?filter=bharatanatyam" },
  { title: "Yoga", href: "/gallery?filter=yoga" },
  { title: "Events", href: "/gallery?filter=events" },
  { title: "Achievements", href: "/gallery?filter=achievements" },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Programs & Classes", href: "/programs", hasDropdown: true, dropdown: programsDropdown },
  { title: "Pricing", href: "/pricing" },
  { title: "Gallery", href: "/gallery", hasDropdown: true, dropdown: galleryDropdown },
  { title: "Events", href: "/events" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
            <img src="/logo.png" alt="Huura Academy" className="w-16 h-16 lg:w-20 lg:h-20 object-contain" />
            <div className="hidden sm:block">
              <div>
                <span className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-wide block">
                  HUURA ACADEMY
                </span>
                <span className="text-xs lg:text-sm text-primary font-semibold uppercase tracking-wider">
                  HUURA THE UNSTOPPABLE
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  data-testid={`link-nav-${link.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.title}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {link.hasDropdown && activeDropdown === link.title && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-white rounded-md shadow-xl border border-border min-w-[220px] py-2">
                      {link.dropdown?.map((item: any) => (
                        <div key={item.href}>
                          {item.items ? (
                            <div className="group">
                              <Link
                                href={item.href}
                                className="flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                                data-testid={`link-dropdown-${item.title.toLowerCase()}`}
                              >
                                {item.title}
                                <ChevronDown className="w-4 h-4 -rotate-90" />
                              </Link>
                              <div className="hidden group-hover:block absolute left-full top-0 ml-0 pt-0">
                                <div className="bg-white rounded-md shadow-xl border border-border min-w-[200px] py-2">
                                  {item.items.map((subItem: any) => (
                                    <Link
                                      key={subItem.href}
                                      href={subItem.href}
                                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                                      data-testid={`link-sub-${subItem.title.toLowerCase().replace(/\s+/g, "-")}`}
                                    >
                                      {subItem.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                              data-testid={`link-dropdown-${item.title.toLowerCase()}`}
                            >
                              {item.title}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden lg:block">
              <Button data-testid="button-contact-cta">
                Contact Us
              </Button>
            </Link>

            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-in" data-testid="nav-mobile">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:bg-muted"
                  }`}
                  data-testid={`link-mobile-${link.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.title}
                </Link>
              </div>
            ))}
            <Link href="/contact" className="block pt-2">
              <Button className="w-full" data-testid="button-mobile-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
