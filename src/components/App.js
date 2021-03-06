import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import PrivacyModal from './PrivacyModal';

// export const ROOT_URL = 'http://localhost:9090/api';
export const ROOT_URL = 'https://gwumpy-twumpy-backend.herokuapp.com/api';

function isValidPhoneNumber(phoneNumber) {
  const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if ((phoneNumber.match(phoneno))) {
    return true;
  } if (phoneNumber.replace(/\D/g, '').length !== 10) {
    alert('Your phone number must have 10 digits.');
  } else {
    alert('invalid phone number');
  }
  return false;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
    };
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
    this.onSubmitPhoneNumber = this.onSubmitPhoneNumber.bind(this);
    this.onDeletePhoneNumber = this.onDeletePhoneNumber.bind(this);
    // this.showModal = this.showModal.bind(this);
  }

  onPhoneNumberChange(event) {
    this.setState({ phoneNumber: event.target.value });
  }

  onSubmitPhoneNumber() {
    if (!isValidPhoneNumber(this.state.phoneNumber)) return;
    axios.post(`${ROOT_URL}/users`, { phoneNumber: this.state.phoneNumber.replace(/\D/g, '') }).then((response) => {
      console.log(response);
      if (response.status === 201) {
        alert('User already exists');
      } else {
        alert('Successfully signed up phone number', this.state.phoneNumber);
      }
    }).catch((error) => {
      console.log(error);
      alert('Failed to sign up :( please try again)');
    });
  }

  onDeletePhoneNumber() {
    if (!isValidPhoneNumber(this.state.phoneNumber)) return;
    axios.delete(`${ROOT_URL}/users`, { data: { phoneNumber: this.state.phoneNumber.replace(/\D/g, '') } }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        alert('Successfully deleted phone number');
      } else {
        alert('Failed to delete phone number, ', this.state.phoneNumber);
      }
    }).catch((error) => {
      console.log(error);
      alert('Failed to delete phone number :( please try again)');
    });
  }

  // showModal() {
  //   document.getElementById('privacy-policy').click();
  // }

  render() {
    return (
      <div>
        <PrivacyModal className="top-aligned" />
        <div className="header-background">
          <img src={require('../img/trump-icon.jpg')} alt="Trump" className="center-trump" />
          <p className="trump-subtitle">Gwumpy Twumpy</p>
          <p className="trump-subsubtitle">When Trump tweets something grumpy, you‘ll be the first to know.</p>
        </div>

        <div className="sign-up-container">
          <p className="enter-text-label">Enter your phone number</p>
          <input className="input-bar" placeholder="xxx-xxx-xxxx" onChange={this.onPhoneNumberChange} value={this.state.phoneNumber} />

          <div className="button-container">
            <Button variant="extendedFab" aria-label="Delete" className="sign-up-button" onClick={this.onSubmitPhoneNumber}>
              <span style={{ display: 'inline-block', width: 11 }} />Subscribe<span style={{ display: 'inline-block', width: 11 }} />
            </Button>
            <Button variant="extendedFab" aria-label="Delete" className="unsubscribe-button" onClick={this.onDeletePhoneNumber}>
              Unsubscribe
            </Button>
          </div>
        </div>
        <hr className="divider" />

        <div className="footer-container">
          <a href="#" id="privacy-policy-link" className="footer-link" >Privacy Policy</a>
          <a href="https://github.com/abandohess/twump-tweet-server" className="footer-link">Github</a>
        </div>

      </div>
    );
  }
}

export default App;
