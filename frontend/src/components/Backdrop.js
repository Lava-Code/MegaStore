import React from 'react'
import './Backdrop.css'

function Backdrop({show, click}) {
    return (
        show && <div className='backdrop'onClick={click}>BackDrop</div>
    )
}
export default Backdrop
