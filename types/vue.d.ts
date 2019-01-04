// noinspection ES6UnusedImports
import Vue from 'vue'

import { VueHighlight } from './vue-highlight'

declare module 'vue/types/vue' {
  interface Vue {
    $highlight: VueHighlight
  }
}
