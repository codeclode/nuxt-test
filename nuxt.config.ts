// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=500, initial-scale=1",
      meta: [{ name: "description", content: "My amazing site." }],
    },
  },
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiBase: "/api",
    },
  },
});
