import React, { useState, useEffect } from 'react';
import { SharedAdvertCard } from '@ppm/shared/advert-card';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStructuredSelector } from 'reselect';
import {
  advertsActions,
  advertsSelectors,
} from '@ppm/data-access/adverts-list';
import './features-adverts.scss';

const stateSelector = createStructuredSelector({
  adverts: advertsSelectors.selectAdverts(),
  loading: advertsSelectors.selectLoading(),
});

export const FeaturesAdverts = () => {
  const dispatch = useDispatch();
  const { adverts, loading } = useSelector(stateSelector);

  console.log(adverts);
  useEffect(() => {
    dispatch(advertsActions.getAll());
  }, [dispatch]);
  if (loading) return <CircularProgress />;

  return (
    <div>
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

export default FeaturesAdverts;
