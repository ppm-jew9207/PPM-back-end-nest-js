import React, { useEffect, useState } from 'react';
import { useHistory, RouteComponentProps, RouteProps } from 'react-router-dom';
import {
  SharedCreateAdvertForm,
  AdvertData,
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

  const create = async (data) => {
    dispatch(advertsActions.update(data));
    redirect();
  };

  const update = async (data: AdvertData) => {
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
      title: 'New advert',
      submitButtonText: 'Create',
      descriptionInputLabel: 'Description',
      titleInputLabel: 'Title',
      categoryInputLabel: 'Category',
      cancelButtonText: 'Cancel',
    },
    categories,
  };

  const editContent = {
    onSubmit: update,
    onCancel: redirect,
    data: {
      title: 'Edit advert',
      submitButtonText: 'Update',
      descriptionInputLabel: 'Description',
      titleInputLabel: 'Title',
      categoryInputLabel: 'Category',
      cancelButtonText: 'Cancel',
    },
    categories: categories,
    advert,
  };

  const [content, setContent] = useState(createContent);

  useEffect(() => {
    props.match.path ===
      `/${PrivateRoutesPath.ADVERTS}${PrivateRoutesPath.GET_BY_ID}/edit` &&
      dispatch(advertsActions.getById(props.match.params.id));
    dispatch(categoriesActions.getAll());
  }, []);

  useEffect(() => {
    advert && !!advert._id
      ? setContent(editContent)
      : setContent(createContent);
  }, [advert, categories]);

  if (loading) return <CircularProgress />;

  return (
    <div>
      <SharedCreateAdvertForm {...content} />
    </div>
  );
};

export default FeaturesAdvertForm;
