import React from 'react';
import { SharedAdvertCard } from '@ppm/shared/advert-card';
import './app.scss';

const authorObj = {
  _id: '1',
  firstName: 'Marius',
  lastName: 'Mariakinas',
  img:
    'https://cdn.thecoachingmanual.com/front_end_technical_test_assets/avatar_1.jpg',
};

export const App = () => {
  return (
    <SharedAdvertCard
      title="Title"
      author={authorObj}
      timeStamp={44}
      description="This is Description"
      like={3}
      shared={5}
      imgUrl="https://images.unsplash.com/photo-1591268557714-1b58f58e89cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
    />
  );
};

export default App;
