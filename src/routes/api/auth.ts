import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/auth")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
        if (!clientId) {
          return new Response("Missing GITHUB_OAUTH_CLIENT_ID environment variable", {
            status: 500,
          });
        }

        const requestUrl = new URL(request.url);
        const redirectUri = `${requestUrl.origin}/api/callback`;

        const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
        authorizeUrl.searchParams.set("client_id", clientId);
        authorizeUrl.searchParams.set("scope", "repo,user");
        authorizeUrl.searchParams.set("redirect_uri", redirectUri);

        return Response.redirect(authorizeUrl.toString(), 302);
      },
    },
  },
});
