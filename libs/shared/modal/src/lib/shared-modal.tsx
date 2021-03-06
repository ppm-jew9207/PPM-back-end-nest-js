import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import './shared-modal.scss';

export interface SharedModal {
  isOpen: boolean;
  isConfirmed: boolean;
}

export interface SharedModalProps {
  title: string;
  text: string;
  submit: (data: SharedModal) => void;
  isModal: boolean;
  isConfirmed: boolean;
}

export const SharedModal = (props: SharedModalProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(props.isModal);
  }, []);

  useEffect(() => {
    setOpen(props.isModal);
  }, [props]);

  const handleToggle = (bool: boolean) => {
    props.submit({ isOpen: bool, isConfirmed: bool });
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className="paper">
            <h2 id="transition-modal-title">{props.title}</h2>

            <p id="transition-modal-description">{props.text}</p>

            <div className="button-wrap">
              <div className="button-confirm">
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  onClick={() => handleToggle(false)}
                >
                  Confirm
                </Button>
              </div>

              <div className="button-cancel">
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  onClick={() => handleToggle(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default SharedModal;
