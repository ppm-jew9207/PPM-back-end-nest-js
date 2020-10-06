import React from 'react';
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
  datime: string;
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
  action(lesson: Lesson): void;
}

export const LessonItem = (props: { lesson: Lesson; actions: Action[] }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const preventDefault = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <ListItem className="lesson" alignItems="flex-start">
      <div className="lesson__details">
        <Link className="lesson__title" href="#" onClick={preventDefault}>
          <Typography variant="h3">{props.lesson.title}</Typography>
        </Link>

        <address className="author lesson__text">
          By
          <a rel="author" href="#">
            {props.lesson.creator.name}
          </a>
        </address>
        <time className=" lesson__text" dateTime={props.lesson.datime}>
          {new Date(props.lesson.datime).toDateString()}
        </time>
        <span className=" lesson__text">2h30min</span>
      </div>
      <img className="lesson__image" src={props.lesson.imageUrl} />
      <Button
        variant="text"
        color="primary"
        aria-describedby={props.lesson._id}
        onClick={handleClick}
      >
        <Icon className="fas fa-plus-circle" color="secondary" />
      </Button>
      <Popover
        id={props.lesson._id}
        open={open}
        onClose={handleClose}
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
                item.action(props.lesson);
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
