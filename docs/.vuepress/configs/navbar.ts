import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from 'maz-ui/package.json'

import { components } from './components'

export const navbar: NavbarConfig = [
  components,
  {
    text: `v${version}`,
    children: [
      {
        text: 'Changelog',
        link: 'https://github.com/LouisMazel/maz-ui/blob/next/packages/lib/CHANGELOG.md',
      },
      {
        text: 'v2.x',
        link: 'https://louismazel.github.io/maz-ui',
      },
    ],
  },
]