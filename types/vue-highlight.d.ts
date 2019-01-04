// noinspection ES6UnusedImports
import Vue, { PluginFunction } from 'vue'

export type VueHighlightPlugin<Instance extends VueHighlight> = VueHighlightOptions & Instance

export type VueHighlightOptions = { [key: string]: any } & { $isServer: boolean }

export interface VueHighlight {
  options: VueHighlightOptions

  blocks (selector: string): void
}

export interface VueHighlightConstructor<V extends VueHighlight = VueHighlight> {
  new (options: VueHighlightOptions): VueHighlightPlugin<V>
}


export const VueHighlight: VueHighlightConstructor

declare module 'vue/types/vue' {
  interface Vue {
    $highlight: VueHighlight
  }
}
