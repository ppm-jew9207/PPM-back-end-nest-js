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
import './shared-filter.module.scss';
import { useForm } from 'react-hook-form';

export interface FilterFormData {
  rating?: string;
  topic?: string[];
  categories?: string[];
}
interface SharedFilter {
  onSubmit: (queries: FilterFormData) => void;
}

export function SharedFilter(props: SharedFilter) {
  const { register, handleSubmit, errors, watch } = useForm();
  const [state, setstate] = useState(true);

  let data = watch();

  useEffect(() => {
    if (state) {
      onSubmit(data);
      setstate(false);
    }
  }, [data]);

  const onSubmit = (queries: FilterFormData) =>
    props.onSubmit({
      rating: queries.rating,
      topic: queries.topic,
      categories: queries.categories,
    });

  return (
    <div className="filter-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="rating"
          style={{
            borderTop: '1px solid lightgray',
            borderBottom: '1px solid lightgray',
          }}
        >
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: 'black' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontWeight: 600 }}>Rating</Typography>
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
        <div
          className="topic"
          style={{
            borderBottom: '1px solid lightgray',
          }}
        >
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: 'black' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontWeight: 600 }}>Topic</Typography>
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
        <div
          className="categories"
          style={{
            borderBottom: '1px solid lightgray',
            marginBottom: 15,
          }}
        >
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: 'black' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontWeight: 600 }}>Categories</Typography>
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
          Filter
        </Button>
      </form>
    </div>
  );
}

export default SharedFilter;
