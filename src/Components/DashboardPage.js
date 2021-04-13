import React, { Component } from 'react'
// import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Dashboard.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { UserDetails } from './userDetails';
import image1 from '../assets/dark_green_background.png'
import image2 from '../assets/lampImage.jpeg'
import { FaPlayCircle, FaRocket, FaPlusCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";
import CardDeck from 'react-bootstrap/CardDeck';


export class DashboardPage extends Component {
    render() {
        const name = (this.props) ? this.props.user : '';
        var userObj = {};
        userObj = UserDetails.find(function(eachUser) {
            return(eachUser.userName === name);
        });
        return (
        <div style={{backgroundColor:'#3a3c45', width:'100%', height:'100vh'}}>
            <div style={{width:'20%', height:'100vh', display:'inline-block', float:'left'}}>
                <div style={{marginTop:'50px', width:'60px', height:'60px', marginLeft:'30px', backgroundColor:'white', borderRadius: '30px 0px 30px 0px' }}>
                    <h1 style={{marginLeft:'17px', color:'#181d36'}}>B</h1>
                </div>
                <div class="row" style={{marginTop:'50px', marginLeft:'30px', display:'flex'}}>
                    <div class="col-sm-2"><Image src="/avatar-sample.jpg" roundedCircle style={{height:'50px'}} /></div>
                    <div class="col-sm-10">
                        <label style={{marginLeft:'20px', color:'white'}}>{name}</label><br/>
                        <label style={{marginLeft:'20px', color:'white'}}>{userObj.emailID ? userObj.emailID : ''}</label>
                    </div>
                </div>
                {/* <div id='profileDetails' style={{marginTop:'100px', marginLeft:'30px', display:'flex'}}>
                    <Image src="/avatar-sample.jpg" roundedCircle style={{height:'50px'}} />
                    <label style={{marginLeft:'20px', color:'white'}}>{name}</label>
                    <label style={{marginLeft:'20px', color:'white'}}>{userObj.emailID ? userObj.emailID : ''}</label>
                </div> */}
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
                <Card text='white' style={{ width:'300px', height:'180px', marginTop:'60px', borderRadius:'30px', marginLeft:'40px', backgroundColor:'#5b5d63' }}>
                    <Card.Text>
                        <IconContext.Provider value={{ color: "#e663bc", size:'35px' }}>
                        <div class="row">
                            <div class="col-sm-4"><FaRocket style={{marginTop:'30px', marginLeft:'30px'}} /></div>
                            <div class="col-sm-8">
                                <label style={{fontWeight:'bold', marginTop:'25px'}}>Pro account <br/>is more powerful.<br/> Get 30% off.</label>
                                <Button variant="primary" style={{width:'90px', color:'#e32da9', backgroundColor:'white', borderColor:'white'}}>Get pro</Button>
                            </div>
                        </div>
                            {/* <div style={{marginTop:'20px', marginLeft:'20px', display:'flex'}}>
                                <label style={{fontWeight:'bold'}}><FaRocket />Pro account <br/>is more powerful.<br/> Get 30% off.</label>
                            </div> */}
                        </IconContext.Provider>
                    </Card.Text>
                </Card>
                <div class="row">
                    <div class="col-sm-6">
                        <Button style={{marginLeft:'40px', marginTop:'30px', color:'white', fontWeight:'bold'}} variant="link" onClick={this.props.logOutHandler}>Log out</Button>
                    </div>
                    <div class="col-sm-2"></div>
                    <div class="col-sm-4">
                        <IconContext.Provider value={{ color: "#e663bc", size:'70px' }}>
                            <div style={{marginLeft:'40px', marginTop:'30px'}}>
                                <a href='#'><FaPlusCircle/></a>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <div style={{width:'80%', height:'100vh', display:'inline-block', float:'right'}}>
                <Jumbotron style={{width:'95%', marginLeft:'2.5%', backgroundColor:'#181d36', marginTop:'30px', borderRadius:'30px', height:'90%'}}>
                    <h1 style={{ color: 'white' }}>Motivation</h1>
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
                    <Card text='white' style={{ width:'25rem', height:'33rem', display:'inline-block', float:'left', borderRadius:'20px', backgroundImage:`url(${image1})` }}>
                            <Card.Body>
                                <Card.Title>
                                    <h1>Your <br/> limitation <br/>it's only <br/>your <br/>imagination</h1>
                                    <IconContext.Provider value={{ color: "white", size:'50px' }}>
                                        <div style={{marginTop:'100px'}}>
                                            <a href='#'><FaPlayCircle /></a>
                                        </div>
                                    </IconContext.Provider>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    <CardDeck>
                        <Card text='white' style={{ width:'25rem', height:'15rem', display:'inline-block', marginLeft:'80px', borderRadius:'20px', backgroundColor:'#0f0f5c' }}>
                            <Card.Body>
                                <Card.Title>
                                    <h1>Great things never come from comfort zones</h1>
                                </Card.Title>
                                <Card.Text>
                                    <IconContext.Provider value={{ color: "white", size:'50px' }}>
                                        <div style={{marginLeft:'300px'}}>
                                            <a href='#'><FaPlayCircle /></a>
                                        </div>
                                    </IconContext.Provider>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card text='white' style={{ width:'25rem', height:'15rem', display:'inline-block', marginLeft:'30px', borderRadius:'20px', backgroundImage:`url(${image2})`, backgroundSize:'100%' }}>
                            <Card.Body>
                                <Card.Title><h1>Dream it.<br/>Wish it.<br/>Do it.</h1></Card.Title>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <Card text='white' style={{ width:'650px', height:'15rem', display:'inline-block', marginLeft:'80px', marginTop:'40px', borderRadius:'20px', backgroundImage:`url(${'https://fupping.com/wp-content/uploads/2018/10/foto-sushi-128246-unsplash-e1540720089124.jpg'})`, backgroundSize:'650px 15rem' }}>
                        <Card.Body>
                            <Card.Title><h1>Stay<br/> Focussed</h1></Card.Title>
                            <Button variant="light">Read Articles</Button>
                        </Card.Body>
                    </Card>

                </Jumbotron>
            </div>
        </div>
        )
    }
}

export default DashboardPage
