import React from 'react'
import ExpandBtn from '../exp_button/ExpandBtn'
import { useexpandProjectCard } from '../../hooks/UseProjectCard'


const  ProjectCard = (props) => {
    const expandHook = useexpandProjectCard();

  return (
<div className='project_card_box'>
   
        <div 
        className={`project_card`}
        id={expandHook.expandState?"open":"closed"}
        >
            <div className='inner_project_box'>
                <div className='project_name'>
                        <h5>{props.name}</h5> 
                </div>
                <div className='expand_btn_box'>
                    <ExpandBtn sectionState={expandHook} />
                </div>
            </div>
            <div className='inner_project_box_description'>
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hdasdasdas. dasdaDDD ..Kdsadsad nadjsnaj djdnsjandjsan djsanjnj
               </p>
            </div>
            <div className='inner_project_box_description_links'>
               
            </div>
        </div>
 
</div>
  )
}

export default ProjectCard