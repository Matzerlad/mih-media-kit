import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  Mic,
  Mail,
  MapPin,
  Users,
  Sparkles,
  Award,
  Film,
  Headphones,
  Image as ImageIcon,
  ArrowRight,
  Check,
  Quote,
  Heart,
  MessageCircle,
  ThumbsUp,
  Music2,
  Instagram,
  Youtube,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MIH - Mon Incroyable Histoire | Kit Média" },
      {
        name: "description",
        content:
          "Kit Média de MIH - Mon Incroyable Histoire. Programme premium de témoignages : 100K abonnés YouTube, 105K vues / épisode, audience engagée 35-45 ans.",
      },
    ],
  }),
});

/* ---------- Building blocks ---------- */

function Placeholder({
  label,
  className = "",
  aspect = "aspect-video",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary via-background to-accent/50 ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
        <ImageIcon className="size-8 opacity-50" />
        <span className="text-xs font-medium uppercase tracking-widest">
          {label}
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_60%)]" />
    </div>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur">
      <Sparkles className="size-3" />
      {children}
    </span>
  );
}

/* ---------- Header ---------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-bold">
            M
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-tight">
              MIH
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Kit Média
            </div>
          </div>
        </div>
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#propos" className="hover:text-foreground">Propos</a>
          <a href="#concept" className="hover:text-foreground">Concept</a>
          <a href="#chiffres" className="hover:text-foreground">Performances</a>
          <a href="#offres" className="hover:text-foreground">Offres</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
        >
          Devenir Sponsor <ArrowRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------- 1. Hero ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-0 size-[600px] rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 size-[500px] rounded-full bg-primary/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:pt-24">
        <div className="space-y-7">
          <SectionTag>Kit Média 2026</SectionTag>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            MIH
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Mon Incroyable Histoire
            </span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Kit Média — Le programme premium de témoignages qui capte une
            audience engagée, attentive et fidèle.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#offres"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Découvrir nos offres <ArrowRight className="size-4" />
            </a>
            <a
              href="#chiffres"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
            >
              Voir nos performances
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-gold/30 blur-2xl" />
          <div className="relative">
            <Placeholder
              label="Couverture Kit Média PDF — Page 1"
              aspect="aspect-[3/4]"
              className="shadow-2xl"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-white px-4 py-3 shadow-lg md:flex items-center gap-3">
              <Award className="size-5 text-gold" />
              <div className="leading-tight">
                <div className="text-xs text-muted-foreground">Programme</div>
                <div className="text-sm font-semibold">Premium 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. Propos ---------- */

