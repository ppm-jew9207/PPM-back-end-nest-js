import React from 'react';
import { SharedInfoCard } from '@ppm/shared/info-card';
import './app.scss';

export const App = () => {
  return (
    <SharedInfoCard
      title="Title"
      fields={[
        { label: 'Label1', value: 'Value1' },
        { label: 'Label2', value: 'Value2' },
      ]}
    />
  );
};

export default App;
