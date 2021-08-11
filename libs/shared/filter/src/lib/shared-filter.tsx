import React from 'react';
import {
  Accordion,
  RadioGroup,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControlLabel,
  Radio,
  Checkbox,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './shared-filter.module.scss';

// Defining a type
type Detail = {
  label: string;
  name: string;
};

// Defining an interface
interface SharedFilterProps {
  details?: Detail[];
  title?: string;
  type?: string;
}

export function SharedFilter(props: SharedFilterProps) {
  return (
    <form className="filter-form">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        {!!props.details &&
          props.details?.map((detail, i) => (
            <AccordionDetails key={i}>
              {props.type === 'checkbox' ? (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={false}
                      name={detail.label}
                      color="primary"
                    />
                  }
                  label={detail.label}
                />
              ) : (
                <RadioGroup>
                  <FormControlLabel
                    value={detail.name}
                    control={<Radio />}
                    label={detail.label}
                  />
                </RadioGroup>
              )}
            </AccordionDetails>
          ))}
      </Accordion>
    </form>
  );
}

export default SharedFilter;
