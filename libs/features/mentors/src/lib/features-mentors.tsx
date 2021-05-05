import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { mentorsActions, mentorsSelectors } from '@ppm/data-access/mentors';
import { useSelector, useDispatch } from 'react-redux';

import './features-mentors.scss';

/* eslint-disable-next-line */
export interface FeaturesMentorsProps {}

const stateSelector = createStructuredSelector({
  mentors: mentorsSelectors.selectMentors(),
});

export const FeaturesMentors = (props: FeaturesMentorsProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mentorsActions.getAll());
  }, []);

  return (
    <div>
      <h1>Welcome to features-mentors!</h1>
    </div>
  );
};

export default FeaturesMentors;
