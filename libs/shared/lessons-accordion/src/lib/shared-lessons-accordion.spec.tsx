import React from 'react';
import { render } from '@testing-library/react';

import SharedLessonsAccordion from './shared-lessons-accordion';

const lessons = [
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  }];

const lessonsDescription = 'Lessons Description';
const accordionTitle = 'Accordion Title';


describe('SharedLessonsAccordion', () => {
  it('should render successfully', () => {
    const result = render(
    <SharedLessonsAccordion 
      lessonsDescription={lessonsDescription}
      lessons={lessons}
      accordionTitle={accordionTitle}
    />);
    expect(result).toBeTruthy();
  });
});
