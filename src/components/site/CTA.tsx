import { Phone, MessageCircle, Siren, Calendar, User, Mail } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative rounded-[2.5rem] gradient-cta overflow-hidden shadow-lift p-8 sm:p-14 lg:p-20 text-accent-foreground">
          <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/40 blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-secondary/30 blur-3xl animate-blob delay-300" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium">
                <Siren className="h-3.5 w-3.5" /> 24/7 Emergency Support
              </span>
              <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05]">
                Your health journey
                <span className="block italic text-primary-foreground/95">starts here.</span>
              </h2>
              <p className="mt-5 text-white/80 max-w-md text-lg">
                Book an appointment, ask a question, or call us — we'll respond with care.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-full bg-white text-accent px-6 py-3 font-medium shadow-soft hover:-translate-y-0.5 transition-all">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-6 py-3 font-medium hover:bg-white/20 transition-all">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="rounded-3xl bg-white/95 backdrop-blur p-7 sm:p-8 shadow-lift text-accent"
            >
              <h3 className="font-serif text-2xl">Book an appointment</h3>
              <p className="text-sm text-muted-foreground mt-1">We'll confirm within 1 hour.</p>

              {submitted ? (
                <div className="mt-8 rounded-2xl gradient-soft p-6 text-center">
                  <p className="font-serif text-xl">Thank you! 💗</p>
                  <p className="text-sm text-muted-foreground mt-1">We'll reach out shortly.</p>
                </div>
              ) : (
                <div className="mt-6 space-y-3">
                  <Field icon={User} placeholder="Your name" />
                  <Field icon={Phone} placeholder="Phone number" type="tel" />
                  <Field icon={Mail} placeholder="Email (optional)" type="email" />
                  <Field icon={Calendar} placeholder="Preferred date" type="date" />
                  <button className="w-full mt-2 rounded-full gradient-primary text-primary-foreground py-3.5 font-medium shadow-glow hover:-translate-y-0.5 transition-all">
                    Confirm Appointment
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ icon: Icon, ...rest }: any) {
  return (
    <label className="flex items-center gap-3 rounded-2xl border border-border bg-background/50 px-4 py-3 focus-within:ring-2 focus-within:ring-primary/40 transition-all">
      <Icon className="h-4 w-4 text-primary shrink-0" />
      <input
        {...rest}
        required
        className="bg-transparent w-full outline-none text-sm placeholder:text-muted-foreground text-accent"
      />
    </label>
  );
}
