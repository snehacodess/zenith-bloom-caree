import { Heart, Instagram, Facebook, Youtube, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-accent text-accent-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-10 w-10 rounded-full gradient-primary">
                <Heart className="h-4 w-4 text-primary-foreground" fill="currentColor" />
              </span>
              <span className="font-serif text-2xl">Zenith <span className="italic text-primary">Women's</span></span>
            </div>
            <p className="mt-5 text-white/70 max-w-md leading-relaxed">
              Premium women's healthcare in Gaur City — pregnancy, fertility, gynecology
              and wellness, delivered with warmth.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((I, i) => (
                <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full glass-dark hover:gradient-primary transition-all">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-primary">Explore</p>
            <ul className="mt-4 space-y-2.5 text-white/80 text-sm">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#about" className="hover:text-white">About Doctor</a></li>
              <li><a href="#why" className="hover:text-white">Why Us</a></li>
              <li><a href="#testimonials" className="hover:text-white">Stories</a></li>
              <li><a href="#location" className="hover:text-white">Location</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-primary">Emergency</p>
            <a href="tel:+919999999999" className="mt-4 inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-medium">
              <Phone className="h-4 w-4" /> +91 99999 99999
            </a>
            <p className="mt-5 text-white/70 text-sm leading-relaxed">
              Gaur City 2,<br /> Greater Noida West, UP 201318
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Zenith Women's Clinic. All rights reserved.</p>
          <p>Crafted with <Heart className="inline h-3 w-3 text-primary fill-current" /> for the women of Greater Noida.</p>
        </div>
      </div>
    </footer>
  );
}
