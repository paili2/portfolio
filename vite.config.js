import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio_deploy", // {repository-name}을 실제 저장소 이름으로 대체
});
