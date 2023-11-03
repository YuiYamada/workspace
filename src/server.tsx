import { Application, Router, RouterContext } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import React from 'https://dev.jspm.io/react';
import { renderToString } from "https://esm.sh/preact-render-to-string@5.2.5";

import App from './App.tsx';

const app = new Application();
const router = new Router();

// log
app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ??
      "localhost"}:${port}`,
  );
});

app.addEventListener("error", (evt) => {
  console.log(evt.error);
});

//React要素をHTMLへ変換
const page = (
	<html>
		<head>
			<title>app-doc-maker</title>
		</head>
		<body>
			<App />
		</body>
	</html>
)

const resHtml = renderToString(page);

router.get('/app-doc-maker', (ctx: RouterContext) => {
	ctx.response.body = resHtml;
})

app.use(router.routes());
app.use(router.allowedMethods());

// TODO: condigからとる
await app.listen({ port: 8080 });
