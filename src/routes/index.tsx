import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  PlayCircle,
  Mic,
  Mail,
  MapPin,
  User,
  ArrowRight,
  Check,
  Sparkles,
  TrendingUp,
  Users,
  Eye,
  MousePointerClick,
  Clock,
  Award,
  Image as ImageIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MIH - Mon Incroyable Histoire | Kit Média & Sponsoring" },
      {
        name: "description",
        content:
          "MIH - Mon Incroyable Histoire : le format premium de témoignages. Découvrez nos offres de sponsoring et notre audience engagée.",
      },
    ],
  }),
});

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 ring-1 ring-slate-200/60 flex items-center justify-center text-slate-400 ${className}`}
    >
      <div className="flex flex-col items-center gap-2">
        <ImageIcon className="h-8 w-8 opacity-60" />
        <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
}

function Header() {
  const links = [
    { label: "Concept", href: "#concept" },
    { label: "Chiffres", href: "#chiffres" },
    { label: "Audience", href: "#audience" },
    { label: "Offres", href: "#offres" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-extrabold text-sm tracking-tight">
            MIH
          </div>
          <span className="hidden text-xs font-medium uppercase tracking-widest text-slate-500 sm:block">
            Kit Média
          </span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#offres"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
        >
          Sponsoriser MIH
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.95_0.04_260)_0%,transparent_70%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Le format premium de témoignages
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] text-slate-900 sm:text-6xl lg:text-7xl">
            MIH
            <span className="block text-slate-400 text-3xl sm:text-4xl font-bold mt-2">
              Mon Incroyable Histoire
            </span>
          </h1>
          <p className="mt-6 border-l-4 border-gold pl-4 text-lg italic text-slate-700">
            "Des épreuves. Du courage. De la résilience."
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
            Chaque semaine, une vie bascule. Un survivant. Un ancien voyou. Une victime. Ils
            racontent le moment qui a bouleversé leur existence, mais surtout comment ils s'en
            sont relevés. Un format d'interviews intimistes centré sur des valeurs profondément
            positives.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#offres"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Découvrir nos offres
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#concept"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:border-slate-400"
            >
              Notre concept
            </a>
          </div>
        </div>
        <div className="relative">
          <Placeholder
            label="Cover MIH 16:9"
            className="aspect-[16/11] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-lg sm:block">
            <div className="text-2xl font-extrabold text-slate-900">100K+</div>
            <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Abonnés YouTube
            </div>
          </div>
          <div className="absolute -top-6 -right-6 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-lg sm:block">
            <div className="text-2xl font-extrabold text-primary">8M</div>
            <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Vues record
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Concept() {
  const items = [
    {
      icon: Calendar,
      title: "Diffusion Hebdomadaire",
      text: "Un rendez-vous très attendu par une communauté fidèle.",
    },
    {
      icon: PlayCircle,
      title: "Formats Longs Premium",
      text: "Des épisodes de 40 à 60 minutes pour prendre le temps de l'écoute.",
    },
    {
      icon: Mic,
      title: "L'Expertise",
      text: "Des interviews menées par Jean-Charles Doria, réalisateur de documentaires de société.",
    },
  ];
  return (
    <section id="concept" className="border-t border-slate-200/60 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="relative inline-block">
              <Placeholder label="Photo présentateur" className="h-44 w-44 rounded-full" />
              <div className="absolute -bottom-2 -right-2 rounded-full bg-gold p-2 shadow-md">
                <Mic className="h-5 w-5 text-gold-foreground" />
              </div>
            </div>
            <h2 className="mt-8 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Le concept &<br />l'expertise.
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Une équipe éditoriale rigoureuse au service d'histoires extraordinaires.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {items.map((it) => (
              <div
                key={it.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Performances() {
  return (
    <section id="chiffres" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Nos performances
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Des chiffres qui parlent d'eux-mêmes.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Big card */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl lg:col-span-2 lg:row-span-2">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/30 blur-3xl" />
            <Eye className="h-8 w-8 text-gold" />
            <div className="mt-8 text-6xl font-extrabold lg:text-7xl">105 000</div>
            <div className="mt-2 text-lg font-semibold">vues</div>
            <p className="mt-4 max-w-sm text-sm text-slate-300 leading-relaxed">
              En moyenne par épisode. Une régularité rare sur le marché du long-format français.
            </p>
          </div>

          <StatCard icon={Users} value="100 000" label="Abonnés" sub="Une communauté YouTube engagée." />
          <StatCard icon={MousePointerClick} value="5,5 %" label="CTR" sub="Taux de clic moyen. Une audience qui agit." />
          <StatCard icon={Clock} value="35 %" label="Rétention" sub="Une audience qui écoute et ne scrolle pas." accent />
          <StatCard icon={TrendingUp} value="8 M" label="Vues record" sub="Sur notre vidéo record absolu." />
        </div>

        {/* Episodes */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900">Nos derniers épisodes</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <Placeholder
                  label={`Miniature ${i}`}
                  className="aspect-video transition-all group-hover:shadow-lg"
                />
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-primary">
                  <PlayCircle className="h-4 w-4" />
                  Voir l'épisode
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  sub,
  accent = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${
        accent ? "border-gold/40 bg-gradient-to-br from-white to-amber-50" : "border-slate-200 bg-white"
      }`}
    >
      <Icon className={`h-6 w-6 ${accent ? "text-gold" : "text-primary"}`} />
      <div className="mt-4 text-3xl font-extrabold text-slate-900">{value}</div>
      <div className="mt-1 text-sm font-semibold text-slate-700">{label}</div>
      <p className="mt-2 text-xs leading-relaxed text-slate-500">{sub}</p>
    </div>
  );
}

