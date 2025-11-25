const baseURL = "/full-cycle-event-agency/";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,

  css: ["@/assets/styles/main.scss"],

  devServer: {
    port: 3002,
  },

  app: {
    baseURL,
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
