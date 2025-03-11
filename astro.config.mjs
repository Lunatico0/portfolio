import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel"; // 👈 Asegurar que está en modo "server"
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  output: "server", // 👈 Es necesario para rutas dinámicas en Vercel
  adapter: vercel(),
  integrations: [tailwind(), react()],
});
