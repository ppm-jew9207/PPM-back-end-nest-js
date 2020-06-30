// import React from 'react';

// import './app.scss';

// export const App = () => {
//   return <div></div>;
// };

// export default App;

import React from 'react';
import { SharedTopRightBar } from '@ppm/shared/top-right-bar';
import { SharedTopMenuButton } from '@ppm/shared/top-menu-button';
import './app.scss';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

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
  return <SharedTopRightBar dataFromDb={DataFromDB} >
      <SharedTopMenuButton items={[{
        _id: 'string;',
        title: 'string;',
        path: 'string;',
        timeStamp: 'string;',
        isRead: true
      }]}>
        <Badge badgeContent={10} color="secondary">
          <NotificationsIcon />
        </Badge>
      </SharedTopMenuButton>
  </SharedTopRightBar>;
};

export default App;
