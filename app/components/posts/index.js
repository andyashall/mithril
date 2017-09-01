import m from 'mithril'
import axios from 'axios'

import css from './style.css'

let posts = [
  {
    title: 'Testing',
    content: 'Some text'
  },
  {
    title: 'Testing 2',
    content: 'Some text'
  },
]

axios.get('https://www.reddit.com/r/JavaScript.json')
.then((res)=>{
    let p = res.data.data.children
    console.log(p)
    posts = p
})
.catch((err)=>{console.log(err)})

export default m('.postsCont', posts.map(p => {
  return m('.post',
    m('.postTitle', p.title),
    m('.postContent', p.content)
  )
}))