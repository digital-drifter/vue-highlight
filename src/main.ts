import Vue, { VueConstructor } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow-night-eighties.css'
import VueHighlight, { VueHighlightOptions } from '../types'

class Highlighter implements VueHighlight {
  options: VueHighlightOptions

  constructor (options: VueHighlightOptions) {
    this.options = options

    if (this.options.fixMarkup) {
      hljs.fixMarkup('true')
    }

    this.registerLanguages().catch((error: any) => {
      console.error(error)
    })
  }

  static install (vm: VueConstructor<Vue>, options?: any): never | void {
    const instance = new vm()

    Object.defineProperty(vm.prototype, '$highlight', {
      value: new Highlighter(Object.assign(options || {}, { $isServer: instance.$isServer }))
    })
  }

  blocks (selector?: string): void {
    document.querySelectorAll(selector || 'pre code').forEach(hljs.highlightBlock)
  }

  private async registerLanguages (): Promise<void> {
    if (Array.isArray(this.options.languages)) {
      const promises = this.options.languages.map((language: string) => {
        return import(`highlight.js/lib/languages/${language}`).then((value: any) => hljs.registerLanguage(language, value))
      })

      await Promise.all(promises)
    }
  }
}

export default Highlighter
