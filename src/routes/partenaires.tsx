import { createFileRoute } from "@tanstack/react-router";
import { Index } from "./index";

export const Route = createFileRoute("/partenaires")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MIH - Mon Incroyable Histoire | Kit Média Partenaires" },
      {
        name: "description",
        content:
          "Kit média partenaires de MIH - Mon Incroyable Histoire. Offres, audiences et performances pour les sponsors.",
      },
      { name: "robots", content: "noindex, nofollow, noarchive, nosnippet" },
      { name: "googlebot", content: "noindex, nofollow, noarchive, nosnippet" },
    ],
  }),
});
