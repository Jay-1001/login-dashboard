import React, { Component } from "react";
import './App.css';
import LoginPage from './Components/LoginComponent/LoginPage';
import DashboardPage from './Components/DashboardComponent/DashboardPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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

    return(
      <Router>
        <Switch>
          {/* { this.state.isLoggedIn &&  */}
          <Route
            path='/dashboard'
            render={(props) => (
              <DashboardPage {...props} isAuthorized={this.state.isLoggedIn} user={this.state.userName} logOutHandler={this.loggedOut} />
            )}
          />
          {/* } */}
          <Route
            path='/'
            render={(props) => (
              <LoginPage {...props} loggedInHandler={this.loggedIn} />
            )}
          />
        </Switch>
      </Router>
    )

    // switch(this.state.isLoggedIn) {
    //   case false:
    //     return <LoginPage loggedInHandler={this.loggedIn} />;
    //   case true:
    //     return <DashboardPage user={this.state.userName} logOutHandler={this.loggedOut}/>;
    //   default:
    //     return <LoginPage />;
    // }
  }
}

export default App;
