import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Users,
  Sparkles,
  Film,
  Headphones,
  ArrowRight,
  Check,
  Quote,
  Music2,
  Instagram,
  Youtube,
} from "lucide-react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const YOUTUBE_PLAYLIST_URL =
  "https://www.youtube.com/playlist?list=PLyzqvdCqSk_lwjj3ZDqUhZr5faSfnjbE6";
const CALENDAR_URL = "https://cal.com/monincroyablehistoire/15min";

const INSTAGRAM_REELS = [
  {
    id: "DX1WiiXhtXz",
    url: "https://www.instagram.com/reel/DX1WiiXhtXz/",
    video: "/media/reels/DX1WiiXhtXz.mp4",
    views: "69K",
  },
  {
    id: "DXcVdJwD8sA",
    url: "https://www.instagram.com/reel/DXcVdJwD8sA/",
    video: "/media/reels/DXcVdJwD8sA.mp4",
    views: "1,1M",
  },
  {
    id: "DXXAIM8MAHy",
    url: "https://www.instagram.com/reel/DXXAIM8MAHy/",
    video: "/media/reels/DXXAIM8MAHy.mp4",
    views: "116K",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MIH - Mon Incroyable Histoire | Kit Média" },
      {
        name: "description",
        content:
          "Kit Média de MIH - Mon Incroyable Histoire. Programme premium de témoignages : 100K abonnés YouTube, 105K vues / épisode, audience engagée 25-35 ans.",
      },
      { name: "robots", content: "noindex, nofollow, noarchive, nosnippet" },
      { name: "googlebot", content: "noindex, nofollow, noarchive, nosnippet" },
    ],
  }),
});

