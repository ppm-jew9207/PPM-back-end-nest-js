import React, { useState, MouseEvent, SyntheticEvent } from 'react';
import moment from 'moment';
import {
  Typography,
  ListItem,
  Icon,
  Popover,
  Button,
  ButtonGroup,
  Link,
} from '@material-ui/core';

import './lesson-item.scss';

export interface Lesson {
  _id: string;
  title: string;
  datetime: string;
  creator?: {
    _id: string;
    name: string;
    imageUrl?: string;
  };
  imageUrl: string;
  description: string;
}

export interface Action {
  title: string;
  onAction: (lesson: Lesson) => void;
}

export const LessonItem = (props: { lesson: Lesson; actions: Action[] }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);

  return (
    <ListItem className="lesson" alignItems="flex-start">
      <div className="lesson__details">
        <Link className="lesson__title" href="#">
          <Typography variant="h3">{props.lesson.title}</Typography>
        </Link>

        <address className="author lesson__text">
          By
          <Link rel="author" href="#">
            {props.lesson.creator.name}
          </Link>
        </address>
        <time className=" lesson__text" dateTime={props.lesson.datetime}>
          {moment(props.lesson.datetime).format('LLL')}
        </time>
        <span className=" lesson__text">2h30min</span>
      </div>
      <img className="lesson__image" src={props.lesson.imageUrl} />
      <Button
        variant="text"
        color="primary"
        aria-describedby={props.lesson._id}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <Icon className="fas fa-plus-circle" color="secondary" />
      </Button>
      <Popover
        id={props.lesson._id}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
        >
          {props.actions.map((item) => (
            <Button
              onClick={() => {
                item.onAction(props.lesson);
              }}
            >
              {item.title}
            </Button>
          ))}
        </ButtonGroup>
      </Popover>
    </ListItem>
  );
};

export default LessonItem;
