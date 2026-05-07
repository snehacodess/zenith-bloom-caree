import { HandHeart, Activity, Cpu, Sofa, Navigation, Siren } from "lucide-react";

export function WhyUs() {
  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Why Choose Us</span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-accent text-balance">
            A care experience <span className="italic gradient-text">unlike any other</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 auto-rows-[220px]">
          {/* Bento */}
          <div className="lg:col-span-2 lg:row-span-2 group relative rounded-3xl gradient-primary p-8 text-primary-foreground shadow-lift overflow-hidden">
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute top-6 right-6 h-32 w-32 rounded-full bg-white/10 blur-2xl animate-blob" />
            <HandHeart className="h-10 w-10" strokeWidth={1.5} />
            <h3 className="mt-auto font-serif text-3xl sm:text-4xl mt-32 text-balance">
              Personalized care, <em className="not-italic font-light">tailored to you</em>.
            </h3>
            <p className="mt-3 text-primary-foreground/85 max-w-md">
              Every consultation begins with listening. We design care plans that fit your
              body, your story, and your goals.
            </p>
          </div>

          <BentoCard icon={Activity} title="High-Risk Pregnancy Expertise" />
          <BentoCard icon={Cpu} title="Modern Technology" />
          <BentoCard icon={Sofa} title="Comfortable Environment" />
          <BentoCard icon={Navigation} title="Easy Accessibility" />

          <div className="sm:col-span-2 lg:col-span-2 group rounded-3xl glass p-7 shadow-soft hover:shadow-lift transition-all relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-secondary/40 blur-2xl" />
            <div className="flex items-start gap-5">
              <span className="grid place-items-center h-14 w-14 rounded-2xl gradient-cta text-accent-foreground shrink-0">
                <Siren className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-serif text-2xl text-accent">24/7 Emergency Support</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We're here when you need us most. Round-the-clock availability for urgent care
                  and reassurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div className="group rounded-3xl bg-card p-6 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all flex flex-col">
      <span className="grid place-items-center h-12 w-12 rounded-2xl gradient-soft text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-all">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <h3 className="mt-auto font-serif text-xl text-accent">{title}</h3>
    </div>
  );
}
