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
  onChange: (queries: FilterFormData) => void;
}

export function SharedFilter(props: SharedFilter) {
  const { register, handleSubmit, errors, watch } = useForm();
  const [state, setstate] = useState(true);

  let data = watch();

  // useEffect(() => {
  //   if (state) {
  //     onSubmit(data);
  //     setstate(false);
  //   }
  // }, [data]);

  // const onSubmit = (queries: FilterFormData) =>
  //   props.onChange({
  //     rating: queries.rating,
  //     topic: queries.topic,
  //     categories: queries.categories,
  //   });

  return (
    <form className="filter-form">
      <div className="rating">
        <Accordion>
          <AccordionSummary>
            <Typography>Rating</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ display: 'inline-grid', padding: '0px 12px 0px' }}
          >
            <label>
              <input name="rating" type="radio" value="5" ref={register} />5
              stars
            </label>
            <label>
              <input name="rating" type="radio" value="4" ref={register} />4
              stars
            </label>
            <label>
              <input name="rating" type="radio" value="3" ref={register} />3
              stars
            </label>
            <label>
              <input name="rating" type="radio" value="2" ref={register} />2
              stars
            </label>
            <label>
              <input name="rating" type="radio" value="1" ref={register} />1
              stars
            </label>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="topic">
        <Accordion>
          <AccordionSummary>
            <Typography>Topic</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ display: 'inline-grid', padding: '0px 12px 0px' }}
          >
            <label>
              <input name="topic" type="checkbox" value="css" ref={register} />
              CSS
            </label>
            <label>
              <input name="topic" type="checkbox" value="html" ref={register} />
              HTML
            </label>
            <label>
              <input
                name="topic"
                type="checkbox"
                value="javascript"
                ref={register}
              />
              Javascript
            </label>
            <label>
              <input name="topic" type="checkbox" value="php" ref={register} />
              PHP
            </label>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="categories">
        <Accordion>
          <AccordionSummary>
            <Typography>Categories</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ display: 'inline-grid', padding: '0px 12px 0px' }}
          >
            <label>
              <input
                name="categories"
                type="checkbox"
                value="6000906c9d822649dbab00ad"
                ref={register}
              />
              Web development
            </label>
            <label>
              <input
                name="categories"
                type="checkbox"
                value="6000908f9d822649dbab00ae"
                ref={register}
              />
              Game development
            </label>
            <label>
              <input
                name="categories"
                type="checkbox"
                value="programming-languages"
                ref={register}
              />
              Programming languages
            </label>
            <label>
              <input
                name="categories"
                type="checkbox"
                value="web-design"
                ref={register}
              />
              Web design
            </label>
          </AccordionDetails>
        </Accordion>
      </div>
    </form>
  );
}

export default SharedFilter;
