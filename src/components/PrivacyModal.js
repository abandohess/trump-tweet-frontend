import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const PrivacyModal = () => (
  <Modal trigger={<Button id="privacy-policy" className="invisible">Privacy Policy</Button>} >
    <Modal.Header className="modal-header">Gwumpy Twumpy Privacy Policy</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p className="modal-text">We take your privacy just as seriously as Trump takes the presidency.</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default PrivacyModal;
