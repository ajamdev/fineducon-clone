// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import react from '@astrojs/react'


export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon(
    {
      include: {
        ph: ["*"],
      },
      iconDir: "src/assets/icons"
    }
  ), react()]
})
