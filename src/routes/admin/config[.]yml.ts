import { createFileRoute } from "@tanstack/react-router";

import cmsConfigYaml from "@/content/cms-config.yml?raw";

export const Route = createFileRoute("/admin/config.yml")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(cmsConfigYaml, {
          headers: { "content-type": "text/yaml; charset=utf-8" },
        });
      },
    },
  },
});
