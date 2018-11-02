import Vue from 'vue'
import VueI18n from 'vue-i18n'

import zhongg from './cn'
import taiwai from './ft'
import english from './en'

import config from '../config'

Vue.use(VueI18n, {
  i18n: function (path, options) {
    let value = i18n.t(path, options)
    if (value !== null && value !== undefined) {
      return value
    }
    return ''
  }
})

const messages = {
  cn: {
    ...zhongg
  },
  ft: {
    ...taiwai
  },
  en: {
    ...english
  }
}

const i18n = new VueI18n({
  locale: window.sessionStorage.getItem(config.lang) || 'cn',
  messages
})

export default i18n
