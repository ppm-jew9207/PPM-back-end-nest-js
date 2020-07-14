import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './shared-modal.scss';

/* eslint-disable-next-line */
export interface SharedModalProps {}

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
      <button type="button" onClick={handleOpen}>
        Modal Button
      </button>

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
            <h2 id="transition-modal-title">Title</h2>

            <p id="transition-modal-description">Text</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default SharedModal;
