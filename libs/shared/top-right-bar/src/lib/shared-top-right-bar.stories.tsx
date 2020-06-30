import React from 'react';
import {
  SharedTopRightBar,
  SharedTopRightBarProps,
} from './shared-top-right-bar';

export default {
  component: SharedTopRightBar,
  title: 'SharedTopRightBar',
};

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

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedTopRightBarProps = {};

  return <SharedTopRightBar dataFromDb={DataFromDB} />;
};
