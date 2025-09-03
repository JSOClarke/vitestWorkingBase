/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // <- enable describe/it/expect globally
    environment: "jsdom", // <- needed for DOM testing
  },
});
