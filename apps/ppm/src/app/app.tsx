import React from 'react';
import './app.scss';

import { SharedRegistrationVerification } from '@ppm/shared/registration-verification';
const consoleLog = () => console.log('Veikia');
const data = {
  code: '',
};
const sendCode = (data) => {
  console.log(data);
};

export const App = () => {
  return (
    <div>
      <SharedRegistrationVerification
        onSubmit={sendCode(data)}
        onCancel={consoleLog}
        resendVerification={consoleLog}
      />
    </div>
  );
};

export default App;
