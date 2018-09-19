import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style.scss';

ReactDOM.render(
  <App />
  , document.getElementById('main'),
);

$('#privacy-policy-link').on('click', () => {
  document.getElementById('privacy-policy').click();
});
