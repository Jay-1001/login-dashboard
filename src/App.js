import React, { Component } from "react";
import './App.css';
import LoginPage from './Components/LoginPage';
import DashboardPage from './Components/DashboardPage';

class App extends Component {
  state = {
    isLoggedIn: false,
    userName: ''
  };

  loggedIn = (userNameFromLogin) => {
    this.setState({
      isLoggedIn: true,
      userName: userNameFromLogin
    });
  };

  loggedOut = () => {
    this.setState({
      isLoggedIn: false,
      userName: ''
    });
  };

  render() {
    // return (
    // <div>
    //   <LoginPage />
    //   {/* <DashboardPage /> */}
    // </div>)
    // <div>
    switch(this.state.isLoggedIn) {
      case false:
        return <LoginPage loggedInHandler={this.loggedIn} />;
      case true:
        return <DashboardPage user={this.state.userName} logOutHandler={this.loggedOut}/>;
      default:
        return <LoginPage />;
    }
    {/* </div> */}
  }
}

export default App;
