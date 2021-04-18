import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import InputField from '../InputField';
import RememberMeForgotPassword from './RememberMeForgotPassword';
import ButtonComponent from '../Buttons';
import { UserDetails } from '../userDetails';

class LoginPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName: '',
            password: '',
            userNameError: '',
            passwordError: '',
            credentialsError: ''
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

    validateForm = () => {
        var isValid = true;
        if(this.state.userName === '') {
            this.setState({
                userNameError: 'Please enter the username',
                credentialsError: ''
            });
            isValid = false;
        } else {
            this.setState({
                userNameError: ''
            });
        }
        if(this.state.password === '') {
            this.setState({
                passwordError: 'Please enter the password',
                credentialsError: ''
            });
            isValid = false;
        } else {
            this.setState({
                passwordError: ''
            });
        }
        console.log(isValid)
        return isValid;
    }

    loginClicked = () => {
        const stateValues = this.state;
        console.log(stateValues)
        if(this.validateForm()) {
            // UserDetails will contain all users' login credentials which in real world will be fetched from server
            const requiredUser = UserDetails.find(function(eachUser) {
                return(eachUser.userName === stateValues.userName);
            });
            console.log(requiredUser)
            if(requiredUser && (requiredUser.password === stateValues.password)) {
                this.props.loggedInHandler(requiredUser.userName);
                return ('/dashboard');
            } else {
                this.setState({
                    credentialsError: 'Please enter valid credentials'
                });
                return '';
            }
        }
        return '';
    }

    render() {
        return (
            <div style={{backgroundColor:'#e6e6e6', height: '100%', position:'absolute', left:'0', width:'100%', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Jumbotron style={{width:'50%', backgroundColor:'white'}}>
                    <div style={{width:'70%', marginLeft:'15%'}}>
                        <h1>Account Login</h1><br/>
                        <form>
                            <div className="form-group">
                                <InputField labelText='USERNAME' inputSize='lg' addnClass='focusGreen' changeHandler={this.updateDetails} errorText={this.state.userNameError} />
                                <InputField labelText='PASSWORD' inputType='password' addnClass='focusGreen' inputSize='lg' changeHandler={this.updateDetails} errorText={this.state.passwordError} />
                                <RememberMeForgotPassword />
                            </div>
                            <ButtonComponent validateAndNav={this.loginClicked} btnTile='Login' btnSize='lg' btnType='dark' style={{borderRadius:'40px', width: '140px'}} errorText={this.state.credentialsError} />
                        </form>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default LoginPage
