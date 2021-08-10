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
  details: Detail[];
  title: string;
  type: string;
}
// Type casting unto value
const SharedFilterProps: SharedFilterProps[] = [
  {
    title: 'Ratings',
    type: 'radio',
    details: [
      { label: '5 star', name: 'html' },
      { label: '4 start', name: 'css' },
      { label: '3 start', name: 'webdevelopment' },
      { label: '2 start', name: 'react' },
      { label: '1 start', name: 'javascript' },
    ],
  },
  {
    title: 'Topic',
    type: 'checkbox',
    details: [
      { label: 'HTML', name: 'html' },
      { label: 'CSS', name: 'css' },
      { label: 'Web development', name: 'webdevelopment' },
      { label: 'React.js', name: 'react' },
      { label: 'Javascript', name: 'javascript' },
    ],
  },
  {
    title: 'Subcategory',
    type: 'checkbox',
    details: [
      { label: 'Web development', name: 'text1' },
      { label: 'Programming Languages', name: 'text1' },
      { label: 'Game development', name: 'text1' },
      { label: 'Web Design', name: 'text1' },
      { label: 'Software Testing', name: 'text1' },
    ],
  },
  {
    title: 'Level',
    type: 'checkbox',
    details: [
      { label: 'All Levels', name: 'text1' },
      { label: 'Beginner', name: 'text1' },
      { label: 'Intermediate', name: 'text1' },
      { label: 'Expert', name: 'text1' },
    ],
  },
  {
    title: 'Video Duration',
    type: 'checkbox',
    details: [
      { label: '0-1 hour', name: 'text1' },
      { label: '1-3 hours', name: 'text1' },
      { label: '3-6 hours', name: 'text1' },
      { label: '6-10 hours', name: 'text1' },
      { label: '10+ hours', name: 'text1' },
    ],
  },
];

export function SharedFilter(props: SharedFilterProps) {
  return (
    <form className="filter-form">
      {SharedFilterProps.map((filter, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{filter.title}</Typography>
          </AccordionSummary>
          {filter.details.map((detail, i) => (
            <AccordionDetails key={i}>
              {filter.type === 'checkbox' ? (
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
      ))}
    </form>
  );
}

export default SharedFilter;

// {
//   props.filterItems.map((filterItem, i) => (
//     <FormControlLabel
//       control={
//         <Checkbox checked={false} name={filterItem.name} color="primary" />
//       }
//       label={filterItem.label}
//     />
//   ));
// }
