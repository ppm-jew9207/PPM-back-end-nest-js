import React from 'react';
import { SharedProfileForm } from '@ppm/shared/profile-form';
import './app.scss';

export const App = () => {
  return (
    <div>
      <SharedProfileForm onSubmit={(e) => console.log(e)} />
    </div>
  );
};

export default App;
