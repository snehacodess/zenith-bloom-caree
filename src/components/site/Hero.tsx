import { ArrowRight, MessageCircle, Star, Sparkles, ShieldCheck } from "lucide-react";
import doctorHero from "@/assets/doctor-hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
      {/* gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 h-[420px] w-[420px] rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-secondary/30 blur-3xl animate-blob delay-300" />
        <div className="absolute top-1/2 left-1/3 h-[280px] w-[280px] rounded-full bg-accent/10 blur-3xl animate-blob delay-500" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-accent shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Premium Women's Healthcare in Gaur City
          </span>

          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-accent text-balance">
            Compassionate
            <span className="block italic gradient-text">Women's Care</span>
            for every stage of life.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-pretty">
            Pregnancy care, fertility treatments, gynecology and wellness — with
            personalized support from <span className="text-accent font-medium">Dr. Disha Ghoniya</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground px-7 py-3.5 font-medium shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919999999999"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium text-accent shadow-soft hover:shadow-lift transition-all"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              WhatsApp Consult
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[0,1,2,3].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-background gradient-soft" style={{
                  backgroundImage: `linear-gradient(${120+i*40}deg, oklch(0.85 0.1 ${10+i*40}), oklch(0.9 0.06 ${290-i*30}))`
                }} />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">Loved by 1,000+ women</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative animate-fade-up delay-200">
          <div className="absolute -inset-4 rounded-[2.5rem] gradient-primary opacity-30 blur-2xl" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-lift bg-card">
            <img
              src={doctorHero}
              alt="Dr. Disha Ghoniya, founder of Zenith Women's Clinic"
              width={1024}
              height={1280}
              className="w-full h-[520px] sm:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent" />
          </div>

          {/* Floating badges */}
          <div className="absolute -left-4 sm:-left-10 top-10 glass rounded-2xl p-4 shadow-soft animate-float w-48">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center h-10 w-10 rounded-xl gradient-primary">
                <ShieldCheck className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="font-serif text-lg text-accent">15+ Years</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 sm:-right-6 bottom-16 glass rounded-2xl p-4 shadow-soft animate-float delay-300 w-52">
            <p className="text-xs text-muted-foreground">Patient Satisfaction</p>
            <p className="font-serif text-2xl text-accent mt-0.5">98<span className="text-primary">%</span></p>
            <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-[98%] gradient-primary rounded-full" />
            </div>
          </div>

          <div className="absolute right-6 -top-2 glass rounded-full px-4 py-2 shadow-soft animate-float delay-500 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-accent">1,000+ Happy Patients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
