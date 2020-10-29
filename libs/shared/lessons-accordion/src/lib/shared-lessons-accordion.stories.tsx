import { text } from '@storybook/addon-knobs';
import React from 'react';
import {
  SharedLessonsAccordion,
  SharedLessonsAccordionProps,
} from './shared-lessons-accordion';

export default {
  component: SharedLessonsAccordion,
  title: 'SharedLessonsAccordion',
};

let lessons = [
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  }
];
const accordionTitle = 'Lessons';

export const primary = () => {
  const props: SharedLessonsAccordionProps = {
    accordionTitle: text('Accordion Title', accordionTitle),
    lessonsDescription: text(
      'Lessons Description',
      'Are you ready to find out what all the hype is about with ReactJS? These ReactJS for beginners tutorials will bring you completely up to speed on the hottest JavaScript framework used on the web today.'
    ),
    lessons: lessons,

  };

  return (
    <SharedLessonsAccordion
      lessonsDescription={props.lessonsDescription}
      lessons={props.lessons}
      accordionTitle={props.accordionTitle}
    />
  );
};
