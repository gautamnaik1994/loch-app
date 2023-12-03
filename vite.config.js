import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

let isProduction = process.env.NODE_ENV === 'production'


export default defineConfig({
  base: isProduction? '/loch-app/':"/",
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
})

