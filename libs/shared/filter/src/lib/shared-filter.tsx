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

type Detail = {
  label: string;
  name: string;
};
interface SharedFilterProps {
  details?: Detail[];
  title?: string;
  type?: string;
}

export function SharedFilter(props: SharedFilterProps) {
  const [value, setValue] = React.useState('');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };

  return (
    <form className="filter-form">
      <Accordion elevation={2} square={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontWeight: 'bold' }}>{props.title}</Typography>
        </AccordionSummary>
        {!!props.details &&
          props.details?.map((detail, i) => (
            <AccordionDetails style={{ padding: '0px 16px 0px' }} key={i}>
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
                    control={<Radio color="primary" />}
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
