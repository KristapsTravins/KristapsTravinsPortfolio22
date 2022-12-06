import React from 'react'
import ExpandBtn from '../exp_button/ExpandBtn'
import {useexpandProjectCard} from "../../hooks/UseProjectCard"

import ProjectCard from '../project_card/ProjectCard'

import "./scss/project_section.scss"
import "../project_card/scss/project_card.scss"



const ProjectSection = () => {
  return (
    <div className='project_section'>
        <div className='section_title_box'>
            <h4>projects</h4>
        </div>
        <ProjectCard name={"studio-sn.eu"} />
        <ProjectCard name={"antaview.com"} />
      
    </div>
  )
}

export default ProjectSection