import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    rules: {
      // Plain <img> is kept on purpose for now (pixel parity with the Vite build).
      // Switch to next/image later and remove this override.
      "@next/next/no-img-element": "off",
    },
  },
]);
