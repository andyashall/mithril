import m from 'mithril'

import Home from './views/home'
import Page from './views/page'

m.route.prefix('')
m.route(document.body, '/', {
  '/': Home,
  '/:page': Page
})