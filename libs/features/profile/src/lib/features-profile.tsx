import React from 'react';
import { SharedUserProfileCard } from '@ppm/shared/user-profile-card';
import './features-profile.scss';

/* eslint-disable-next-line */
export interface FeaturesProfileProps {}

export const FeaturesProfile = (props: FeaturesProfileProps) => {
  return (
    <div>
      <SharedUserProfileCard />
    </div>
  );
};

export default FeaturesProfile;
