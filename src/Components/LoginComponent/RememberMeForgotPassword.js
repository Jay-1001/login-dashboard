import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkbox from '../Checkbox';

function RememberMeForgotPassword() {
    
    function forgotPassword() {
        alert('Please contact the customer service');
    }

    return (
        <div className="row">
            <div className="col-sm-4"><Checkbox checkboxText='Remember Me' /></div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4" style={{textAlign:'right'}}><a href='#' style={{color:'black'}} onClick={forgotPassword}>Forgot Password?</a></div>
        </div>
    )
}

export default RememberMeForgotPassword
