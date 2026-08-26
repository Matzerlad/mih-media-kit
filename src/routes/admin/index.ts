import { createFileRoute } from "@tanstack/react-router";

const ADMIN_HTML = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Kit Média — Administration</title>
  </head>
  <body>
    <script src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js" type="module"></script>
  </body>
</html>
`;

export const Route = createFileRoute("/admin/")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(ADMIN_HTML, {
          headers: { "content-type": "text/html; charset=utf-8" },
        });
      },
    },
  },
});
