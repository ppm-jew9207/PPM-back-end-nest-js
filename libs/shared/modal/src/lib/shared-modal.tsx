import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import './shared-modal.scss';

export interface SharedModalProps {
  title: string;
  text: string;
}

export const SharedModal = (props: SharedModalProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className="paper">
            <h2 id="transition-modal-title">{props.title}</h2>

            <p id="transition-modal-description">{props.text}</p>
          </div>
        </Fade>
      </Modal>

      <div className="button-wrap">
        <div className="button-confirm">
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            Confirm
          </Button>
        </div>

        <div className="button-cancel">
          <Button type="button" variant="contained" color="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SharedModal;
