import { Award, GraduationCap, MapPin, Quote } from "lucide-react";
import doctorAbout from "@/assets/doctor-about.jpg";

const stats = [
  { num: "5,000+", label: "Successful Deliveries" },
  { num: "2,500+", label: "Surgeries Performed" },
  { num: "98%", label: "Patient Satisfaction" },
  { num: "15+", label: "Years Experience" },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 -z-10 gradient-soft opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] gradient-primary opacity-20 blur-2xl" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-lift">
            <img
              src={doctorAbout}
              alt="Dr. Disha Ghoniya, gynecologist at Zenith Women's Clinic"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-[560px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:right-6 glass rounded-2xl p-5 shadow-soft max-w-[260px]">
            <Quote className="h-5 w-5 text-primary" />
            <p className="mt-2 text-sm text-accent italic font-serif text-lg leading-snug">
              "Every woman deserves to feel heard, safe and cared for."
            </p>
            <p className="mt-2 text-xs text-muted-foreground">— Dr. Disha Ghoniya</p>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">About the Doctor</span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-accent text-balance">
            Meet <span className="italic gradient-text">Dr. Disha Ghoniya</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            With over 15 years of dedicated practice, Dr. Disha blends modern medicine with
            warm, personalized care. Trusted by women across Gaur City, Noida and Ghaziabad
            for her empathetic approach and expertise in high-risk pregnancies.
          </p>

          <div className="mt-7 space-y-3">
            <Detail icon={GraduationCap} text="MBBS, MS (Obstetrics & Gynaecology)" />
            <Detail icon={Award} text="Fellowship in High-Risk Pregnancy & Laparoscopy" />
            <Detail icon={MapPin} text="Trusted across Gaur City, Noida & Ghaziabad" />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-card p-5 shadow-soft hover:shadow-lift transition-shadow">
                <p className="font-serif text-3xl gradient-text">{s.num}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid place-items-center h-9 w-9 rounded-xl gradient-soft">
        <Icon className="h-4 w-4 text-primary" />
      </span>
      <span className="text-sm text-accent">{text}</span>
    </div>
  );
}
