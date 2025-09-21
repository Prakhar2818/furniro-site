import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Node modules chunking
          if (id.includes('node_modules')) {
            // React ecosystem
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            // Router
            if (id.includes('react-router')) {
              return 'router';
            }
            // Radix UI components
            if (id.includes('@radix-ui') || id.includes('radix')) {
              return 'radix-ui';
            }
            // Icons and utilities
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // Toast notifications
            if (id.includes('react-toastify')) {
              return 'toast';
            }
            // CSS and styling utilities
            if (id.includes('clsx') || id.includes('tailwind') || id.includes('class-variance-authority')) {
              return 'styling';
            }
            // Other vendor libraries
            return 'vendor';
          }
          
          // App code chunking
          if (id.includes('/src/pages/')) {
            return 'pages';
          }
          if (id.includes('/src/components/')) {
            return 'components';
          }
          if (id.includes('/src/context/') || id.includes('/src/hooks/')) {
            return 'context';
          }
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'chunk'
            : 'chunk';
          return `js/[name]-[hash].js`;
        },
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash].[ext]';
          
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(woff|woff2|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return 'fonts/[name]-[hash].[ext]';
          }
          if (/\.(png|jpe?g|gif|svg|ico|webp)$/i.test(assetInfo.name)) {
            return 'images/[name]-[hash].[ext]';
          }
          if (ext === 'css') {
            return 'css/[name]-[hash].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        },
      },
    },
  },
});
