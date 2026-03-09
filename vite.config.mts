import { defineConfig } from 'vite';

// Ensure all HTML pages are included in the production build,
// so Vercel can serve /products.html, /about.html, etc.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        products: 'products.html',
        about: 'about.html',
        contact: 'contact.html',
        cart: 'cart.html',
      },
    },
  },
});

