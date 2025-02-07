// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      PROD_ENV_VAR_1: envField.string({
        context: "server",
        access: "secret",
      }),
      PROD_ENV_VAR_2: envField.string({
        context: "server",
        access: "secret",
      }),
      DEV_ONLY_VAR: envField.string({
        context: "server",
        access: "secret",
      }),
    },
    validateSecrets: true,
  },
});
