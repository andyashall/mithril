import m from 'mithril'
import axios from 'axios'

import css from './style.css'

export default class Posts {
  constructor() {
    this.posts = []
  }
  oncreate() {
    axios.get('https://www.reddit.com/r/JavaScript.json')
    .then((res)=>{
        let p = res.data.data.children
        console.log(this.posts)
        this.posts = p
        console.log(this.posts)
        m.redraw()
    })
    .catch((err)=>{console.log(err)})
  }
  view() {
    return m('.postsCont', this.posts.map(p => {
      return m('.post',
        m('.postTitle', p.data.author),
        m('.postContent', p.data.title)
      )
    }))
  }
}