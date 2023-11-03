import { Application, Router, RouterContext } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import React from 'https://dev.jspm.io/react';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';

import App from './App.tsx';

const app = new Application();
const router = new Router();

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ??
      "localhost"}:${port}`,
  );
});

app.addEventListener("error", (evt) => {
  console.log(evt.error);
});

const resHtml = ReactDOMServer.renderToString(
	<html>
		<head>
			<title>app-doc-maker</title>
		</head>
		<body>
			<App />
		</body>
	</html>
);

router.get('/app-doc-maker', (ctx: RouterContext) => {
	ctx.response.body = resHtml;
})

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });
