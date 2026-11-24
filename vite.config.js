import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'api-contact-handler',
      configureServer(server) {
        server.middlewares.use('/api/contact', async (req, res) => {
          try {
            const { handleContactRequest } = await import('./server/contactHandler.js');
            await handleContactRequest(req, res);
          } catch (err) {
            console.error('API Error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
          }
        });
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 4321,
    strictPort: false,
  },
});
