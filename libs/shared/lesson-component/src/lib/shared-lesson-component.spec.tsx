import React from 'react';
import { render } from '@testing-library/react';

import SharedLessonComponent from './shared-lesson-component';

const data = {
  onSubmit: () => jest.fn(),
  onCancel: () => jest.fn(),
  data: {
    title: 'Create/Edit Lesson',
    submitButtonText: 'Create/Edit',
    cancelButtonText: 'Cancel',
    resourcesInputLabel: 'Resources',
    connectionURLInputLabel: 'Connection URL',
    descriptionInputLabel: 'Description',
    datetimeInputLabel: 'Date and Time',
    titleInputLabel: 'New Lesson Title',
    mentorInputLabel: 'Select Mentor',
  },
  lesson: {
    mentorName: 'as3dg432zd',
    description: 'big description',
    resources: 'so much resources',
    imageUrl: 'https://placekitten.com/300/300',
    title: 'lesson title',
    connectionURL: 'https://placekitten.com/300/300',
    datetime: '2021-09-22T17:09',
    categories: [],
  },
  mentors: [
    { name: 'John Doe', value: 'John Doe', _id: 'as3dg432zd' },
    { name: 'Dohn Joe', value: 'Dohn Joe', _id: 'as33dg4432dz' },
    { name: 'Gohn Boe', value: 'Gohn Boe', _id: 'as3dg432zdbg' },
  ],
  categories: [],
};

describe(' SharedLessonComponent', () => {
  it('should render successfully', () => {
    const result = render(
    <SharedLessonComponent 
      {...data}
    />);
    expect(result).toBeTruthy();
  });
});
