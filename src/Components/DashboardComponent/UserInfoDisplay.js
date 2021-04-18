import React from 'react'
import Image from 'react-bootstrap/Image'

function UserInfoDisplay(props) {
    return (
        <div className="row" style={{marginTop:'50px', marginLeft:'30px', display:'flex'}}>
            <div className="col-sm-2"><Image src="/avatar-sample.jpg" roundedCircle style={{height:'50px'}} /></div>
            <div className="col-sm-10">
                <label style={{marginLeft:'20px', color:'white'}}>{props.name}</label><br/>
                <label style={{marginLeft:'20px', color:'white'}}>{props.email}</label>
            </div>
        </div>
    )
}

export default UserInfoDisplay
