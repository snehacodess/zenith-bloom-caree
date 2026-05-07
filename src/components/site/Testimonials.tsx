import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", role: "New Mom, Gaur City", rating: 5, text: "Dr. Disha made my pregnancy journey so calm and reassuring. Every visit felt personal, never rushed. Forever grateful for her care during my delivery." },
  { name: "Anjali Verma", role: "Patient, Noida West", rating: 5, text: "After years of trying, we finally have our little one — thanks to the empathetic fertility care here. The clinic feels more like a sanctuary than a hospital." },
  { name: "Megha Singh", role: "PCOS recovery", rating: 5, text: "The PCOS treatment plan was holistic and actually worked. I felt heard for the first time. Highly recommend to every woman in Greater Noida." },
  { name: "Riya Kapoor", role: "Routine care", rating: 5, text: "Spotless clinic, gentle staff and a doctor who explains everything. Zenith has set a new standard for women's healthcare in our area." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);
  const r = reviews[i];

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Patient Stories</span>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-accent text-balance">
          Words from women we've <span className="italic gradient-text">cared for</span>.
        </h2>

        <div className="mt-14 relative">
          <div className="relative rounded-[2.5rem] glass shadow-lift p-8 sm:p-14">
            <Quote className="h-10 w-10 text-primary mx-auto" />
            <p className="mt-6 font-serif text-2xl sm:text-3xl text-accent leading-snug text-balance">
              "{r.text}"
            </p>
            <div className="mt-8 flex items-center justify-center gap-1 text-primary">
              {[...Array(r.rating)].map((_,k) => <Star key={k} className="h-4 w-4 fill-current" />)}
            </div>
            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="h-12 w-12 rounded-full gradient-primary grid place-items-center text-primary-foreground font-medium">
                {r.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-medium text-accent">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={prev} className="h-11 w-11 rounded-full glass shadow-soft hover:shadow-glow grid place-items-center text-accent transition-all">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 gradient-primary" : "w-2 bg-muted"}`}
                  aria-label={`Review ${k+1}`}
                />
              ))}
            </div>
            <button onClick={next} className="h-11 w-11 rounded-full glass shadow-soft hover:shadow-glow grid place-items-center text-accent transition-all">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
