import React, { useEffect, useState } from 'react';
import { SharedAdvertCard } from '@ppm/shared/advert-card';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStructuredSelector } from 'reselect';
import { advertsActions, advertsSelectors } from '@ppm/data-access/adverts';
import { likesActions } from '@ppm/data-access/likes';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';
// import { likesActions, likesSelectors } from '@ppm/data-access/likes';
import './features-adverts.scss';
import { LikeEnum } from 'libs/data-access/likes/src/lib/types';

const stateSelector = createStructuredSelector({
  adverts: advertsSelectors.selectAdverts(),
  loading: advertsSelectors.selectLoading(),
  profile: userProfileSelectors.selectUserProfile(),
});

export const FeaturesAdverts = () => {
  const dispatch = useDispatch();
  const { adverts, loading } = useSelector(stateSelector);
  const [advertsState, setAdvertsState] = useState([]);
  const { profile } = useSelector(stateSelector);

  const saveClick = (payload: any) => {
    const data = { callback: 'getAll', ...payload };
    dispatch(advertsActions.smallUpdate(data));
  };

  const likeClick = (advertId: string, type: string) => {
    dispatch(likesActions.create({ advert: advertId, type: type }));
    const clickedAdvert = advertsState.find((item) => item._id === advertId);
    const foundItem = clickedAdvert.likesList.findIndex(
      (item) => item.type === type && item.user === profile._id
    );
    if (foundItem !== -1) {
      clickedAdvert.likesList.splice(foundItem, 1);
    } else {
      clickedAdvert.likesList.push({
        advert: advertId,
        type: type,
        user: profile._id,
      });
    }
    setAdvertsState([...adverts]);
  };

  useEffect(() => {
    setAdvertsState(adverts);
  }, [adverts]);

  useEffect(() => {
    dispatch(userProfileActions.getUserProfile());
    dispatch(advertsActions.getAll());
  }, []);

  if (loading) return <CircularProgress />;

  if (!advertsState) return <div className="no-items">No adverts added...</div>;
  return (
    <div className="advert-cards">
      {advertsState.length &&
        advertsState.map((advert, index) => (
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
              like={
                advert.likesList
                  ? advert.likesList.filter(
                      (like: any) => like.type === LikeEnum.Like
                    ).length
                  : 0
              }
              shared={
                advert.likesList
                  ? advert.likesList.filter(
                      (like: any) => like.type === LikeEnum.Share
                    ).length
                  : 0
              }
              imgUrl={advert.imageUrl}
              onSaveClick={saveClick}
              editable={profile?._id === advert.creator._id}
              onLikeClick={() => likeClick(advert._id, LikeEnum.Like)}
              onSharedClick={() => likeClick(advert._id, LikeEnum.Share)}
            />
          </div>
        ))}
    </div>
  );
};

export default FeaturesAdverts;
