import React from 'react'

function Article({content}) {
  return (
    <div className='article'>
      <div className="date">{content.date}</div>
      <div className="art_title">{content.title}</div>
      <img src={content.image} alt="" className="art_img" />
      <p className="art_text">{content.content}</p>
      <button className="next">Continues ...</button>
    </div>
  )
}

export default Article
