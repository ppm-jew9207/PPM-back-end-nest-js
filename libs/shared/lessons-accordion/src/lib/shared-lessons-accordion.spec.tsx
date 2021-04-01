import React from 'react';
import { render } from '@testing-library/react';

import SharedLessonsAccordion from './shared-lessons-accordion';

const lessons = [
  {
    _id: '60539cf9404cef2eac5dd6ae',
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    _id: '6053bf07404cef2eac5dd6af',
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
];

const lessonsDescription = 'Lessons Description';
const accordionTitle = 'Accordion Title';

describe('SharedLessonsAccordion', () => {
  it('should render successfully', () => {
    const result = render(
      <SharedLessonsAccordion
        lessonsDescription={lessonsDescription}
        lessons={lessons}
        accordionTitle={accordionTitle}
      />
    );
    expect(result).toBeTruthy();
  });
});
