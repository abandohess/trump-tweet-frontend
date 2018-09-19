import React, { Component } from 'react';
// import Input from '@material-ui/core/Input';
import axios from 'axios';
import Button from '@material-ui/core/Button';

// export const ROOT_URL = 'https://cs52-blog-andy.herokuapp.com/api';
export const ROOT_URL = 'http://localhost:9090/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
    };
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
    this.onSubmitPhoneNumber = this.onSubmitPhoneNumber.bind(this);
  }

  onPhoneNumberChange(event) {
    this.setState({ phoneNumber: event.target.value });
  }

  onSubmitPhoneNumber() {
    axios.post(`${ROOT_URL}/users`, { phoneNumber: this.state.phoneNumber }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
      alert('Failed to sign up :( please try again)');
    });
  }

  render() {
    return (
      <div>
        <div className="header-background">
          <img src={require('../img/trump-icon.jpg')} alt="Trump" className="center-trump" />
          <p className="trump-subtitle">Gwumpy Twumpy</p>
        </div>

        <div className="sign-up-container">
          <input className="input-bar" placeholder="Enter Phone Number" onChange={this.onPhoneNumberChange} value={this.state.phoneNumber} />

          <Button variant="extendedFab" aria-label="Delete" className="sign-up-button" onClick={this.onSubmitPhoneNumber}>
          Sign Up
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