/* ---------- Building blocks ---------- */

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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <img
            src="/media/mih-logo.jpeg"
            alt="MIH - Mon Incroyable Histoire"
            className="size-11 rounded-lg border border-black/10 object-cover"
          />
          <div className="hidden sm:block">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Kit Média
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-1 text-xs font-semibold text-muted-foreground sm:text-sm">
          <a
            href="#chiffres"
            className="rounded-full px-2.5 py-2 transition hover:bg-secondary hover:text-foreground sm:px-4"
          >
            Performances
          </a>
          <a
            href="#offres"
            className="rounded-full px-2.5 py-2 transition hover:bg-secondary hover:text-foreground sm:px-4"
          >
            Offres
          </a>
          <a
            href="#contact"
            className="rounded-full px-2.5 py-2 transition hover:bg-secondary hover:text-foreground sm:px-4"
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-xs font-semibold text-background shadow-sm transition hover:bg-primary hover:text-primary-foreground md:inline-flex"
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
    <section className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden bg-[#061219] text-white">
      <a
        href={YOUTUBE_PLAYLIST_URL}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 block"
        aria-label="Voir la playlist MIH sur YouTube"
      >
        <img
          src="/media/mih-hero-cover.png"
          alt="MIH - Mon Incroyable Histoire"
          className="size-full object-contain object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061219]/90 via-[#061219]/10 to-transparent" />
      </a>

      <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-7xl items-end px-5 pb-10 pt-40 md:px-6 md:pb-14">
        <div className="w-full">
          <div className="grid max-w-3xl grid-cols-3 gap-3 border-y border-white/20 bg-[#061219]/60 py-5 backdrop-blur md:max-w-4xl">
            {[
              ["100K", "abonnés"],
              ["105K", "vues / épisode"],
              ["40", "épisodes"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-display text-4xl font-bold text-white md:text-6xl">
                  {value}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/55">
                  {label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={YOUTUBE_PLAYLIST_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff0033] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#e6002e] hover:shadow-lg"
            >
              Voir la playlist <Youtube className="size-4" />
            </a>
            <a
              href="#offres"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-primary"
            >
              Découvrir nos offres <ArrowRight className="size-4" />
            </a>
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
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionTag>Le Propos</SectionTag>
          <div className="relative mt-8">
            <div className="absolute -left-3 -top-12 font-serif text-8xl leading-none text-primary/20 md:text-9xl">
              “
            </div>
            <h2 className="relative font-serif text-5xl font-semibold leading-[0.98] tracking-normal text-foreground md:text-7xl">
              Des épreuves.
              <br />
              Du courage.
              <br />
              De la résilience.
            </h2>
            <p className="mt-8 max-w-md font-serif text-2xl italic leading-snug text-primary md:text-3xl">
              Chaque semaine, une vie bascule.
            </p>
          </div>
        </div>

        <div className="pt-3 lg:pt-16">
          <div className="space-y-7 border-l border-border pl-6 text-lg leading-relaxed text-muted-foreground md:pl-8 md:text-xl">
            <p>
              Un survivant. Un ancien voyou. Une victime. Un témoin d'un événement exceptionnel. Ils
              racontent minute par minute le moment qui a bouleversé leur existence mais surtout
              comment ils s'en sont relevés.
            </p>
            <p>
              Au-delà du simple fait divers ou de l'anecdote, MIH est un format d'interviews
              intimistes centré sur des valeurs profondément positives. Des destins hors du commun,
              des parcours de résilience et des leçons de vie qui inspirent, captivent et fédèrent
              une communauté en quête de sens et d'authenticité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Concept ---------- */

function Concept() {
  const youtubeVideos = [
    {
      id: "v99hxmVdiZE",
      url: "https://www.youtube.com/watch?v=v99hxmVdiZE&list=PLyzqvdCqSk_lwjj3ZDqUhZr5faSfnjbE6&index=1",
      title: "Pablo Escobar / Tony Comiti : les secrets d'une interview choc",
      views: "671K vues",
    },
    {
      id: "AaD_a0vDbLc",
      url: "https://www.youtube.com/watch?v=AaD_a0vDbLc&list=PLyzqvdCqSk_lwjj3ZDqUhZr5faSfnjbE6&index=2",
      title: "J'ai été séquestrée et torturée par mes deux meilleures amies",
      views: "463K vues",
    },
    {
      id: "XLBSqOR7bzA",
      url: "https://youtu.be/XLBSqOR7bzA?si=QcByc05lYuDQwe9d",
      title: "Au coeur du Bataclan, le chef de la BRI raconte l'assaut",
      views: "206K vues",
    },
  ];

  return (
    <section id="concept" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl">
          <SectionTag>Le Concept</SectionTag>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
            MIH, UN CONCEPT FORT ET ORIGINAL
          </h2>
          <div className="mt-9 space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>
              <span className="float-left mr-4 font-serif text-6xl font-semibold leading-[0.86] text-primary md:text-7xl">
                L
              </span>
              ancé en avril 2025 sur Youtube, MIH s'est imposé comme un programme de récits
              immersifs à{" "}
              <span className="font-semibold text-primary">forte intensité émotionnelle</span>.
            </p>
            <p>
              Chaque épisode repose sur une mécanique simple : laisser une personne raconter, sans
              interruption artificielle, le moment qui a changé sa vie.
            </p>
            <p>
              Interview réalisée par le journaliste{" "}
              <span className="font-semibold text-primary">Jean-Charles Doria</span>, réalisateur de
              documentaires de société diffusés sur de grandes chaînes françaises et
              internationales.
            </p>
          </div>

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <blockquote className="relative mx-auto max-w-3xl text-center font-serif text-2xl italic leading-snug text-foreground md:text-3xl">
            <span className="absolute -left-4 -top-8 text-6xl text-primary/25 md:-left-10 md:text-7xl">
              “
            </span>
            Une audience qui ne scrolle pas. Une audience qui écoute.
            <span className="absolute -bottom-10 -right-4 text-6xl text-primary/25 md:-right-10 md:text-7xl">
              ”
            </span>
          </blockquote>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {youtubeVideos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden bg-[#061219]">
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/5" />
                <div className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-[#ff0033] text-white shadow-xl">
                  <Youtube className="size-7" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 min-h-[3rem] text-base font-bold leading-snug">
                  {video.title}
                </h3>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {video.views}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. Performances ---------- */

function Performances() {
  const stats = [["8M", "record absolu sur une vidéo"]];
  const comparisonData = [
    { label: "Ratio Vues / Abonnés", mih: 105, market: 15 },
    { label: "Rétention (Vidéos > 40 min)", mih: 35, market: 20 },
    { label: "Taux de Clic (CTR)", mih: 5.5, market: 4 },
  ];
  const ecosystemData = [
    { name: "Hommes (25-35 ans)", value: 55 },
    { name: "Femmes (25-35 ans)", value: 45 },
  ];
  const donutColors = ["#08b6c8", "#101827"];

  return (
    <section id="chiffres" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-[#061219] p-7 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionTag>Performances</SectionTag>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
                Des récits qui retiennent l'attention.
              </h2>
              <p className="mt-5 text-white/65">
                Les chiffres clés, rassemblés en un seul endroit.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/10">
              {stats.map(([value, label]) => (
                <div key={label} className="bg-[#061219] p-6 md:p-8">
                  <div className="font-display text-7xl font-bold leading-none text-primary md:text-8xl">
                    {value}
                  </div>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/55 md:text-sm">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.35fr_0.85fr]">
            <div className="rounded-2xl border border-white/10 bg-white p-5 text-foreground shadow-xl md:p-6">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold">MIH vs marché</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Chaque indicateur possède sa propre échelle.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <span className="size-2.5 rounded-full bg-primary" />
                    MIH
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="size-2.5 rounded-full bg-slate-300" />
                    Marché
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                {comparisonData.map((metric) => {
                  const max = Math.max(metric.mih, metric.market);
                  return (
                    <div key={metric.label}>
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <div className="font-semibold text-foreground">{metric.label}</div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Max {max}%
                        </div>
                      </div>
                      <div className="space-y-2">
                        <ComparisonBar
                          label="MIH"
                          value={metric.mih}
                          max={max}
                          className="bg-primary"
                        />
                        <ComparisonBar
                          label="Marché"
                          value={metric.market}
                          max={max}
                          className="bg-slate-300"
                        />
                      </div>
                    </div>
                  );
                })}
                <p className="text-xs text-slate-500">
                  Sources marché : Benchmarks VidIQ/TubeBuddy 2025 & données officielles YouTube
                  Creator Academy pour les formats documentaires.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white p-5 text-foreground shadow-xl md:p-6">
              <h3 className="font-display text-2xl font-bold">Cœur de cible</h3>
              <p className="mt-1 text-sm text-muted-foreground">Répartition 25-35 ans.</p>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ecosystemData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={76}
                      outerRadius={112}
                      paddingAngle={4}
                      stroke="none"
                    >
                      {ecosystemData.map((entry, index) => (
                        <Cell key={entry.name} fill={donutColors[index]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        border: "1px solid #cbd5e1",
                        borderRadius: "12px",
                        boxShadow: "0 12px 30px rgba(15, 23, 42, 0.12)",
                      }}
                      formatter={(value: number | string) => [`${value}%`, "Part"]}
                    />
                    <Legend
                      verticalAlign="bottom"
                      iconType="circle"
                      wrapperStyle={{ fontSize: 12, fontWeight: 600 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonBar({
  label,
  value,
  max,
  className,
}: {
  label: string;
  value: number;
  max: number;
  className: string;
}) {
  const width = `${Math.max((value / max) * 100, 4)}%`;

  return (
    <div className="grid grid-cols-[4.5rem_1fr_4rem] items-center gap-3">
      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="h-4 overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full rounded-full ${className}`} style={{ width }} />
      </div>
      <div className="text-right font-display text-lg font-bold text-foreground">
        {value.toLocaleString("fr-FR")}%
      </div>
    </div>
  );
}

/* ---------- 5. Audience ---------- */

function Audience() {
  const comments = [
    {
      handle: "@leane8734",
      time: "il y a 7 mois",
      likes: "101",
      episode: "Escobar / Tony Comiti",
      avatar: "/media/avatars/youtube/leane8734.jpg",
      text: "Je trouve cette histoire dingue ! Du journalisme, du vrai ! Revoir toutes ces images d'archives c'est tellement enrichissant, beau travail.",
    },
    {
      handle: "@seblopez4140",
      time: "il y a 7 mois",
      likes: "82",
      episode: "Escobar / Tony Comiti",
      avatar: "/media/avatars/youtube/seblopez4140.jpg",
      text: "Qu'il est agréable de trouver enfin la définition du vrai journalisme... Et quel courage !!!",
    },
    {
      handle: "@69jrodrigues",
      time: "il y a 5 mois",
      likes: "471",
      episode: "Kelly, survivante",
      avatar: "/media/avatars/youtube/69jrodrigues.jpg",
      text: "Kelly, vous êtes une femme d'une grande beauté, intelligente et profondément courageuse. Je vous souhaite tout le bonheur du monde.",
    },
    {
      handle: "@tres.moche.tres.mechant",
      time: "il y a 4 mois",
      likes: "38",
      episode: "Kelly, survivante",
      avatar: "/media/avatars/youtube/tres-moche-tres-mechant.jpg",
      text: "Je suis frappé par le courage et la force de cette femme, qui n'était qu'une enfant à l'époque des faits.",
    },
    {
      handle: "@yohanjanolin2271",
      time: "il y a 6 mois",
      likes: "75",
      episode: "Au coeur du Bataclan",
      avatar: "/media/avatars/youtube/yohanjanolin2271.jpg",
      text: "Un très très grand monsieur, tellement digne et maître de ses émotions. Lui et ses équipes sont nos héros du 21ème siècle.",
    },
  ];

  return (
    <section className="overflow-hidden bg-primary py-20 text-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <SectionTag>Notre Audience</SectionTag>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
              Une communauté attentive et engagée.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Des adultes actifs, sensibles aux histoires vraies et aux échanges qui prennent leur
              temps.
            </p>
            <div className="mt-8 rounded-2xl border border-foreground/10 bg-white/70 p-5 text-sm font-semibold uppercase tracking-wider text-foreground/65">
              Commentaires réels issus de plusieurs épisodes YouTube.
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[8%] top-0 hidden h-48 w-48 rounded-full bg-white/25 blur-3xl md:block" />
            <div className="grid gap-4 md:grid-cols-2">
              {comments.map((comment) => (
                <article
                  key={comment.text}
                  className="rounded-2xl border border-foreground/10 bg-[#061219] p-5 text-white shadow-2xl transition hover:-translate-y-1 hover:border-white/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={comment.avatar}
                        alt={`Photo de profil ${comment.handle}`}
                        className="size-10 shrink-0 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-semibold text-white">{comment.handle}</div>
                        <div className="text-xs text-white/45">{comment.time}</div>
                      </div>
                    </div>
                    <Quote className="size-5 shrink-0 text-primary" />
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-white/82">“{comment.text}”</p>
                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs font-semibold text-white/45">
                    <span>{comment.episode}</span>
                    <div className="inline-flex items-center gap-1.5 text-white/70">
                      <ThumbIcon />
                      <span>{comment.likes} J'aime</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThumbIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3m0 11V10l4-8a3 3 0 0 1 3 3v4h5a3 3 0 0 1 3 3l-1 7a3 3 0 0 1-3 3H7Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

/* ---------- 6. Acquisition / viralité ---------- */

function Acquisition() {
  const platforms = [
    {
      name: "TikTok",
      logo: "/media/logos/tiktok.svg",
      handle: "@monincroyablehistoire",
      color: "bg-[#050816] text-white",
      stats: [
        { v: "210K", u: "Abonnés" },
        { v: "3,9M", u: "Likes" },
        { v: "2M+", u: "Vues / extrait" },
        { v: "5-7%", u: "Taux d'engagement" },
      ],
    },
    {
      name: "Spotify",
      logo: "/media/logos/spotify.svg",
      handle: "Podcast Mon Incroyable Histoire",
      color: "bg-[#1DB954] text-white",
      stats: [{ v: "TOP 30", u: "En avril 2026" }],
    },
    {
      name: "Instagram",
      logo: "/media/logos/instagram.svg",
      handle: "@monincroyablehistoire_mih",
      color: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white",
      stats: [
        { v: "9K", u: "Abonnés" },
        { v: "800K", u: "Vues sur les Reels" },
      ],
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <SectionTag>Acquisition & Viralité</SectionTag>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
            MIH sur toutes les plateformes.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {platforms.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`flex items-center gap-4 p-5 ${p.color}`}>
                <img src={p.logo} alt={`Logo ${p.name}`} className="size-10 object-contain" />
                <div>
                  <div className="font-display text-2xl font-bold">{p.name}</div>
                  <div className="mt-0.5 text-xs opacity-85">{p.handle}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-px bg-border">
                {p.stats.map((s, j) => (
                  <div key={j} className="flex min-h-28 flex-col justify-center bg-[#dff8fd] p-5">
                    <div className="font-display text-6xl font-bold leading-none text-foreground md:text-7xl">
                      {s.v}
                    </div>
                    <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      {s.u}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-[#dff8fd] p-6 text-xl text-foreground md:p-8">
          <span className="font-semibold">Circulation :</span> les extraits courts créent la
          découverte, puis renvoient vers YouTube.
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. Offres ---------- */

function InstagramReels() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionTag>Reels Instagram</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
            Un petit aperçu de l'émission ?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Cliquez sur "Play" pour découvrir le ton de nos interviews et la force de nos formats
            courts, directement depuis cette page.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {INSTAGRAM_REELS.map((reel, index) => (
            <article
              key={reel.id}
              className="mx-auto w-full max-w-[320px] overflow-hidden rounded-xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex items-center justify-between border-b border-border px-3 py-1.5">
                <div className="flex items-center gap-2">
                  <Instagram className="size-3.5 text-primary" />
                  <div>
                    <div className="font-display text-base font-bold leading-none text-foreground">
                      {reel.views}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      vues
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Reel {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="bg-black">
                <video
                  src={reel.video}
                  className="aspect-[9/16] w-full bg-black object-cover"
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>
              <a
                href={reel.url}
                target="_blank"
                rel="noreferrer"
                className="block border-t border-border px-3 py-2 text-xs font-semibold text-primary hover:bg-secondary"
              >
                Ouvrir sur Instagram
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  const broadcasterLogos = [
    { name: "TF1", src: "/media/broadcasters/tf1.svg", className: "h-5" },
    { name: "France TV", src: "/media/broadcasters/france-tv.svg", className: "h-6" },
    { name: "Canal+", src: "/media/broadcasters/canal-plus.svg", className: "h-4" },
    { name: "Arte", src: "/media/broadcasters/arte.svg", className: "h-6" },
    { name: "M6", src: "/media/broadcasters/m6.svg", className: "h-6" },
    { name: "NHK", src: "/media/broadcasters/nhk.svg", className: "h-5" },
    { name: "ABC", src: "/media/broadcasters/abc.svg", className: "h-6" },
    {
      name: "National Geographic",
      src: "/media/broadcasters/national-geographic.svg",
      className: "h-7",
    },
  ];

  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <div>
            <SectionTag>Expertise / Réassurance</SectionTag>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              TONY COMITI MÉDIA
            </h2>
            <p className="mt-4 text-xl font-semibold italic text-primary">
              Une expertise des récits du réel.
            </p>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                MIH est conçu par une équipe dédiée de 10 salariés au sein de la grande agence de
                presse Tony Comiti.
              </p>
              <p>
                L'agence produit depuis de nombreuses années des programmes (documentaires et
                reportages) de société pour les plus grandes chaînes TV en France et à
                l'international.
              </p>
            </div>
            <div className="mt-8">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                Références diffuseurs
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {broadcasterLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-white px-4 shadow-sm"
                  >
                    <img
                      src={logo.src}
                      alt={`Logo ${logo.name}`}
                      className={`max-w-[7.5rem] object-contain ${logo.className}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-8 rounded-2xl border border-border bg-white/80 p-5 text-sm font-semibold text-foreground shadow-sm">
              Le programme MIH est publié chaque semaine sur la Chaine Tony Comiti Média.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Offers() {
  const offers = [
    {
      num: "01",
      title: "L'Intégration Premium : Mid-roll intégré",
      desc: "La marque apparaît au milieu de l'épisode, après une respiration éditoriale.",
      example: "L'invité évoque un usage concret, dans le fil de son histoire.",
      meta: ["Durée : 60-90 secondes MAX", "Placement : mid-roll"],
    },
    {
      num: "02",
      title: "Le Pré-Roll",
      desc: "Message court au début ou à la fin de la vidéo.",
      example: "« Cette vidéo est soutenue par [Marque]. Allez sur [lien] »",
      meta: ["Durée : 30-60 secondes MAX", "Placement : pré-roll ou post-roll"],
    },
    {
      num: "03",
      title: "BUNDLE (Long-Format + Shorts)",
      desc: "1 présence dans l'épisode + 3 à 4 Shorts TikTok autour du même partenaire.",
      example: "Une même campagne touche YouTube et TikTok sans changer de territoire.",
      meta: ["1 vidéo 60-90 sec", "3-4 Shorts de 15-30 sec"],
      highlight: true,
    },
    {
      num: "04",
      title: "Le Partenariat de Saison",
      desc: "Une présence installée sur plusieurs épisodes, pensée pour la répétition et la confiance.",
      example: "Deux prises de parole séparées, avec une cohérence éditoriale sur la durée.",
      meta: ["Intégrations multiples non consécutives"],
    },
  ];

  return (
    <section id="offres" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionTag>Notre Offre & Tarifs</SectionTag>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
            Des formats pensés pour rester naturels.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Chaque option garde le ton de MIH : sobre, contextualisée, facile à comprendre.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((o, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl border bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl ${
                o.highlight ? "border-gold shadow-lg ring-2 ring-gold/30" : "border-border"
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

              <div className="mt-6">
                <span className="font-display text-4xl font-bold text-primary">Sur mesure</span>
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
                href={CALENDAR_URL}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex items-center justify-center gap-1 rounded-full px-4 py-2.5 text-xs font-semibold transition ${
                  o.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border bg-white text-foreground hover:bg-secondary"
                }`}
              >
                Réserver un appel découverte (15 min) <ArrowRight className="size-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. Contact ---------- */

function Contact() {
  return (
    <section id="contact" className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-[#061219] p-10 text-white md:p-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTag>Contact</SectionTag>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
                Parlons d'un partenariat.
              </h2>
              <p className="mt-6 text-lg opacity-90">
                Réservez un créneau de quinze minutes pour cadrer vos objectifs et recevoir une
                proposition claire.
              </p>
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-white hover:text-foreground"
              >
                Prendre rendez-vous avec notre commercial
                <ArrowRight className="size-4" />
              </a>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/15">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider opacity-70">Commercial</div>
                    <a
                      href="mailto:commercial@monincroyablehistoire.com"
                      className="font-semibold hover:underline"
                    >
                      commercial@monincroyablehistoire.com
                    </a>
                    <div className="text-sm opacity-80">L'équipe commerciale MIH</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/15">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider opacity-70">Adresse</div>
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
                {
                  icon: Youtube,
                  name: "YouTube",
                  handle: "Playlist MIH",
                  href: YOUTUBE_PLAYLIST_URL,
                },
                {
                  icon: Music2,
                  name: "TikTok",
                  handle: "@monincroyablehistoire",
                  href: "https://www.tiktok.com/@monincroyablehistoire",
                },
                {
                  icon: Instagram,
                  name: "Instagram",
                  handle: "@monincroyablehistoire_mih",
                  href: "https://www.instagram.com/monincroyablehistoire_mih/",
                },
                {
                  icon: Headphones,
                  name: "Spotify",
                  handle: "Podcast Mon Incroyable Histoire",
                  href: "https://open.spotify.com/search/Mon%20Incroyable%20Histoire",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
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
        <Expertise />
        <Offers />
        <InstagramReels />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
