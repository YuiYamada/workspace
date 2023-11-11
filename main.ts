/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

// Denoの環境変数を取得
const PORT = Deno.env.get("PORT");
// start
await start(manifest, { port: PORT ? Number(PORT) : undefined });