function Propos() {
  return (
    <section id="propos" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTag>Le Propos</SectionTag>
        <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
          Des épreuves.
          <span className="text-primary"> Du courage.</span>
          <br />
          De la résilience.
        </h2>
        <div className="mt-10 grid gap-8 text-lg leading-relaxed text-muted-foreground md:grid-cols-2">
          <p>
            Chaque semaine, une vie bascule. Un survivant. Un ancien voyou. Une
            victime. Un témoin d'un événement exceptionnel. Ils racontent
            minute par minute le moment qui a bouleversé leur existence mais
            surtout comment ils s'en sont relevés.
          </p>
          <p>
            Au-delà du simple fait divers ou de l'anecdote, MIH est un format
            d'interviews intimistes centré sur des valeurs profondément
            positives. Des destins hors du commun, des parcours de résilience
            et des leçons de vie qui inspirent, captivent et fédèrent une
            communauté en quête de sens et d'authenticité.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Concept ---------- */

function Concept() {
  const points = [
    { icon: Calendar, label: "Diffusion hebdomadaire" },
    { icon: Clock, label: "Formats longs de 40 à 60 minutes" },
    { icon: Award, label: "Programme premium de témoignages" },
    { icon: Film, label: "40 épisodes publiés" },
    {
      icon: Headphones,
      label: "« Une audience qui ne scrolle pas. Une audience qui écoute. »",
    },
    {
      icon: Users,
      label:
        "Une équipe de journalistes et créateurs de contenus expérimentés",
    },
  ];

  return (
    <section id="concept" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionTag>Le Concept</SectionTag>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
            MIH, un concept fort et original
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Lançé en avril 2025 sur Youtube, MIH s'est imposé comme un programme
            de récits immersifs à forte intensité émotionnelle. Chaque épisode
            repose sur une mécanique simple : laisser une personne raconter,
            sans interruption artificielle, le moment qui a changé sa vie.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Interview réalisée par le journaliste{" "}
            <span className="font-semibold text-foreground">
              Jean-Charles Doria
            </span>
            , réalisateur de documentaires de société diffusés sur de grandes
            chaînes françaises et internationales.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" />
              </div>
              <p className="mt-4 font-medium leading-snug">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <Placeholder label="Épisode 01" />
          <Placeholder label="Épisode 02" />
          <Placeholder label="Épisode 03" />
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. Performances ---------- */

function Stat({
  value,
  unit,
  label,
  big = false,
}: {
  value: string;
  unit: string;
  label: string;
  big?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg ${
        big ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/5 transition group-hover:bg-primary/10" />
      <div className="relative">
        <div className="flex items-baseline gap-2">
          <span
            className={`font-display font-bold text-foreground ${
              big ? "text-7xl md:text-8xl" : "text-5xl md:text-6xl"
            }`}
          >
            {value}
          </span>
          <span className="rounded-md bg-gold/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-gold-foreground">
            {unit}
          </span>
        </div>
        <p className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
      </div>
    </div>
  );
}

function Performances() {
  return (
    <section id="chiffres" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionTag>Nos Performances</SectionTag>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
            Les spectateurs restent.
            <span className="text-primary"> Ils s'attachent.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          <Stat value="8" unit="M de vues" label="Record absolu sur une vidéo" big />
          <Stat value="100" unit="K Abonnés" label="Communauté YouTube" />
          <Stat value="105" unit="K Vues / épisode" label="Vues moyennes" />
          <Stat value="35" unit="% Rétention" label="Taux de rétention moyen" />
          <Stat value="5,5" unit="% CTR" label="Taux de clic moyen" />
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Audience ---------- */

function Audience() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionTag>Notre Audience</SectionTag>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
            Une communauté
            <span className="text-primary"> attentive et engagée.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-white p-8">
            <Users className="size-6 text-primary" />
            <h3 className="mt-4 font-display text-xl font-bold">Cœur de cible</h3>
            <p className="mt-2 text-muted-foreground">
              Adultes actifs, pouvoir d'achat. Français.
            </p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-6xl font-bold text-primary">
                35–45
              </span>
              <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-primary">
                ans
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-8">
            <h3 className="font-display text-xl font-bold">Répartition</h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-primary/5 p-5 text-center">
                <div className="font-display text-5xl font-bold text-primary">
                  55<span className="text-2xl">%</span>
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Hommes
                </p>
              </div>
              <div className="rounded-xl bg-gold/10 p-5 text-center">
                <div className="font-display text-5xl font-bold text-foreground">
                  45<span className="text-2xl">%</span>
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Femmes
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground">
            <Heart className="size-6" />
            <h3 className="mt-4 font-display text-xl font-bold">
              Une audience engagée
            </h3>
            <p className="mt-2 text-sm opacity-90">
              Plusieurs vidéos dépassent largement les 1000 commentaires et
              atteignent jusqu'à 8 000 likes.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-white/10 p-3">
                <MessageCircle className="size-4" />
                <div className="mt-2 text-2xl font-bold">1 000+</div>
                <div className="text-[10px] uppercase tracking-wider opacity-80">
                  Commentaires
                </div>
              </div>
              <div className="rounded-lg bg-white/10 p-3">
                <ThumbsUp className="size-4" />
                <div className="mt-2 text-2xl font-bold">8 000</div>
                <div className="text-[10px] uppercase tracking-wider opacity-80">
                  Likes / vidéo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. Acquisition / viralité ---------- */

function Acquisition() {
  const platforms = [
    {
      icon: Music2,
      name: "TikTok",
      handle: "@monincroyablehistoire",
      color: "bg-foreground text-background",
      stats: [
        { v: "210", u: "K Abonnés" },
        { v: "3,9", u: "M Likes" },
        { v: "2M+", u: "Vues / extrait" },
        { v: "5-7", u: "% Engagement" },
      ],
    },
    {
      icon: Headphones,
      name: "Spotify",
      handle: "Podcast Mon Incroyable Histoire",
      color: "bg-[oklch(0.65_0.18_150)] text-white",
      stats: [
        { v: "TOP", u: "30" },
        { v: "Avril", u: "2026" },
      ],
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@monincroyablehistoire_mih",
      color: "bg-gradient-to-br from-[oklch(0.7_0.2_30)] to-[oklch(0.55_0.25_320)] text-white",
      stats: [
        { v: "9", u: "K Abonnés" },
        { v: "800", u: "K Vues Reels" },
      ],
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionTag>Acquisition & Viralité</SectionTag>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
            Un écosystème
            <span className="text-primary"> multi-plateformes.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {platforms.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`flex items-center gap-3 p-6 ${p.color}`}>
                <p.icon className="size-6" />
                <div>
                  <div className="font-display text-lg font-bold">{p.name}</div>
                  <div className="text-xs opacity-80">{p.handle}</div>
                </div>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-3 p-6">
                {p.stats.map((s, j) => (
                  <div key={j} className="rounded-xl bg-secondary p-4">
                    <div className="font-display text-2xl font-bold">{s.v}</div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {s.u}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-slate-50 p-6 text-muted-foreground md:p-8">
          <div className="flex items-start gap-3">
            <TrendingUp className="mt-1 size-5 text-primary" />
            <p>
              <span className="font-semibold text-foreground">Interactions :</span>{" "}
              Fort taux de partage. Conversion vers les formats longs premium de
              YouTube.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. Offres ---------- */

function Offers() {
  const offers = [
    {
      num: "01",
      title: "L'Intégration Premium : Mid-roll intégré",
      price: "6 000",
      unit: "€",
      desc: "Le sponsor s'intègre naturellement au milieu de la vidéo, après une rupture naturelle.",
      example:
        "Interview sur la construction d'un business. L'invité parle naturellement de comment il utilise la solution du sponsor.",
      meta: ["Durée : 60-90 secondes MAX", "Placement : mid-roll"],
    },
    {
      num: "02",
      title: "Le Pré-Roll",
      price: "4 000",
      unit: "€",
      desc: "Annonce rapide du sponsor au début ou à la fin de la vidéo.",
      example:
        "« Cette vidéo est soutenue par [Marque]. Allez sur [lien] »",
      meta: ["Durée : 30-60 secondes MAX", "Placement : pré-roll ou post-roll"],
    },
    {
      num: "03",
      title: "BUNDLE (Long-Format + Shorts)",
      price: "8 500",
      unit: "€",
      desc: "1 intégration long-format (60-90 sec) + 3 à 4 Shorts TikTok (15-30 sec) avec le même sponsor.",
      example:
        "Avantage : sponsor atteint l'audience YouTube ET TikTok simultanément.",
      meta: ["1 vidéo 60-90 sec", "3-4 Shorts de 15-30 sec"],
      highlight: true,
    },
    {
      num: "04",
      title: "Le Partenariat de Saison",
      price: "Sur devis",
      unit: "",
      desc: "Une association éditoriale premium permettant à une marque d'accompagner plusieurs épisodes de MIH dans la durée.",
      example:
        "Vidéo 1 en avril, Vidéo 2 en mai. Deux intégrations distinctes, même sponsor. Avantage : répétition = confiance accrue.",
      meta: ["Intégrations multiples non consécutives"],
    },
  ];

  return (
    <section id="offres" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionTag>Notre Offre & Tarifs</SectionTag>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
            Plusieurs dispositifs publicitaires
            <span className="text-primary"> conçus pour respecter votre audience.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Maximisez votre ROI grâce à des formats pensés pour s'intégrer
            naturellement dans nos récits.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((o, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl border bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl ${
                o.highlight
                  ? "border-gold shadow-lg ring-2 ring-gold/30"
                  : "border-border"
              }`}
            >
              {o.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">
                  Recommandé
                </span>
              )}
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Format {o.num}
              </div>
              <h3 className="mt-3 font-display text-xl font-bold leading-tight min-h-[3.5rem]">
                {o.title}
              </h3>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-primary">
                  {o.price}
                </span>
                {o.unit && (
                  <span className="text-2xl font-bold text-primary">
                    {o.unit}
                  </span>
                )}
                {o.price !== "Sur devis" && (
                  <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    HT
                  </span>
                )}
              </div>

              <p className="mt-5 text-sm text-muted-foreground">{o.desc}</p>

              <div className="mt-4 rounded-lg border border-dashed border-border bg-secondary/50 p-3">
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <Quote className="size-3 shrink-0 mt-0.5 text-gold" />
                  <span className="italic">{o.example}</span>
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-xs">
                {o.meta.map((m, j) => (
                  <li key={j} className="flex items-center gap-2 text-foreground">
                    <Check className="size-3.5 text-primary" />
                    {m}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 inline-flex items-center justify-center gap-1 rounded-full px-4 py-2.5 text-xs font-semibold transition ${
                  o.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border bg-white text-foreground hover:bg-secondary"
                }`}
              >
                Choisir ce format <ArrowRight className="size-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. Tony Comiti ---------- */

function TonyComiti() {
  const tc = [
    { v: "100", u: "K Abonnés YouTube" },
    { v: "4,3", u: "M Vues / 28 jours" },
    { v: "297 100", u: "Heures visionnage / 28j" },
    { v: "2", u: "M Spectateurs / mois" },
    { v: "+8 701", u: "Abonnés / 28 jours" },
    { v: "3 500", u: "Films produits pour la TV" },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionTag>Tony Comiti Média</SectionTag>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
              Une expertise
              <span className="text-primary"> des récits du réel.</span>
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                MIH est conçu par une équipe dédiée de{" "}
                <span className="font-semibold text-foreground">
                  10 salariés
                </span>{" "}
                au sein de la grande agence de presse Tony Comiti. L'agence
                produit depuis de nombreuses années des programmes
                (documentaires et reportages) de société pour les plus grandes
                chaînes TV en France (TF1, France TV, Canal+, Arte, M6) et à
                l'international (NHK, ABC, National Geographic).
              </p>
              <p>
                Le programme MIH est publié chaque semaine sur la Chaîne Tony
                Comiti Média.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["TF1", "France TV", "Canal+", "Arte", "M6", "NHK", "ABC", "National Geographic"].map(
                (b) => (
                  <span
                    key={b}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-foreground"
                  >
                    {b}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {tc.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <div className="font-display text-3xl font-bold text-foreground">
                  {s.v}
                </div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {s.u}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. Contact ---------- */

function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-[oklch(0.35_0.2_265)] p-10 text-primary-foreground md:p-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTag>Contact</SectionTag>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
                Associez votre marque à des récits qui captivent durablement.
              </h2>
              <p className="mt-6 text-lg opacity-90">
                Pour discuter d'une intégration sur mesure et recevoir une
                proposition tarifaire, nos équipes vous répondent sous{" "}
                <span className="font-semibold">quarante-huit heures ouvrées</span>.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/15">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider opacity-70">
                      Commercial
                    </div>
                    <a
                      href="mailto:commercial@tonycomiti.com"
                      className="font-semibold hover:underline"
                    >
                      commercial@tonycomiti.com
                    </a>
                    <div className="text-sm opacity-80">
                      L'équipe commerciale MIH
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/15">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider opacity-70">
                      Adresse
                    </div>
                    <div className="font-semibold">
                      Tony Comiti Media — MIH Mon Incroyable Histoire
                    </div>
                    <div className="text-sm opacity-80">
                      69 avenue Pierre Grenier, 92100 Boulogne Billancourt
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest opacity-80">
                Nos réseaux sociaux
              </div>
              {[
                { icon: Youtube, name: "YouTube", handle: "@tonycomitimedia" },
                { icon: Music2, name: "TikTok", handle: "@monincroyablehistoire" },
                { icon: Instagram, name: "Instagram", handle: "@monincroyablehistoire_mih" },
                { icon: Headphones, name: "Spotify", handle: "@monincroyablehistoire" },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid size-11 place-items-center rounded-xl bg-white/15">
                      <s.icon className="size-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{s.name}</div>
                      <div className="text-sm opacity-80">{s.handle}</div>
                    </div>
                  </div>
                  <ArrowRight className="size-4 opacity-70" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
            M
          </div>
          <span>© {new Date().getFullYear()} MIH — Tony Comiti Média</span>
        </div>
        <div className="text-xs">Kit Média — Tous droits réservés</div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Propos />
        <Concept />
        <Performances />
        <Audience />
        <Acquisition />
        <Offers />
        <TonyComiti />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
