import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Pricing", href: "/pricing" },
  { title: "Gallery", href: "/gallery" },
  { title: "Events", href: "/events" },
];

const programLinks = [
  { title: "Karate", href: "/programs/karate" },
  { title: "Bharatanatyam", href: "/programs/bharatanatyam" },
  { title: "Yoga", href: "/programs/yoga" },
];

const socialLinks = [
  { icon: SiFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: SiInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: SiYoutube, href: "https://youtube.com", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Huura Academy" className="w-16 h-16 object-contain" />
              <span className="font-heading font-bold text-lg tracking-wide">
                HUURA ACADEMY
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Building Warriors of Character
            </p>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">
              HUURA THE UNSTOPPABLE
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              More than a gym. We are a sanctuary for physical and mental growth through martial arts, classical dance, and yoga.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${link.title.toLowerCase()}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 uppercase tracking-wide">
              Programs
            </h3>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${link.title.toLowerCase()}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 uppercase tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  2nd floor, 2M-445, 2nd Main Rd,<br />
                  Lal Bahadur Nagar, East of NGEF Layout,<br />
                  Kasturi Nagar, Bengaluru, Karnataka 560043
                </span>
              </li>
              <li>
                <a
                  href="tel:+918147733445"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm"
                  data-testid="link-phone"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  081477 33445
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@huuraacademy.com"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm"
                  data-testid="link-email"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  info@huuraacademy.com
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              &copy; 2025 Huura Academy. All Rights Reserved.
            </p>
            <p className="text-white/40 text-xs">
              Developed by PJN Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
