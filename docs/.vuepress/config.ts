import { defineUserConfig, SiteData, defaultTheme, viteBundler } from 'vuepress'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'
import { sidebar, navbar } from './configs'
import { sitemapPlugin } from "vuepress-plugin-sitemap2"
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

const getBaseUrl = (): SiteData['base'] => {
  return process.env.NODE_ENV === 'production' ? `/vuepress-test/` : '/'
}

export default defineUserConfig({
  // site config
  lang: 'en-US',
  title: 'Maz-UI',
  description: 'Library of standalone components and tools for Vue & Nuxt (v3.x)',
  clientConfigFile: path.resolve(__dirname, 'client.ts'),
  base: getBaseUrl(),

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/icons/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/icons/favicon-32x32.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'application-name', content: 'Maz UI' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Maz UI' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'meta',
      { name: 'twitter:creator', content: '@mazeel' },
    ],
    [
      'meta',
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    [
      'meta',
      { name: 'twitter:site', content: '@maz__ui' },
    ],
    [
      'meta',
      { property: 'og:title', content: 'Maz-UI - Vue.JS & Nuxt.JS library' },
    ],
    [
      'meta',
      { property: 'og:description', content: 'Library of standalone components and tools for Vue & Nuxt (v3.x)' },
    ],
    [
      'meta',
      { property: 'og:type', content: 'website' },
    ],
    [
      'meta',
      { name: 'twitter:title', content: 'Maz-UI - Vue.JS & Nuxt.JS library' },
    ],
    [
      'meta',
      { name: 'twitter:description', content: 'Library of standalone components and tools for Vue & Nuxt (v3.x)' },
    ],
    ['meta', { property: 'og:image', content: '/img/maz-ui-preview.jpg' }],
    ['meta', { name: 'twitter:image', content: '/img/maz-ui-preview.jpg' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/img/icons/apple-touch-icon.png' },
    ],
    [
      'link',
      { property: 'og:site_name', content: 'Maz UI' },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/img/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#2d89ef' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/maz-ui-preview.jpg' }],
  ],

  // theme and its config
  theme: defaultTheme({
    logo: '/img/logo.svg',
    repo: 'LouisMazel/maz-ui',
    docsDir: 'packages/docs/docs',
    docsBranch: 'master',
    navbar,
    sidebar,
  }),

  bundler: viteBundler({
    // viteOptions: {
    //   // @ts-ignore
    //   ssr: {
    //     noExternal: ['maz-ui'],
    //   },
    // },
  }),
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-EM35TM23ZC',
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    sitemapPlugin({
      hostname: 'https://louismazel.github.io/maz-ui-3/',
      changefreq: 'daily'
    }),
    mediumZoomPlugin({
      selector: 'img.zoom-custom-imgs'
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