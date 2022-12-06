import React from 'react'

import { Arrow } from '../icons/Icons'
import "./scss/expbtn.scss"


const  ExpandBtn = (props) => {

 return (
    <button
        className='exp_btn'
        onClick={()=> props.sectionState.SetExpandState(!props.sectionState.expandState)}
     
        >
            
        <Arrow />
    </button>
  )
}

export default ExpandBtn