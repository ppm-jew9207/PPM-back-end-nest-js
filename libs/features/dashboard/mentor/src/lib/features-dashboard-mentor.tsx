import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { advertsActions, advertsSelectors } from '@ppm/data-access/adverts';
import { SharedAdvertCard } from '@ppm/shared/advert-card';
import { FeaturesProfile } from '@ppm/features/profile';

import './features-dashboard-mentor.scss';

/* eslint-disable-next-line */
export interface FeaturesDashboardMentorProps {}

const stateSelector = createStructuredSelector({
  adverts: advertsSelectors.selectAdverts(),
  loading: advertsSelectors.selectLoading(),
});

export const FeaturesDashboardMentor = (
  props: FeaturesDashboardMentorProps
) => {
  const dispatch = useDispatch();
  const { adverts, loading } = useSelector(stateSelector);

  useEffect(() => {
    dispatch(advertsActions.getAllByAuthor());
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome to features-dashboard-mentor!</h1>
      <h2>User Profile</h2>
      <FeaturesProfile />
      <h2>Mentor adverts</h2>
      {adverts.map((advert, i) => {
        return (
          <SharedAdvertCard
            key={advert._id}
            title={advert.title}
            // TO DO improve author return from BE
            // Need: to split first and last name
            //       user does not have avatar
            author={{
              _id: advert.creator._id,
              firstName: advert.creator.name,
              lastName: '',
              img: 'https://via.placeholder.com/100',
            }}
            createAt={advert.createdAt}
            description={advert.description}
            // TODO add likes to backend
            like={25}
            // TODO add shares to backend
            shared={25}
            // TODO advert needs IMG too, also I think we should limit img size from component, maybe width 100% is bad idea
            imgUrl="https://via.placeholder.com/200"
          />
        );
      })}
    </div>
  );
};

export default FeaturesDashboardMentor;
