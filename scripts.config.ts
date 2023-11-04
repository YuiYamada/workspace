
import { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run src/server.tsx",
      desc: "run my server.tsx file",
			allow: ["net", "read"],
			unstable: true,
			watch: false,
    },
		bundle: {
			cmd: "deno bundle ./src/public/main.tsx ./src/public/main.js",
			watch: false,
		}
  },
};

export default config;
