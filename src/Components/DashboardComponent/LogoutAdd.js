import React from 'react'
import Button from 'react-bootstrap/Button';
import { IconContext } from "react-icons";
import { FaPlusCircle } from 'react-icons/fa';
import { useHistory } from "react-router-dom";

function LogoutAdd(props) {
    const history = useHistory();

    function logout() {
        props.logOutHandler();
        history.push('/');
    }

    return (
        <div className="row" style={{marginTop:'150px'}}>
            <div className="col-sm-6">
                <Button style={{marginLeft:'40px', marginTop:'30px', color:'white', fontWeight:'bold'}} variant="link" onClick={logout}>Log out</Button>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
                <IconContext.Provider value={{ color: "#e663bc", size:'70px' }}>
                    <div style={{marginLeft:'40px', marginTop:'30px'}}>
                        <a href='#'><FaPlusCircle/></a>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default LogoutAdd
