import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import './shared-adverts-add-buttons.module.scss';

/* eslint-disable-next-line */
export interface SharedAdvertsAddButtonsProps {
  disabled: boolean;
  toggleDisabled?: () => void;
}

export function SharedAdvertsAddButtons(props: SharedAdvertsAddButtonsProps) {
  const [disabled, setDisabled] = React.useState(true);
  const toggleDisabled = () => {
    setDisabled((st) => !st);
  };
  return (
    <div className="inner-container">
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          className="margin-example"
          disabled={!disabled}
          onClick={toggleDisabled}
          variant="contained"
          color="primary"
        >
          Add Advert
        </Button>
        <Button
          className="margin-example"
          disabled={disabled}
          onClick={toggleDisabled}
          variant="contained"
          color="primary"
        >
          Cancel
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default SharedAdvertsAddButtons;
