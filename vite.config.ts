import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import million from 'million/compiler';

export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
