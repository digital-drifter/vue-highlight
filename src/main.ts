import Vue, { PluginFunction, VueConstructor } from 'vue'
import { highlightBlock } from 'highlight.js'
import { VueHighlight, VueHighlightOptions } from '@/vue-highlight'

class Highlight implements VueHighlight {
  options: VueHighlightOptions

  constructor (options: VueHighlightOptions) {
    this.options = options
  }

  blocks (selector: string = 'pre code'): void {
    document.querySelectorAll(selector).forEach(highlightBlock)
  }
}

const HightlightPlugin: PluginFunction<any> = (vm: VueConstructor<Vue>, options?: any): void => {
  const instance = new vm()

  Object.defineProperty(vm.prototype, '$highlight', {
    value: new Highlight(Object.assign(options || {}, { $isServer: instance.$isServer }))
  })
}

export default HightlightPlugin
