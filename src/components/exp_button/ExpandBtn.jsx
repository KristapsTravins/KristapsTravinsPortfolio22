import React from 'react'
import { Arrow } from '../icons/Icons'
import "./scss/expbtn.scss"


function ExpandBtn() {
  return (
    <button
        className='exp_btn'
        onClick={()=>{
            
        }}
    >
        <Arrow />
    </button>
  )
}

export default ExpandBtn