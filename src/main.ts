import Vue, { PluginFunction, VueConstructor } from 'vue'
import { highlightBlock } from 'highlight.js'
import VueHighlight, { VueHighlightOptions } from '../types'

class Highlighter implements VueHighlight {
  options: VueHighlightOptions

  constructor (options: VueHighlightOptions) {
    this.options = options
  }

  blocks (selector: string = 'pre code'): void {
    document.querySelectorAll(selector).forEach(highlightBlock)
  }

  static install (vm: VueConstructor<Vue>, options?: any): never | void {
    const instance = new vm()

    Object.defineProperty(vm.prototype, '$highlight', {
      value: new Highlighter(Object.assign(options || {}, { $isServer: instance.$isServer }))
    })
  }
}

export default Highlighter
