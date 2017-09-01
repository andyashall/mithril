import m from 'mithril'

import css from './style.css'

export default class Posts {
  constructor() {
    this.posts = []
  }
  oncreate() {
    m.request({
      method: 'GET',
      url: 'https://www.reddit.com/r/JavaScript.json'
    })
    .then((res) => {
      let p = res.data.children
      this.posts = p
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