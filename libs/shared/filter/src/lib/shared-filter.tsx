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
  // handleCheckboxChange?: () => void;
  // handleCheckboxChange?: () => void;
}

export function SharedFilter(props: SharedFilterProps) {
  const [value, setValue] = React.useState('');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };

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
                      name={detail.label}
                      value={detail.name}
                      color="primary"
                    />
                  }
                  label={detail.label}
                />
              ) : (
                <RadioGroup value={value} onChange={handleRadioChange}>
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
