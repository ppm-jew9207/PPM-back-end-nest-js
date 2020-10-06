import React from 'react';
import { List } from '@material-ui/core';
import './shared-lessons.scss';
import LessonItem, { Action, Lesson } from './lesson-item/lesson-item';

/* eslint-disable-next-line */
export interface SharedLessonsProps {
  lessons: Lesson[];
  actions: Action[];
}

export const SharedLessons = (props: SharedLessonsProps) => {
  return (
    <List className="lessons">
      {props.lessons.map((lesson) => (
        <LessonItem key={lesson._id} lesson={lesson} actions={props.actions} />
      ))}
    </List>
  );
};

export default SharedLessons;
