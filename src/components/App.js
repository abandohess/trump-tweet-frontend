import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

// export const ROOT_URL = 'https://cs52-blog-andy.herokuapp.com/api';
export const ROOT_URL = 'http://localhost:9090/api';

function isValidPhoneNumber(phoneNumber) {
  const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if ((phoneNumber.match(phoneno))) {
    return true;
  } else {
    alert('invalid phone number');
    return false;
  }
}

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
    if (!isValidPhoneNumber(this.state.phoneNumber)) return;
    axios.post(`${ROOT_URL}/users`, { phoneNumber: this.state.phoneNumber.replace(/\D/g, '') }).then((response) => {
      console.log(response);
      if (response.data === 'User already exists\n') {
        alert('User already exists');
      } else {
        alert('Successfully signed up phone number, ', this.state.phoneNumber);
      }
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
          <p className="trump-subsubtitle">When Trump tweets something grumpy, you‘ll be the first to know.</p>
        </div>

        <div className="sign-up-container">
          <p className="enter-text-label">Enter your phone number</p>
          <input className="input-bar" placeholder="xxx-xxx-xxxx" onChange={this.onPhoneNumberChange} value={this.state.phoneNumber} />

          <Button variant="extendedFab" aria-label="Delete" className="sign-up-button" onClick={this.onSubmitPhoneNumber}>
          Sign Up
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
