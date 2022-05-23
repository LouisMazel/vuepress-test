import { defineUserConfig, SiteData, defaultTheme, viteBundler } from 'vuepress'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  // site config
  lang: 'en-US',
  title: 'Maz-UI',
  description: 'Library of standalone components and tools for Vue & Nuxt (v3.x)',
  clientConfigFile: path.resolve(__dirname, 'client.ts'),

  head: [],

  // theme and its config
  theme: defaultTheme(),

  bundler: viteBundler({
    viteOptions: {
      optimizeDeps: {
        include: ['vue', 'maz-ui'],
      },
    }
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        }
      }
    })
  ],

  alias: {
    '@assets': path.resolve(__dirname, './assets'),
  },
})