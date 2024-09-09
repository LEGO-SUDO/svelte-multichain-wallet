import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import nodePolyfills from "vite-plugin-node-stdlib-browser"
import { nodePolyfills as viteNodePolyfills } from "vite-plugin-node-polyfills"
import type { UserConfig } from "vite"

export default defineConfig({
  plugins: [
    sveltekit(),
    nodePolyfills(),
    viteNodePolyfills({
      // Whether to polyfill specific globals.
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
  define: {
    "process.env": {},
    global: "globalThis",
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
        process: "process",
      },
    },
  },
} as UserConfig)
