export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,

  css: ["@/assets/styles/main.scss"],

  devServer: {
    port: 3002,
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
