import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",

  site: "https://ctgcode.com",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es",
          en: "en",
        },
      },
      customPages: [
        "https://ctgcode.com/plantilla-negocio-local/",
        "https://ctgcode.com/en/template-local-business/",
        "https://ctgcode.com/plantilla-servicios-profesionales/",
        "https://ctgcode.com/en/template-professional-services/",
        "https://ctgcode.com/plantilla-producto-startup/",
        "https://ctgcode.com/en/template-startup-product/",
      ],
      serialize(item) {
        // Asignar hreflang cruzado para la plantilla de negocio local
        if (
          item.url === "https://ctgcode.com/plantilla-negocio-local/" ||
          item.url === "https://ctgcode.com/en/template-local-business/"
        ) {
          item.links = [
            { url: "https://ctgcode.com/plantilla-negocio-local/", lang: "es" },
            {
              url: "https://ctgcode.com/en/template-local-business/",
              lang: "en",
            },
          ];
        }

        // Asignar hreflang cruzado para la plantilla de servicios profesionales
        if (
          item.url ===
            "https://ctgcode.com/plantilla-servicios-profesionales/" ||
          item.url === "https://ctgcode.com/en/template-professional-services/"
        ) {
          item.links = [
            {
              url: "https://ctgcode.com/plantilla-servicios-profesionales/",
              lang: "es",
            },
            {
              url: "https://ctgcode.com/en/template-professional-services/",
              lang: "en",
            },
          ];
        }

        // Asignar hreflang cruzado para la plantilla de producto startup
        if (
          item.url === "https://ctgcode.com/plantilla-producto-startup/" ||
          item.url === "https://ctgcode.com/en/template-startup-product/"
        ) {
          item.links = [
            {
              url: "https://ctgcode.com/plantilla-producto-startup/",
              lang: "es",
            },
            {
              url: "https://ctgcode.com/en/template-startup-product/",
              lang: "en",
            },
          ];
        }

        return item;
      },
    }),
  ],
});
