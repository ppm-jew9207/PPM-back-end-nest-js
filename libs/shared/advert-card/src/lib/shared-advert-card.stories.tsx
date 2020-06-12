import { number, text } from '@storybook/addon-knobs';
import React from 'react';
import { SharedAdvertCard, SharedAdvertCardProps } from './shared-advert-card';

export default {
  component: SharedAdvertCard,
  title: 'SharedAdvertCard',
};

export const primary = () => {
  const props: SharedAdvertCardProps = {
    title: text('title', ''),
    author: text('author', ''),
    timeStamp: number('timeStamp', 0),
    description: text('description', ''),
    like: number('like', 0),
    shared: number('shared', 0),
    imgUrl: text('imgUrl', ''),
  };

  return (
    <SharedAdvertCard
      title={props.title}
      author={props.author}
      timeStamp={props.timeStamp}
      description={props.description}
      like={props.like}
      shared={props.shared}
      imgUrl={props.imgUrl}
    />
  );
};
