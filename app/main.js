import m from 'mithril'

import Home from './views/home'

m.mount(document.body, Home)

// m.route.mode = 'hash'
// m.render(document.body, '/', {
//   '/': 'home',
//   '/:page': 'page'
// })