import React, { useState, useEffect } from 'react';
import { SharedAdvertCard } from '@ppm/shared/advert-card';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  advertsActions,
  advertsSelectors,
} from '@ppm/data-access/adverts-list';
import './features-adverts.scss';

export const FeaturesAdverts = () => {
  const dispatch = useDispatch();
  const advertsState = useSelector(advertsSelectors.selectAdvertsListState);
  const [loading, setLoading] = useState(true);
  const [adverts, setAdverts] = useState<
    {
      _id: string;
      title: string;
      description: string;
      // TODO: should be Date in shared component?
      createdAt: string;
      //TODO:
      // imgUrl: string;
      // likes: number;
      // shares: number;

      // TODO: first and last name should be separated
      creator: {
        _id: string;
        name: string;
        //TODO:
        //img: string
      };
    }[]
  >([]);

  useEffect(() => {
    dispatch(advertsActions.getAll());
  }, [dispatch]);

  useEffect(() => {
    if (!advertsState.loading) {
      setLoading(false);
      setAdverts(advertsState.list);
    } else {
      setLoading(true);
    }
  }, [advertsState]);

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
