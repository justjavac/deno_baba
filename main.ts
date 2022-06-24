import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { html } from "https://deno.land/x/html@v1.0.0/mod.ts";

function handleRequest(request: Request) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/favicon.svg")) {
    const favicon = new URL("favicon.svg", import.meta.url);
    return fetch(favicon);
  }

  return new Response(
    html`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <title>justjavac</title>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <style type="text/css">
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
                "Segoe UI Emoji", "Segoe UI Symbol";
              font-size: 50px;
              height: 100vh;
              margin: 0;
              padding: 0;
              color: #212529;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          </style>
        </head>

        <body>
          <div>justjavac</div>
        </body>
      </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}

serve(handleRequest);
