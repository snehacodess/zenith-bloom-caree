import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Visit Us</span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-accent text-balance">
            Located in the heart of <span className="italic gradient-text">Gaur City</span>.
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-soft min-h-[420px] bg-card">
            <iframe
              title="Zenith Women's Clinic location"
              src="https://www.google.com/maps?q=Gaur+City+Greater+Noida+West&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-2 space-y-4">
            <Card icon={MapPin} title="Address">
              Zenith Women's Clinic, Gaur City 2,<br /> Greater Noida West, UP 201318
            </Card>
            <Card icon={Clock} title="Timings">
              Mon–Sat: 10:00 AM – 8:00 PM<br /> Sunday: By appointment
            </Card>
            <Card icon={Phone} title="Call Us">
              +91 99999 99999
            </Card>
            <Card icon={Mail} title="Email">
              hello@zenithwomensclinic.in
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="group rounded-2xl bg-card p-5 shadow-soft hover:shadow-lift transition-all flex gap-4 items-start">
      <span className="grid place-items-center h-11 w-11 rounded-xl gradient-soft text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-all shrink-0">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="mt-1 text-sm text-accent leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
