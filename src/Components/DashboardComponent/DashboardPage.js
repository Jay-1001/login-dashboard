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
import { UserDetails } from '../userDetails';
import image1 from '../../assets/dark_green_background.png'
import image2 from '../../assets/lampImage.jpeg'
import { FaPlayCircle, FaRocket, FaPlusCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";
import CardDeck from 'react-bootstrap/CardDeck';
import UserInfoDisplay from './UserInfoDisplay';
import Sidebar from './Sidebar';
import LogoutAdd from './LogoutAdd';
import DashboardNavbar from './DashboardNavbar';
import DashboardCards from './DashboardCards';
import { Redirect } from 'react-router-dom';


export class DashboardPage extends Component {
    render() {
        // user will be redirected to home page if not logged in
        if(!this.props.isAuthorized) {
            return <Redirect to='/' />
        }

        const name = (this.props) ? this.props.user : '';
        var userObj = {};
        userObj = UserDetails.find(function(eachUser) {
            return(eachUser.userName === name);
        });
        return (
        <div style={{backgroundColor:'#3a3c45', width:'100%', height:'100vh'}}>
            <div style={{width:'20%', height:'100vh', display:'inline-block', float:'left'}}>
                <div id='logo' style={{marginTop:'50px', width:'60px', height:'60px', marginLeft:'30px', backgroundColor:'white', borderRadius: '30px 0px 30px 0px' }}>
                    <h1 style={{marginLeft:'17px', color:'#181d36'}}>B</h1>
                </div>
                <UserInfoDisplay name={name} email={userObj.emailID ? userObj.emailID : ''} />

                <Sidebar />
                <LogoutAdd logOutHandler={this.props.logOutHandler} />
            </div>

            <div style={{width:'80%', height:'100vh', display:'inline-block', float:'right'}}>
                <Jumbotron style={{width:'95%', marginLeft:'2.5%', backgroundColor:'#181d36', marginTop:'30px', borderRadius:'30px', height:'90%'}}>
                    <h1 style={{ color: 'white' }}>Motivation</h1>
                    
                    <DashboardNavbar />

                    <DashboardCards />

                </Jumbotron>
            </div>
        </div>
        )
    }
}

export default DashboardPage
