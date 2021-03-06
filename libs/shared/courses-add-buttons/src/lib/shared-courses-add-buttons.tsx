import React, { useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import './shared-courses-add-buttons.module.scss';

/* eslint-disable-next-line */
export interface SharedCoursesAddButtonsProps {
  disabled: boolean;
  toggleDisabled?: () => void;
  openAddCourseDialog?: Function;
}

export function SharedCoursesAddButtons(props: SharedCoursesAddButtonsProps) {
  const [disabled, setDisabled] = useState(true);

  const toggleDisabled = () => {
    setDisabled((st) => !st);
  };

  return (
    <div className="inner-container">
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          className="margin-example"
          disabled={!disabled}
          onClick={() => props.openAddCourseDialog}
          variant="contained"
          color="primary"
        >
          Add Course
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

export default SharedCoursesAddButtons;
