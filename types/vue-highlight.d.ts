import { PluginFunction } from 'vue'

export type VueHighlightPlugin<Instance extends VueHighlight> = VueHighlightOptions & Instance

export type VueHighlightOptions = { [key: string]: any } & { 
  $isServer: boolean
  languages: string[]
  fixMarkup: boolean
}

export declare class VueHighlight {
  static install: PluginFunction<never>

  options: VueHighlightOptions

  constructor (options: VueHighlightOptions)

  blocks (selector?: string): void
}
