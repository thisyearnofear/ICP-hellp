import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  resolve: {
    alias: {
      "@declarations": path.resolve(__dirname, "../src/declarations"),
    },
  },
  server: {
    host: "127.0.0.1",
  },
  define: {
    "process.env.CANISTER_ID": JSON.stringify(process.env.CANISTER_ID),
    "process.env.CANISTER_ID_BACKEND": JSON.stringify(
      process.env.CANISTER_ID_BACKEND
    ),
    "process.env.DFX_NETWORK": JSON.stringify(process.env.DFX_NETWORK),
  },
});
