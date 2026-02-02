import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.ts",
    include: ["src/**/*.spec.{ts,tsx}"],

    // 🔥 ISSO resolve TODOS os imports de CSS
    css: false,

    coverage: {
      reporter: ["text", "html"],
      exclude: ["**/ui/**"]
    }
  }
});
