import React from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { FaPlayCircle } from 'react-icons/fa';
import image1 from '../../assets/dark_green_background.png'
import image2 from '../../assets/lampImage.jpeg'
import { IconContext } from "react-icons";
import Button from 'react-bootstrap/Button';

function DashboardCards() {
    const tallCardsList = [
        {
            title:"Your limitation it's only your imagination",
            playIcon: true,
            cardStyle: { width:'25rem', height:'33rem', display:'inline-block', float:'left', borderRadius:'20px', backgroundImage:`url(${image1})` },
            iconStyle: {marginTop:'100px'}
        }
    ]
    var eachCard = tallCardsList

    return (
        <>
            <Card text='white' style={{ width:'25rem', height:'33rem', display:'inline-block', float:'left', borderRadius:'20px', backgroundImage:`url(${image1})` }}>
                <Card.Body>
                    <Card.Title>
                        <h2>Your <br/> limitation <br/>it's only <br/>your <br/>imagination</h2>
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
                            <h2>Great things never come from comfort zones</h2>
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
                        <Card.Title><h2>Dream it.<br/>Wish it.<br/>Do it.</h2></Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
            <Card text='white' style={{ width:'650px', height:'15rem', display:'inline-block', marginLeft:'80px', marginTop:'40px', borderRadius:'20px', backgroundImage:`url(${'https://fupping.com/wp-content/uploads/2018/10/foto-sushi-128246-unsplash-e1540720089124.jpg'})`, backgroundSize:'650px 15rem' }}>
                <Card.Body>
                    <Card.Title><h2>Stay<br/> Focussed</h2></Card.Title>
                    <Button variant="light">Read Articles</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default DashboardCards
