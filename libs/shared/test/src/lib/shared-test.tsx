import React from 'react';

import './shared-test.scss';

/* eslint-disable-next-line */
export interface SharedTestProps {}

export const SharedTest = (props: SharedTestProps) => {
  return (
    <div>
      <h1 className="test-class">Welcome to shared-test!</h1>
    </div>
  );
};

export default SharedTest;
