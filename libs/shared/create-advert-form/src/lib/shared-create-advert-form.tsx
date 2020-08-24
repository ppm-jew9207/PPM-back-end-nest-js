import React, { useState, useEffect, ChangeEvent } from 'react';
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

export interface AdvertData {
  title: string;
  submitButtonText: string;
  titleInputLabel: string;
  descriptionInputLabel: string;
  category: string;
  imageUrl: string;
}
export interface Category {
  title: string;
  value: string;
  _id: string;
}

export interface SharedCreateAdvertFormProps {
  onSubmit: (advertData: {
    title: string;
    description: string;
    advertImage: FileList;
    category: string;
  }) => void;
  data: AdvertData;
  categories: Category[];
}

export const SharedCreateAdvertForm = (props: SharedCreateAdvertFormProps) => {
  const [uploadedImg, setUploadedImg] = useState<ArrayBuffer | string>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [data, setData] = useState<AdvertData>(null);

  useEffect(() => {
    !data && setData(props.data);
    !categories.length && setCategories(props.categories);
  }, [props]);

  const onFileLoad = (e) => {
    const file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      setUploadedImg(e.target.result);
    };
    if (file) fileReader.readAsDataURL(file);
  };

  const { handleSubmit, register, control, errors } = useForm();
  return !data ? (
    <div>Loading...</div>
  ) : (
    <Box maxWidth={500} display="flex" flexDirection="column" mx="auto">
      <Typography className="header" component="h1" variant="h5">
        {data.title}
      </Typography>

      <form autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
        <div
          className="inner-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
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
                src={(!!uploadedImg && uploadedImg.toString()) || data.imageUrl}
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
          required
          fullWidth
          id="title"
          label={data.title}
          type="text"
          name="title"
          autoComplete="title"
          autoFocus
          inputRef={register({
            required: 'Required',
          })}
          error={!!errors.title}
          helperText={!errors.title ? '' : 'Title is required'}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="description"
          label={data.descriptionInputLabel}
          type="text"
          name="description"
          autoComplete="description"
          autoFocus
          inputRef={register({})}
          multiline
          rows={8}
        />
        <FormControl
          variant="outlined"
          fullWidth
          className="category"
          margin="normal"
        >
          <InputLabel id="category-label">Category</InputLabel>
          <Controller
            variant="outlined"
            name="category"
            defaultValue={data.category}
            control={control}
            onChange={([selected]) => {
              return selected;
            }}
            as={
              <Select id="category" variant="outlined">
                {!!categories &&
                  categories.map((category) => {
                    return (
                      <MenuItem key={category._id} value={category.value}>
                        {category.title}
                      </MenuItem>
                    );
                  })}
              </Select>
            }
            fullWidth
          />
        </FormControl>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          className="submit-form"
        >
          {data.submitButtonText}
        </Button>
      </form>
    </Box>
  );
};

export default SharedCreateAdvertForm;
