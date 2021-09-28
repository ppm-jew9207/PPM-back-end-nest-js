import React, { useState, useEffect } from 'react';
import {
  Accordion,
  RadioGroup,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  Button,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useForm } from 'react-hook-form';
import './shared-filter.scss';

export interface FilterFormData {
  rating?: string;
  topic?: string[];
  categories?: string[];
}
interface SharedFilter {
  onSubmit: (queries: FilterFormData) => void;
}

export function SharedFilter(props: SharedFilter) {
  const { register, handleSubmit, errors } = useForm();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const onSubmit = (queries: FilterFormData) => {
    props.onSubmit({
      rating: queries.rating,
      topic: queries.topic,
      categories: queries.categories,
    }),
      console.log(queries);
  };

  return (
    <div className="filter-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rating">
          <Accordion
            elevation={0}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="arrow-down" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-label">Rating</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup>
                <FormControlLabel
                  value="5"
                  name="rating"
                  inputRef={register}
                  control={<Radio color="primary" />}
                  label="5 stars"
                />
                <FormControlLabel
                  value="4"
                  name="rating"
                  inputRef={register}
                  control={<Radio color="primary" />}
                  label="4 stars"
                />
                <FormControlLabel
                  value="3"
                  name="rating"
                  inputRef={register}
                  control={<Radio color="primary" />}
                  label="3 stars"
                />
                <FormControlLabel
                  value="2"
                  name="rating"
                  inputRef={register}
                  control={<Radio color="primary" />}
                  label="2 stars"
                />
                <FormControlLabel
                  value="1"
                  name="rating"
                  inputRef={register}
                  control={<Radio color="primary" />}
                  label="1 star"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="topic">
          <Accordion
            elevation={0}
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="arrow-down" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="accordion-label">Topic</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  value="css"
                  inputRef={register}
                  name="topic"
                  control={<Checkbox color="primary" />}
                  label="CSS"
                ></FormControlLabel>
                <FormControlLabel
                  value="html"
                  inputRef={register}
                  name="topic"
                  control={<Checkbox color="primary" />}
                  label="HTML"
                ></FormControlLabel>
                <FormControlLabel
                  value="javascript"
                  inputRef={register}
                  name="topic"
                  control={<Checkbox color="primary" />}
                  label="Javascript"
                ></FormControlLabel>
                <FormControlLabel
                  value="php"
                  inputRef={register}
                  name="topic"
                  control={<Checkbox color="primary" />}
                  label="PHP"
                ></FormControlLabel>
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="categories">
          <Accordion
            elevation={0}
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="arrow-down" />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className="accordion-label">Categories</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  value="6000906c9d822649dbab00ad"
                  inputRef={register}
                  name="categories"
                  control={<Checkbox color="primary" />}
                  label="Web development"
                ></FormControlLabel>
                <FormControlLabel
                  value="6000908f9d822649dbab00ae"
                  inputRef={register}
                  name="categories"
                  control={<Checkbox color="primary" />}
                  label="Game development"
                ></FormControlLabel>
                <FormControlLabel
                  value="programming-languages"
                  inputRef={register}
                  name="categories"
                  control={<Checkbox color="primary" />}
                  label="Programming languages"
                ></FormControlLabel>
                <FormControlLabel
                  value="web-design"
                  inputRef={register}
                  name="categories"
                  control={<Checkbox color="primary" />}
                  label="Web Design"
                ></FormControlLabel>
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </div>

        <Button
          disableTouchRipple
          fullWidth={true}
          variant="outlined"
          type="submit"
          color="primary"
        >
          Use filter
        </Button>
      </form>
    </div>
  );
}

export default SharedFilter;
