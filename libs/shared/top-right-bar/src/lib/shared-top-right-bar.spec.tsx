import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SharedTopRightBar from './shared-top-right-bar';

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

describe(' SharedTopRightBar', () => {
  it('should render successfully', () => {
    const result = render(
      <Router>
        <SharedTopRightBar
          notifications={DataFromDB.notifications}
          settings={DataFromDB.settings}
          profile={DataFromDB.profile}
        />
      </Router>
    );
    expect(result).toBeTruthy();
  });
});
