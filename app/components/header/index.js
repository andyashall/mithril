import m from 'mithril'
import css from './style.css'

export default class Header {
  view() {
    return m('.headCont',
      m('.headLeft', m("a[href=/]", {oncreate: m.route.link}, "Home")),
      m('.headRight', {onclick: ()=>{console.log('hello')}}, 'Login / Signup')
    )
  }
}