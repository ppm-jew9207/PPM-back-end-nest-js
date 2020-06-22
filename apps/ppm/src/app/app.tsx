import React from 'react';

import './app.scss';
import { SharedNavigation } from '@ppm/shared/navigation';
const callName = (id: string): void => {
  console.log(id);
};

const buttons = [
  {
    label: 'Home',
    path: '/',
    icon: 'Home',
    onClick: () => callName('home1'),
  },
  {
    label: 'Home2',
    path: '/',
    icon: 'Apps',
    onClick: () => callName('home2'),
  },
  {
    label: 'Home3',
    path: '/',
    icon: 'HomeWork',
    onClick: () => callName('home3'),
  },
  {
    label: 'Home4',
    path: '/',
    icon: 'Home',
    onClick: () => callName('home4'),
  },
];
export const App = () => {
  return (
    <div>
      <SharedNavigation buttons={buttons} />
    </div>
  );
};

export default App;
