import React from 'react'




import "./scss/project_section.scss"
import "./scss/project_section_view.scss"




const Section = (props) => {
  return (
    <div className='section'>
        <div className='section_title_box'>
            <h4>{props.name}</h4>
        </div>
        <div className='section_content'>

        </div>
        {props.children}
    </div>
  )
}

export default Section
