import React from 'react'
import Button from 'react-bootstrap/Button';

function Sidebar() {
    return (
        <ul className="nav flex-column" style={{marginTop:'30px'}}>
            <li className="nav-item" style={{marginTop:'10px', marginLeft:'30px'}}>
                <a className="nav-link dashboardLink" href="#">Motivation</a>
            </li>
            <li className="nav-item" style={{marginTop:'10px', marginLeft:'30px'}}>
                <a className="nav-link dashboardLink" href="#">Productivity
                    <Button size="sm" style={{backgroundColor:'#ff1493', borderColor:'#ff1493', marginLeft:'80px'}}>New Added</Button>
                </a>
            </li>
            <li className="nav-item" style={{marginTop:'10px', marginLeft:'30px'}}>
                <a className="nav-link dashboardLink" href="#">Design</a>
            </li>
            <li className="nav-item" style={{marginTop:'10px', marginLeft:'30px'}}>
                <a className="nav-link dashboardLink" href="#">Study</a>
            </li>
        </ul>
    )
}

export default Sidebar
