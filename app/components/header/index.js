import m from 'mithril'
import css from './style.css'

export default m('.headCont',
  m('.headLeft', { onclick: () => {console.log('hello')}}, 'Home'),
  m('.headRight', 'Login / Signup')
)