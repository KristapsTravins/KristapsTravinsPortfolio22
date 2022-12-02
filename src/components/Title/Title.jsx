import React from 'react'
import "./scss/title_main.scss"
import { Html5, JS, ReactIcon } from '../icons/Icons'

const Title  = () => {
  return (
    <div
    className='title_block'
    >
    <h1>Kristaps Traviņš</h1>
    <div className='title_description'>
      <h3><span>front - end</span>developer</h3>
    </div>
    <div className='icon_box'>
            <div className='reactIcon'><ReactIcon /></div>
            <div className='JsIcon'><JS /></div>
            <div className='HtmlIcon'><Html5 /></div>
    </div>
    </div>
  )
}

export default Title