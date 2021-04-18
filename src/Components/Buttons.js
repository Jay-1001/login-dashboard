import React from 'react'
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

function ButtonComponent(props) {
    const history = useHistory();
    const variantType = (props.btnType) ? props.btnType : 'Primary';
    const btnSize = (props.btnSize) ? props.btnSize : '';
    
    function clickHandler() {
        if(props.validateAndNav) {
            const path = props.validateAndNav();
            if(path !== '') {
                history.push(path);
            }
        }
    }

    return (
        <div>
            <Button variant={variantType} size={btnSize} style={props.style ? props.style : {}} onClick={clickHandler}>{props.btnTile}</Button><br/><br/>
            {   (props.errorText)
                ? <label style={{color:'red'}}>{props.errorText}</label>
                : null
            }
        </div>
    )
}

export default ButtonComponent
