import { Baby, Flower2, HeartPulse, Stethoscope, Sun, Users, ShieldCheck } from "lucide-react";

const services = [
  { icon: Baby, title: "Pregnancy Care", desc: "Gentle, expert antenatal care from first trimester to delivery." },
  { icon: Flower2, title: "Fertility Treatment", desc: "Personalized fertility plans with empathy and modern science." },
  { icon: HeartPulse, title: "Delivery Support", desc: "Safe normal & C-section deliveries in a calming environment." },
  { icon: Stethoscope, title: "PCOS & Hormonal Care", desc: "Holistic treatment for PCOS, thyroid and hormonal balance." },
  { icon: Sun, title: "Menopause Care", desc: "Compassionate guidance through peri and post-menopause." },
  { icon: Users, title: "Family Planning", desc: "Confidential counselling and contraception that fits you." },
  { icon: ShieldCheck, title: "Cancer Screening", desc: "Pap smears, breast & cervical screenings — preventive care." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Our Services</span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-accent text-balance">
            Care designed around <span className="italic gradient-text">you</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Comprehensive women's health services delivered with warmth, precision and zero judgement.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-3xl bg-card p-7 shadow-soft hover:shadow-lift transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700" />
              <div className="relative">
                <div className="grid place-items-center h-14 w-14 rounded-2xl gradient-soft text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-all duration-500">
                  <s.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-accent">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
