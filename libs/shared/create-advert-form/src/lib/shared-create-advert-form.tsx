import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from '@material-ui/core';
import './shared-create-advert-form.scss';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

export interface AdvertDefaultParams {
  title: string;
  titleInputLabel: string;
  descriptionInputLabel: string;
  categoryInputLabel: string;
  submitButtonText: string;
  cancelButtonText: string;
}
export interface Category {
  title: string;
  value: string;
  _id: string;
}

export interface Advert {
  category: string;
  description: string;
  imageUrl: string;
  title: string;
  _id: string;
}

export interface AdvertData {
  id: string;
  title: string;
  description: string;
  advertImage: FileList;
  category: string;
}

export interface SharedCreateAdvertFormProps {
  onSubmit: (advertData: {
    title: string;
    description: string;
    advertImage: FileList;
    category: string;
  }) => void;
  onCancel: () => void;
  data: AdvertDefaultParams;
  categories: Category[];
  advert?: Advert;
}

export const SharedCreateAdvertForm = (props: SharedCreateAdvertFormProps) => {
  const [uploadedImg, setUploadedImg] = useState<ArrayBuffer | string>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [advert, setAdvert] = useState<Advert>(null);

  useEffect(() => {
    console.log(props.categories);
    !categories.length && setCategories(props.categories);
    !advert && setAdvert(props.advert);
    props.advert && !uploadedImg && setUploadedImg(props.advert.imageUrl);
  }, [props]);

  const onFileLoad = (e) => {
    const file = e.currentTarget.files[0];

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      setUploadedImg(e.target.result);
    };
    if (file) fileReader.readAsDataURL(file);
  };

  const { handleSubmit, register, control, errors, setValue } = useForm();
  if (!props.data) return <div>Loading...</div>;

  return (
    <Box maxWidth={500} display="flex" flexDirection="column" mx="auto">
      <Typography className="header" component="h1" variant="h5">
        {props.data.title}
      </Typography>
      <form autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
        <div className="inner-container">
          <div className={`draggable-container ${!uploadedImg ? 'empty' : ''}`}>
            <TextField
              inputRef={register({})}
              type="file"
              id="file-browser-input"
              name="advertImage"
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={onFileLoad.bind(this)}
              onChange={onFileLoad.bind(this)}
            />
            <div className="files-preview-container">
              <img
                className="files-preview-container__image"
                src={(!!uploadedImg && uploadedImg.toString()) || ''}
              />
            </div>
            <div className="helper-text">
              <Typography
                variant="body1"
                component="p"
                align="center"
                gutterBottom
              >
                Drag and Drop Images Here
              </Typography>
              <SystemUpdateAltIcon display="inline" />
            </div>
          </div>
        </div>

        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="title"
          label={props.data.titleInputLabel}
          type="text"
          name="title"
          autoComplete="title"
          autoFocus
          value={advert && advert.title}
          onChange={(event) =>
            setAdvert({ ...advert, title: event.target.value })
          }
          inputRef={register({
            required: 'Required',
          })}
          multiline
          rows={1}
          className="header"
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="description"
          label={props.data.descriptionInputLabel}
          type="text"
          name="description"
          autoComplete="description"
          autoFocus
          defaultValue={advert && advert.description}
          inputRef={register({})}
          multiline
          rows={8}
          className="description"
        />
        <Controller
          control={control}
          name="category"
          as={
            <FormControl
              className="category"
              variant="outlined"
              margin="normal"
            >
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                name="category"
                labelId="category-label"
                id="category"
                inputRef={register({
                  required: 'Required',
                })}
                value={
                  (advert && advert.category) ||
                  (categories[0] && categories[0].value) ||
                  ''
                }
                onChange={(event: React.ChangeEvent<{ value: string }>) => {
                  setValue('category', event.target.value);
                  setAdvert({ ...advert, category: event.target.value });
                }}
              >
                {!!categories &&
                  categories.map((category) => {
                    return (
                      <MenuItem key={category._id} value={category.value}>
                        {category.title}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          }
        ></Controller>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          className="submit-form"
        >
          {props.data.submitButtonText}
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          type="reset"
          className="cancel-form"
          onClick={props.onCancel}
        >
          {props.data.cancelButtonText}
        </Button>
      </form>
    </Box>
  );
};

export default SharedCreateAdvertForm;
