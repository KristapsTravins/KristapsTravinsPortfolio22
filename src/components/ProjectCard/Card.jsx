import React from 'react'
import ExpandBtn from '../exp_button/ExpandBtn'
import {useexpandProjectCard} from "../../hooks/UseProjectCard"



import "./scss/project_card.scss"
import "./scss/project_card_view.scss"




const Card = (props) => {
  return (
    <div className='project_card'>
       <div className='project_title_block'>
          <div className='project_title'>
            <h5>studio-sn.eu</h5>
            {/* ja ir processa */}
            <div className='prieview_label'>
                <p>- in development</p>
             </div>
          </div>
          
          <div className='project_exp_btn'>
            <ExpandBtn />
          </div>
       </div>
    </div>
  )
}

export default Card
