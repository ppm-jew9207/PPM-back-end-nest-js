import React from 'react';

import {
  List,
  ListItem,
  Icon,
  Popover,
  Button,
  ButtonGroup,
  Link,
} from '@material-ui/core';

import './shared-lessons.scss';

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
  action?(lesson: Lesson): void;
}

const LessonItem = (lesson: Lesson, actions: Action[]) => {
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

  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <ListItem className="lesson" alignItems="flex-start">
      <div className="lesson__details">
        <Link className="lesson__title" href="#" onClick={preventDefault}>
          <h3>{lesson.title}</h3>
        </Link>

        <address className="author lesson__text">
          By
          <a rel="author" href="#">
            {lesson.creator.name}
          </a>
        </address>
        <time className=" lesson__text" dateTime={lesson.datime}>
          {new Date(lesson.datime).toDateString()}
        </time>
        <span className=" lesson__text">2h30min</span>
      </div>
      <img className="lesson__image" src={lesson.imageUrl} />
      <Button
        variant="text"
        color="primary"
        aria-describedby={lesson._id}
        onClick={handleClick}
      >
        <Icon className="fas fa-plus-circle" color="secondary" />
      </Button>
      <Popover
        id={lesson._id}
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
          {/* {.map((item) => {
            JSON.stringify(item);
            // <Button>{item.title}</Button>;
          })} */}

          <Button>Add to calendar</Button>
          <Button>Remove</Button>
        </ButtonGroup>
      </Popover>
    </ListItem>
  );
};

/* eslint-disable-next-line */
export interface SharedLessonsProps {
  lessons: Lesson[];
  actions: Action[];
}

export const SharedLessons = (props: SharedLessonsProps) => {
  return (
    <List className="lessons">
      {props.lessons.map((lesson) => {
        <div key={lesson._id}>
          <LessonItem lesson={lesson} actions={props.actions} />
        </div>;
      })}
    </List>
  );
};

export default SharedLessons;
