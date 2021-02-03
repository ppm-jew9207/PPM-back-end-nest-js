import React, { useEffect, useState } from 'react';
import { useHistory, RouteComponentProps, RouteProps } from 'react-router-dom';
import {
  SharedCreateAdvertForm,
  AdvertData,
  SharedCreateAdvertFormProps,
} from '@ppm/shared/create-advert-form';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { advertsActions, advertsSelectors } from '@ppm/data-access/adverts';
import {
  categoriesSelectors,
  categoriesActions,
} from '@ppm/data-access/categories';
import './features-advert-form.scss';
import { PrivateRoutesPath } from '@ppm/common/main';
import { CircularProgress } from '@material-ui/core';
interface RouteInfo extends RouteProps {
  params: {
    id: string;
  };
  path?: string | string[];
}

const stateSelector = createStructuredSelector({
  adverts: advertsSelectors.selectAdverts(),
  advert: advertsSelectors.selectAdvert(),
  loading: advertsSelectors.selectLoading(),
  categories: categoriesSelectors.selectCategories(),
});

export const FeaturesAdvertForm = (props: RouteComponentProps<RouteInfo>) => {
  const dispatch = useDispatch();
  const { categories, advert, loading } = useSelector(stateSelector);
  const redirect = () => history.push(`/${PrivateRoutesPath.ADVERTS}`);

  const history = useHistory();

  const create = (data: AdvertData) => {
    dispatch(advertsActions.update(data));
    redirect();
  };

  const update = (data: AdvertData) => {
    data.id = advert._id;
    if (data.advertImage.length) {
      dispatch(advertsActions.update(data));
      redirect();
    } else {
      dispatch(advertsActions.update({ ...data, imageUrl: advert.imageUrl }));
      redirect();
    }
  };

  const createContent = {
    onSubmit: create,
    onCancel: redirect,
    data: {
      ...advert,
      advertImage: advert?.FileList,
    },
    categories: categories,
    advert,
  };

  const editContent = {
    onSubmit: update,
    onCancel: redirect,
    data: {
     ...advert,
      advertImage: advert?.FileList,
    },
    categories: categories,
    advert,
  };

  const [content, setContent] = useState<SharedCreateAdvertFormProps>(createContent);

  useEffect(() => {
    props.match.path ===
      `/${PrivateRoutesPath.ADVERTS}${PrivateRoutesPath.GET_BY_ID}/edit` &&
      dispatch(advertsActions.getById(props.match.params.id));
    dispatch(categoriesActions.getAll());
  }, []);

  useEffect(() => {
    advert
      ? setContent(editContent)
      : setContent(createContent);
  }, [editContent, createContent]);

  if (loading) return <CircularProgress />;

  return (
    <div>
      <SharedCreateAdvertForm {...content} />
    </div>
  );
};

export default FeaturesAdvertForm;
