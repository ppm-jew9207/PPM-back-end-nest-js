import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { advertsActions, advertsSelectors } from '@ppm/data-access/adverts';
import { SharedAdvertCard } from '@ppm/shared/advert-card';

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
    <div className="advert-cards">
      {adverts.map((advert, i) => {
        return (
          <SharedAdvertCard
            key={advert._id}
            title={advert.title}
            author={{
              _id: advert.creator._id,
              firstName: advert.creator.name,
              lastName: '',
              img: advert.creator.imageUrl,
            }}
            createAt={advert.createdAt}
            description={advert.description}
            // TODO add likes to backend
            like={0}
            // TODO add shares to backend
            shared={0}
            imgUrl={advert.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default FeaturesDashboardMentor;
