// import React from 'react';

// import './app.scss';

// export const App = () => {
//   return <div></div>;
// };

// export default App;

import React from 'react';
import { SharedTopRightBar } from '@ppm/shared/top-right-bar';
import './app.scss';

const DataFromDB = {
  notifications: [
    {
      _id: 'sef65e56fgwe6g',
      title: 'Notification 1',
      path: '/somepath1',
      timeStamp: '2020-02-03',
      isRead: false,
    },
    {
      _id: 'sef65e56fgwe6g22',
      title: 'Notification 2',
      path: '/somepath2',
      timeStamp: '2020-02-03',
      isRead: false,
    },
  ],
  settings: { _id: '65ef5w6e4fw56', label: 'Some label', path: '/settings' },
  profile: { _id: '65ef5w6e4fw56', label: 'Marius', path: '/user-profile' },
};

export const App = () => {
  return <SharedTopRightBar dataFromDb={DataFromDB} />;
};

export default App;
