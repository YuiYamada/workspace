import { Application, Router, RouterContext } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import * as path from "https://deno.land/std@0.146.0/path/mod.ts";

const app = new Application();
const router = new Router();

// The directory of this module
const moduleDir = path.dirname(path.fromFileUrl(import.meta.url));

// The public directory (with "index.html" in it)
const publicDir = path.join(moduleDir, "public");

// A helper function to get the file contents
// of a specific file path in the public directory
function getPublicFile(...filePath: string[]): Promise<Uint8Array> {
	return Deno.readFile(path.join(publicDir, ...filePath));
}
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

router.get('/app-doc-maker', async (ctx: RouterContext, next) => {
	// Set the contents of the "index.html" file to the response body
	ctx.response.body = await getPublicFile("index.html");

	// Set the appropriate resopnse type for HTML
	ctx.response.type = "text/html";

	// This isn't technically needed here, but it's good practice
  // because other middleware might need to run in more complicated routes
  await next();
})

router.get('/index.js', async (ctx: RouterContext, next) => {
	// Set the contents of the "index.html" file to the response body
	ctx.response.body = await getPublicFile("index.js");

		// Set the appropriate resopnse type for HTML
		ctx.response.type = "text/javascript";
	// This isn't technically needed here, but it's good practice
  // because other middleware might need to run in more complicated routes
  await next();
})

app.use(router.routes());
app.use(router.allowedMethods());

// TODO: condigからとる
await app.listen({ port: 8080 });
