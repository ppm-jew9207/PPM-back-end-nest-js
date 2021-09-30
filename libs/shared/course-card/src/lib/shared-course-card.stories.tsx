import { number, text, object } from '@storybook/addon-knobs';
import React from 'react';
import { SharedCourseCard, SharedCourseCardProps } from './shared-course-card';

export default {
  component: SharedCourseCard,
  title: 'SharedCourseCard',
};

export const primary = () => {
  const props: SharedCourseCardProps = {
    id: 'sadsadsadsafgghg',
    title: text('title', 'Title'),
    author: object('author', {
      _id: '1',
      firstName: 'Name',
      lastName: 'Surname',
      img: 'https://placekitten.com/300/300',
    }),
    createAt: text('createAt', '2020-08-18'),
    description: text(
      'description',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ),
    like: number('like', 30),
    shared: number('shared', 60),
    imgUrl: text('imgUrl', 'https://placekitten.com/600/600'),
  };

  return (
    <SharedCourseCard
      editable={props.editable}
      id={props.id}
      title={props.title}
      author={props.author}
      createAt={props.createAt}
      description={props.description}
      like={props.like}
      shared={props.shared}
      imgUrl={props.imgUrl}
    />
  );
};
