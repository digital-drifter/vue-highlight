// noinspection ES6UnusedImports
import Vue from 'vue'

export type VueHighlightOptions = { [key: string]: any } & { $isServer: boolean }

export interface VueHighlight {
  options: VueHighlightOptions

  blocks (selector: string): void
}

declare module 'vue/types/vue' {
  interface Vue {
    $highlight: VueHighlight
  }
}
