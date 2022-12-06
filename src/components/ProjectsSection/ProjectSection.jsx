import React from 'react'
import ExpandBtn from '../exp_button/ExpandBtn'

import "./scss/project_section.scss"

const ProjectSection = () => {
  return (
    <div className='project_section'>
        <div className='section_title_box'>
            <h4>projects</h4>
        </div>
        <div className='project_card_box'>
                <div className='project_card'>
                        <div className='project_name'>
                                <h5>studio-sn.eu</h5> 
                        </div>
                        <div className='expand_btn_box'>
                               <ExpandBtn />
                        </div>
                </div>
        </div>
    </div>
  )
}

export default ProjectSection