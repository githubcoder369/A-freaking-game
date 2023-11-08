import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        // Specify your entry point for TypeScript
        rollupOptions: {
          input: {
            main: './src/main.ts'
          }
        }
    }
})
