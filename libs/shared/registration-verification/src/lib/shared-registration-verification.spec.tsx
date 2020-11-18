import React from 'react';
import { render } from '@testing-library/react';

import SharedRegistrationVerification from './shared-registration-verification';

const code = 'Input text';
const informationTitle = 'A verification code has been sent to your registration email';

describe(' SharedRegistrationVerification', () => {
  it('should render successfully', () => {
    const result = render(
    <SharedRegistrationVerification
      code={code}
      informationTitle={informationTitle}
      onSubmit={(e) => console.log(e)}
      onCancel={() => console.log('void')}
      resendVerification={() => console.log('void')}
    />);
    expect(result).toBeTruthy();
  });
});
