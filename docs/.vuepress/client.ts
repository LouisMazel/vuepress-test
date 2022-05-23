import { defineClientConfig } from '@vuepress/client'
import 'maz-ui/css/main.css'
import 'maz-ui/css/aos.css'

import MazBtn from './build-components/MazBtn'

export default defineClientConfig({
  enhance: async ({ app }) => {
    app.component('MazBtn', MazBtn)
  }
})