import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import LabelComponent from './LabelComponent';
import InputField from './InputField';
import Checkbox from './Checkbox';
import ButtonComponent from './ButtonComponent';
import { UserDetails } from './userDetails';

class LoginPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName: '',
            password: '',
            error: ''
        }
    }
    
    updateDetails = (e) => {
        if(e.target.type === 'password') {
            this.setState({
                password: e.target.value
            })
        } else if(e.target.type === 'text') {
            this.setState({
                userName: e.target.value
            })
        }
    }

    loginClicked = () => {
        const stateValues = this.state;
        console.log(stateValues)
        if(stateValues.userName === '') {
            this.setState({
                error: 'Please enter the username'
            });
        } else if(stateValues.password === '') {
            this.setState({
                error: 'Please enter the password'
            });
        } else {
            this.setState({
                error: ''
            });
            // UserDetails will contain all users' login credentials which in real world will be fetched from server
            const requiredUser = UserDetails.find(function(eachUser) {
                return(eachUser.userName === stateValues.userName);
            });
            console.log(requiredUser)
            if(requiredUser && (requiredUser.password === stateValues.password)) {
                // alert('logged in');
                this.props.loggedInHandler(requiredUser.userName);
            } else {
                // alert('Please enter valid credentials');
                this.setState({
                    error: 'Please enter valid credentials'
                });
            }
        }
        
    }

    forgotPassword = () => {
        alert('Please contact the customer service');
    }

    render() {
        return (
            <div style={{backgroundColor:'#e6e6e6', height: '100%', position:'absolute', left:'0', width:'100%', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Jumbotron style={{width:'50%', backgroundColor:'white'}}>
                    <div style={{width:'70%', marginLeft:'15%'}}>
                        <h1>Account Login</h1><br/>
                        <form>
                            <div className="form-group">
                                <LabelComponent labelText='USERNAME'/>
                                <InputField inputSize='lg' addnClass='focusGreen' changeHandler={this.updateDetails} /><br/>
                                { (this.state.error === 'Please enter the username') 
                                    ? <label style={{color:'red'}}>{this.state.error}</label>
                                    : null
                                }
                                <LabelComponent labelText='PASSWORD'/>
                                <InputField inputType='password' addnClass='focusGreen' inputSize='lg' changeHandler={this.updateDetails} /><br/>
                                { (this.state.error === 'Please enter the password') 
                                    ? <label style={{color:'red'}}>{this.state.error}</label>
                                    : null
                                }
                                <div style={{display:'flex', width:'100%'}}>
                                    <Checkbox checkboxText='Remember Me' />
                                    <div style={{width:'370px'}}></div>
                                    <a href='#' style={{color:'black'}} onClick={this.forgotPassword}>Forgot Password?</a>
                                </div>
                            </div>
                            {/* <button type="submit" className="btn btn-primary">Sign in</button> */}
                            <ButtonComponent clickHandler={this.loginClicked} btnTile='Login' btnSize='lg' btnType='dark' style={{borderRadius:'40px', width: '140px'}} />
                            { (this.state.error === 'Please enter valid credentials') 
                                ? <label style={{color:'red'}}>{this.state.error}</label>
                                : null
                            }
                            {/* <Button variant="dark" size="lg" style={{borderRadius:'40px', width: '140px'}}>Login</Button> */}
                        </form>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default LoginPage
