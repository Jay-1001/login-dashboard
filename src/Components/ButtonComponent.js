import React from 'react'
import Button from 'react-bootstrap/Button';

function ButtonComponent(props) {
    console.log(props)
    const variantType = (props.btnType) ? props.btnType : 'Primary';
    const btnSize = (props.btnSize) ? props.btnSize : '';
    // const styleText = (props.style) ? props.style : '';
    // console.log(styleText)
    return (
        <div>
            <Button variant={variantType} size={btnSize} style={props.style ? props.style : {}} onClick={props.clickHandler}>{props.btnTile}</Button>
        </div>
    )
}

export default ButtonComponent
