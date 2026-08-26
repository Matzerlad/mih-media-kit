import { createFileRoute } from "@tanstack/react-router";

// Standard OAuth popup handshake expected by Decap/Sveltia CMS's GitHub backend:
// https://decapcms.org/docs/external-oauth-clients/
function renderCallbackPage(status: "success" | "error", payload: Record<string, unknown>) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;

  return `<!doctype html>
<html>
  <body>
    <script>
      (function () {
        function receiveMessage(e) {
          window.opener.postMessage(${JSON.stringify(message)}, e.origin);
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  </body>
</html>`;
}

function htmlResponse(body: string, status = 200) {
  return new Response(body, {
    status,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export const Route = createFileRoute("/api/callback")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const code = url.searchParams.get("code");
        const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
        const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

        if (!code || !clientId || !clientSecret) {
          return htmlResponse(
            renderCallbackPage("error", {
              message: "Configuration OAuth GitHub incomplète (code ou variables manquants).",
            }),
            400,
          );
        }

        const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
        });

        const tokenJson = (await tokenResponse.json()) as {
          access_token?: string;
          error?: string;
          error_description?: string;
        };

        if (!tokenJson.access_token) {
          return htmlResponse(
            renderCallbackPage("error", {
              message:
                tokenJson.error_description ?? tokenJson.error ?? "Échange du token GitHub échoué.",
            }),
            400,
          );
        }

        return htmlResponse(
          renderCallbackPage("success", { token: tokenJson.access_token, provider: "github" }),
        );
      },
    },
  },
});
