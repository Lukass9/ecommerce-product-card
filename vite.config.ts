import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ecommerce-product-card/",
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        // ...
      },

      // esbuild options, to transform jsx to js
      esbuildOptions: {
        // ...
      },

      // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include. By default all svg files will be included.
      include: "**/*.svg?react",

      //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
      exclude: "",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.ts",
    // browser: {
    //   enabled: true,
    //   name: "chrome", // browser name is required
    // },
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
