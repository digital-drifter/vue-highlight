import Vue, { PluginFunction, VueConstructor } from 'vue'
import { highlightBlock } from 'highlight.js'
import VueHighlight, { VueHighlightOptions } from '../types'

class Highlighter extends VueHighlight {
  options: VueHighlightOptions

  constructor (options: VueHighlightOptions) {
    super(options)

    this.options = options
  }

  blocks (selector: string = 'pre code'): void {
    document.querySelectorAll(selector).forEach(highlightBlock)
  }
}

const VueHighlightPluginFunction: PluginFunction<any> = (vm: VueConstructor<Vue>, options?: any): void => {
  const instance = new vm()

  Object.defineProperty(vm.prototype, '$highlight', {
    value: new Highlighter(Object.assign(options || {}, { $isServer: instance.$isServer }))
  })
}

export default VueHighlightPluginFunction
