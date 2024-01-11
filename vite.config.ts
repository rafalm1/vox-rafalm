import { defineConfig } from "vite";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";
import vue from "@vitejs/plugin-vue";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/test/setup.ts",
  },
};

export default defineConfig({
  base: "/rafalmalyszko-vox/",
  plugins: [vue()],
  test: vitestConfig.test,
});
