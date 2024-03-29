import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SharedCourseList from './shared-course-list';

describe('SharedCourseList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <SharedCourseList
          editable={false}
          id={'sadsadsadsafgghg'}
          title={'Name'}
          categories={[]}
          author={{
            _id: '1',
            firstName: 'Name',
            lastName: 'Surname',
            img: 'https://placekitten.com/300/300',
          }}
          createAt={'2020-08-18'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
          like={30}
          shared={30}
          imgUrl={'https://placekitten.com/300/300'}
        />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
