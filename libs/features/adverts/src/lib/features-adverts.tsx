import React, { useEffect } from 'react';
import { SharedAdvertCard } from '@ppm/shared/advert-card';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStructuredSelector } from 'reselect';
import { advertsActions, advertsSelectors } from '@ppm/data-access/adverts';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';
import './features-adverts.scss';

const stateSelector = createStructuredSelector({
  adverts: advertsSelectors.selectAdverts(),
  loading: advertsSelectors.selectLoading(),
  profile: userProfileSelectors.selectUserProfile(),
});

export const FeaturesAdverts = () => {
  const dispatch = useDispatch();
  const { adverts, loading } = useSelector(stateSelector);
  const { profile } = useSelector(stateSelector);

  const saveClick = (payload: any) => {
    const data = { callback: 'getAll', ...payload };
    dispatch(advertsActions.smallUpdate(data));
  };

  useEffect(() => {
    dispatch(userProfileActions.getUserProfile());
    dispatch(advertsActions.getAll());
  }, []);

  if (loading) return <CircularProgress />;

  if (!adverts) return <div className="no-items">No adverts added...</div>;

  return (
    <div className="advert-cards">
      {adverts.map((advert) => (
        <div key={advert._id}>
          <SharedAdvertCard
            id={advert._id}
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
            onSaveClick={saveClick}
            editable={profile?._id === advert.creator._id}
          />
          
        </div>
      ))}
    </div>
  );
};

export default FeaturesAdverts;
