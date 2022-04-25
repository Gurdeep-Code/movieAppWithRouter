import React from 'react'
import NF_bg from '../images/Nf_bg.png';
import '../css/Notfound.css'

function Notfound({children}) {
  return (
    <div className='notfound'>
      <img src={NF_bg} />
      {children}
    </div>
  )
}

export default Notfound
