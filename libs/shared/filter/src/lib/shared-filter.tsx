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

const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

export function SharedFilter(props: any) {
  const [data, setData] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: {
    rating?: string;
    topic?: string[];
    categories?: string[];
  }) => setData(JSON.stringify(data));

  console.log(data);

  return (
    <form onChange={handleSubmit(onSubmit)} className="filter-form">
      <div className="rating">
        <label>
          <input
            name="rating"
            type="radio"
            value="5"
            onChange={onChange}
            ref={register}
          />
          5 stars
        </label>
        <label>
          <input
            name="rating"
            type="radio"
            value="4"
            onChange={onChange}
            ref={register}
          />
          4 stars
        </label>
        <label>
          <input
            name="rating"
            type="radio"
            value="3"
            onChange={onChange}
            ref={register}
          />
          3 stars
        </label>
        <label>
          <input
            name="rating"
            type="radio"
            value="2"
            onChange={onChange}
            ref={register}
          />
          2 stars
        </label>
        <label>
          <input
            name="rating"
            type="radio"
            value="1"
            onChange={onChange}
            ref={register}
          />
          1 stars
        </label>
      </div>
      <div className="topic">
        <label>
          <input
            name="topic"
            type="checkbox"
            value="css"
            onChange={onChange}
            ref={register}
          />
          CSS
        </label>
        <br />
        <label>
          <input
            name="topic"
            type="checkbox"
            value="html"
            onChange={onChange}
            ref={register}
          />
          HTML
        </label>
        <label>
          <input
            name="topic"
            type="checkbox"
            value="javascript"
            onChange={onChange}
            ref={register}
          />
          Javascript
        </label>
        <label>
          <input
            name="topic"
            type="checkbox"
            value="php"
            onChange={onChange}
            ref={register}
          />
          PHP
        </label>
      </div>
      <br />
      <div className="categories">
        <label>
          <input
            name="categories"
            type="checkbox"
            value="web-development"
            onChange={onChange}
            ref={register}
          />
          Web development
        </label>
        <label>
          <input
            name="categories"
            type="checkbox"
            value="game-development"
            onChange={onChange}
            ref={register}
          />
          Game development
        </label>
        <label>
          <input
            name="categories"
            type="checkbox"
            value="programming-languages"
            onChange={onChange}
            ref={register}
          />
          Programming languages
        </label>
        <label>
          <input
            name="categories"
            type="checkbox"
            value="web-design"
            onChange={onChange}
            ref={register}
          />
          Web design
        </label>
      </div>
    </form>
  );
}

export default SharedFilter;
