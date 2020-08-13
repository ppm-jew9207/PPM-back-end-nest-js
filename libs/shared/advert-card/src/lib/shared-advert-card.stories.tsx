import { number, text, object } from '@storybook/addon-knobs';
import React from 'react';
import { SharedAdvertCard, SharedAdvertCardProps } from './shared-advert-card';

export default {
  component: SharedAdvertCard,
  title: 'SharedAdvertCard',
};

export const primary = () => {
  const props: SharedAdvertCardProps = {
    title: text('title', ''),
    author: object('author', { _id: '', firstName: '', lastName: '', img: '' }),
    createAt: text('createAt', ''),
    description: text('description', ''),
    like: number('like', 0),
    shared: number('shared', 0),
    imgUrl: text('imgUrl', ''),
  };

  return (
    <SharedAdvertCard
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