function Audience() {
  return (
    <section id="audience" className="border-t border-slate-200/60 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Notre audience
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Une communauté attentive au fort pouvoir d'achat.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Démographie
            </h3>
            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">Cœur de cible</div>
                  <p className="text-slate-600">Adultes actifs de 35 à 45 ans.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">Répartition</div>
                  <div className="mt-3 flex h-3 overflow-hidden rounded-full bg-slate-200">
                    <div className="bg-primary" style={{ width: "55%" }} />
                    <div className="bg-gold" style={{ width: "45%" }} />
                  </div>
                  <div className="mt-2 flex justify-between text-sm font-medium text-slate-600">
                    <span>55 % Hommes</span>
                    <span>45 % Femmes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Écosystème viral
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm">
                <div>
                  <div className="text-lg font-bold text-slate-900">TikTok</div>
                  <p className="text-sm text-slate-600">Jusqu'à 2M de vues par extrait.</p>
                </div>
                <div className="text-2xl font-extrabold text-primary">210K</div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm">
                <div>
                  <div className="text-lg font-bold text-slate-900">Spotify</div>
                  <p className="text-sm text-slate-600">Classement national.</p>
                </div>
                <div className="rounded-full bg-gold/20 px-3 py-1.5 text-sm font-bold text-gold-foreground">
                  TOP 30 Podcasts France
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Offers() {
  const offers = [
    {
      title: "L'Intégration Premium",
      sub: "Mid-roll",
      price: "6 000 €",
      desc: "Le sponsor s'intègre naturellement au milieu de la vidéo, après une rupture éditoriale fluide.",
      meta: "Durée : 60-90 sec",
    },
    {
      title: "Le Pré-Roll",
      sub: "Ouverture",
      price: "4 000 €",
      desc: "Annonce percutante et rapide pour capter l'attention dès les premières secondes.",
      meta: "Durée : 30-60 sec",
    },
    {
      title: "Bundle 360°",
      sub: "YouTube + TikTok",
      price: "8 500 €",
      desc: "Notre offre la plus performante. 1 intégration long-format YouTube + 3 à 4 Shorts TikTok dédiés pour allier rétention et viralité.",
      meta: "Recommandé",
      featured: true,
    },
    {
      title: "Partenariat de Saison",
      sub: "Long terme",
      price: "Sur devis",
      desc: "Accompagnez plusieurs épisodes de MIH dans la durée. La répétition crée une confiance accrue.",
      meta: "Plusieurs épisodes",
    },
  ];
  return (
    <section id="offres" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Sponsoring
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Nos dispositifs publicitaires
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Conçus pour respecter l'audience et maximiser votre ROI. Devenez le partenaire
            exclusif d'une émission à fort impact.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((o) => (
            <div
              key={o.title}
              className={`relative flex flex-col rounded-2xl p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
                o.featured
                  ? "border-2 border-gold bg-white ring-4 ring-gold/10"
                  : "border border-slate-200 bg-white"
              }`}
            >
              {o.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground shadow-md">
                  Recommandé
                </span>
              )}
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {o.sub}
              </div>
              <h3 className="mt-2 text-xl font-extrabold text-slate-900">{o.title}</h3>
              <div className="mt-5 text-4xl font-extrabold text-slate-900">{o.price}</div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 flex-1">{o.desc}</p>
              {!o.featured && (
                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <Check className="h-4 w-4 text-primary" />
                  {o.meta}
                </div>
              )}
              <a
                href="#contact"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                  o.featured
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "border border-slate-300 text-slate-900 hover:border-slate-900"
                }`}
              >
                Choisir cette offre
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-slate-200/60 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-foreground">
              <Award className="h-3.5 w-3.5" />
              Réassurance
            </div>
            <h2 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
              La garantie Tony Comiti Média.
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              MIH est produit par une équipe dédiée au sein de la prestigieuse agence Tony Comiti.
              3500 films produits depuis des années pour les plus grandes chaînes TV en France
              (TF1, France TV, Canal+, Arte, M6) et à l'international. Un gage de sérieux et de
              crédibilité pour votre marque.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["TF1", "France TV", "Canal+", "Arte", "M6"].map((c) => (
                <span
                  key={c}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-md sm:p-10">
            <h3 className="text-2xl font-bold text-slate-900">Discutons de votre campagne.</h3>
            <p className="mt-2 text-slate-600">
              Notre équipe commerciale répond sous 24h ouvrées.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Contact
                  </div>
                  <div className="text-base font-bold text-slate-900">M. Anis Benkherouf</div>
                </div>
              </div>
              <a
                href="mailto:commercial@tonycomiti.com"
                className="flex items-start gap-4 group"
              >
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email
                  </div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-primary">
                    commercial@tonycomiti.com
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Adresse
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    69 avenue Pierre Grenier,
                    <br />
                    92100 Boulogne Billancourt
                  </div>
                </div>
              </div>
            </div>
            <a
              href="mailto:commercial@tonycomiti.com"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg"
            >
              Devenir sponsor de MIH
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white font-extrabold text-xs">
            MIH
          </div>
          <span className="text-sm text-slate-600">© {new Date().getFullYear()} Tony Comiti Média</span>
        </div>
        <span className="text-xs text-slate-500">Mon Incroyable Histoire — Kit Média digital</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Performances />
        <Audience />
        <Offers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
