import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

const PrivacyModal = () => (
  <Modal trigger={<Button id="privacy-policy" className="invisible">Privacy Policy</Button>} >
    <Modal.Header>Gwumpy Twumpy Privacy Policy</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>We take your privacy just as seriously as Trump takes the presidency.</Header>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default PrivacyModal;
