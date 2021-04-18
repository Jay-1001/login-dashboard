import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function DashboardNavbar() {
    return (
        <Navbar bg="#181d36" variant="dark">
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="mr-auto">
                <Nav.Link href="#all">All</Nav.Link>
                <div style={{width:'40px'}}></div>
                <Nav.Link href="#articles">Articles</Nav.Link>
                <div style={{width:'40px'}}></div>
                <Nav.Link href="#podcast">Podcast</Nav.Link>
                <div style={{width:'40px'}}></div>
                <Nav.Link href="#video">Video</Nav.Link>
                <div style={{width:'40px'}}></div>
                <Nav.Link href="#downloads">Downloads</Nav.Link>
                <div style={{width:'40px'}}></div>
                <Nav.Link href="#playall"><Button style={{backgroundColor:'#ff1493', borderColor:'#ff1493', height:'90%'}}>Play All</Button></Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default DashboardNavbar
