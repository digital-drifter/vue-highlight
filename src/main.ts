import Vue, { VueConstructor } from 'vue'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import php from 'highlight.js/lib/languages/php'
import 'highlight.js/styles/tomorrow-night-eighties.css'
import VueHighlight, { VueHighlightOptions } from '../types'

hljs.fixMarkup('true')
hljs.registerLanguage('javascript', javascript as any)
hljs.registerLanguage('php', php as any)

class Highlighter implements VueHighlight {
  options: VueHighlightOptions

  constructor (options: VueHighlightOptions) {
    this.options = options
  }

  static install (vm: VueConstructor<Vue>, options?: any): never | void {
    const instance = new vm()

    Object.defineProperty(vm.prototype, '$highlight', {
      value: new Highlighter(Object.assign(options || {}, { $isServer: instance.$isServer }))
    })
  }

  blocks (selector: string = 'pre code'): void {
    document.querySelectorAll(selector).forEach(hljs.highlightBlock)
  }
}

export default Highlighter
