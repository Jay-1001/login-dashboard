import React from 'react'
import '../App.css'

function Checkbox(props) {
    return (
        <div>
            <input className='custom-checkbox' type="checkbox"></input> {props.checkboxText}
        </div>
    )
}

export default Checkbox
