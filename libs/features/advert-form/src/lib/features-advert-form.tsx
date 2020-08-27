import React, { useEffect } from 'react';
import { postFormData } from '@ppm/data-access/http-requests';
import {
  SharedCreateAdvertForm,
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

export interface FeaturesAdvertFormProps {
  match: any;
}

const stateSelector = createStructuredSelector({
  adverts: advertsSelectors.selectAdverts(),
  advert: advertsSelectors.selectAdvert(),
  loading: advertsSelectors.selectLoading(),
  categories: categoriesSelectors.selectCategories(),
});

export const FeaturesAdvertForm = (props: FeaturesAdvertFormProps) => {
  const dispatch = useDispatch();
  const { categories, advert, loading } = useSelector(stateSelector);

  const create = async (data) => {
    try {
      const file = data.advertImage[0];
      let formData = new FormData();
      formData.append('file', file);
      const path = `/api/${PrivateRoutesPath.IMAGES}`;
      postFormData(path, formData).then((result) => {
        dispatch(advertsActions.create({ ...data, imageUrl: result.data }));
      });
    } catch (error) {}
  };

  let createContent = {
    onSubmit: create,
    data: {
      title: 'New advert',
      submitButtonText: 'Create',
      descriptionInputLabel: 'Description',
      titleInputLabel: 'New Advert',
      categoryInputLabel: 'Category',
    },
    categories,
  };

  let editContent = {
    onSubmit: create,
    data: {
      title: 'Edit advert',
      submitButtonText: 'Update',
      descriptionInputLabel: 'Description',
      titleInputLabel: 'Edit Advert',
      categoryInputLabel: 'Category',
    },
    categories,
    advert,
  };

  let content: SharedCreateAdvertFormProps = createContent;

  useEffect(() => {
    props.match.path === '/adverts/:id/edit' &&
      dispatch(advertsActions.getById(props.match.params.id));
    dispatch(categoriesActions.getAll());
  }, [dispatch]);

  useEffect(() => {
    advert && !!advert._id && (content = { ...editContent });
  }, [advert]);

  if (loading) return <CircularProgress />;

  return (
    <div>
      <SharedCreateAdvertForm {...content} />
    </div>
  );
};

export default FeaturesAdvertForm;
