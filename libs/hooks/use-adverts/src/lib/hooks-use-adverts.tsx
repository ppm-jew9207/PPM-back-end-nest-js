import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { advertsActions, advertsSelectors } from '@ppm/data-access/adverts';

const stateSelector = createStructuredSelector({
  advert: advertsSelectors.selectAdvert(),
  loading: advertsSelectors.selectLoading(),
});

export function useAdverts(id) {
  const dispatch = useDispatch();
  const { advert, loading } = useSelector(stateSelector);

  const getAdvertById = (id: string) => {
    dispatch(advertsActions.getById(id));
  };

  useEffect(() => {
    getAdvertById(id);
  }, []);

  /*
  TODO: add functionality
  */
  const onGetStartedClick = () => {
    alert('paspaudei');
  };

  return { getAdvertById, advert, loading, onGetStartedClick };
}
