import React from 'react';
import { SharedInfoCard } from '@ppm/shared/info-card';
import './app.scss';

export const App = () => {
  return (
    <SharedInfoCard
      title="Title"
      fields={[{ label: 'Label', value: 'Value' }]}
    />
  );
};

export default App;
