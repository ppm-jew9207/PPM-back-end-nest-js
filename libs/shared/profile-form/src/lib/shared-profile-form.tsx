import React, { useState, useEffect, ChangeEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  FormControl,
  TextField,
  Button,
  Grid,
  Box,
  Select,
  Input,
  Chip,
  MenuItem,
  InputLabel,
  FormHelperText,
  Divider,
  Typography,
} from '@material-ui/core';

import {
  SystemUpdateAlt as SystemUpdateAltIcon,
} from '@material-ui/icons';

import Autocomplete from '@material-ui/lab/Autocomplete';
import './shared-profile-form.scss';

interface EntityRef {
  _id: string;
  name: string;
}

export interface Profile {
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  fieldOfProfession: string;
  company: string;
  categories: string[];
  city: string;
  country: string;
  phone: string;
  website: string;
  type: string;
  socialLinks: string[];
}
export interface SharedProfileFormProps {
  onSubmit: (submitData:Profile) => void;
  categories: EntityRef[];
  cities?: string[];
  countries?: string[];
  profile: Profile
}

export const SharedProfileForm = (props: SharedProfileFormProps) => {
  const [uploadedImg, setUploadedImg] = useState<ArrayBuffer | string>();
  const { handleSubmit, register, control, errors } = useForm();
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    props.profile && !uploadedImg && setUploadedImg(props.profile.photo);
  },[props, uploadedImg]);

  const handleCategoriesChange = (event: ChangeEvent<{ value }>) => {
    setCategories(event.target.value);
  };

  const renderCategoryValue = (selected) => (
    <div>
      {selected.map((value: string) => (
        <Chip key={value} label={value} />
      ))}
    </div>
  );

  const validateCategories = (value) => {
    return value.length > 0;
  };

  const onFileLoad = (e) => {
    const file = e.currentTarget.files[0];

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      setUploadedImg(e.target.result);
    };
    if (file) fileReader.readAsDataURL(file);
  };

  return (
    <Grid container direction="column" className="profileForm">
      <form autoComplete="nope" onSubmit={handleSubmit(props.onSubmit)}>
        <Box my={3}>
          <TextField
            id="firstName"
            name="firstName"
            defaultValue={props.profile.firstName || ''}
            type="text"
            variant="outlined"
            label="First Name *"
            inputRef={register({
              required: 'Required',
            })}
            error={!!errors.firstName}
            helperText={errors.firstName ? 'This field is required' : ''}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="lastName"
            name="lastName"
            defaultValue={props.profile.lastName || ''}
            type="text"
            variant="outlined"
            label="Last Name"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="email"
            name="email"
            defaultValue={props.profile.email || ''}
            type="email"
            variant="outlined"
            label="Email"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <InputLabel   id="photoLabel">Photo</InputLabel>
          <div className="image-container">
          <div className={`draggable-container ${!uploadedImg ? 'empty' : ''}`}>
            <TextField
              inputRef={register({})}
              type="file"
              id="file-browser-input"
              name="imageUrl"
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
                alt="files-preview"
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
        </Box>
        <Box my={3}>
          <TextField
            id="description"
            name="description"
            defaultValue={props.profile.description || ''}
            multiline
            rows={4}
            variant="outlined"
            label="Description"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="fieldOfProfession"
            name="fieldOfProfession"
            defaultValue={props.profile.fieldOfProfession || ''}
            type="text"
            variant="outlined"
            label="Field of Profession"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="company"
            name="company"
            defaultValue={props.profile.company || ''}
            type="text"
            variant="outlined"
            label="Company"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <FormControl variant="outlined" fullWidth error={!!errors.categories}>
            <InputLabel id="categoriesLabel">Categories *</InputLabel>
            <Controller
              name="categories"
              defaultValue={[]}
              control={control}
              rules={{ validate: (value) => validateCategories(value) }}
              onChange={([selected]) => {
                return selected;
              }}
              as={
                <Select
                  id="categories"
                  multiple
                  label="Categories"
                  name="categories"
                  value={categories}
                  onChange={handleCategoriesChange}
                  input={<Input id="select-multiple-chip" />}
                  inputRef={register}
                  renderValue={renderCategoryValue}
                  error={!!errors.categories}
                >
                  {props.categories.map((category: EntityRef) => (
                    <MenuItem key={category._id} value={category.name}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              }
              fullWidth
            />
            <FormHelperText>
              {errors.categories ? 'This field is required' : ''}
            </FormHelperText>
          </FormControl>
        </Box>
        {/* <Box my={3}>
          <Controller
            name="city"
            defaultValue={[]}
            control={control}
            onChange={([, data]) => data}
            onInputChange={(data) => data}
            as={
              <Autocomplete
                id="city"
                freeSolo
                autoSelect
                getOptionLabel={(option) => option}
                options={props.cities}
                renderInput={(params) => (
                  <TextField {...params} label="City" variant="outlined" />
                )}
              />
            }
          />
        </Box> */}
        {/* <Box my={3}>
          <Controller
            name="country"
            control={control}
            defaultValue={[]}
            onChange={([, data]) => data}
            onInputChange={(data) => data}
            as={
              <Autocomplete
                id="country"
                freeSolo
                autoSelect
                options={props.countries}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField {...params} label="Country" variant="outlined" />
                )}
              />
            }
          />
        </Box> */}
        <Box my={3}>
          <TextField
            id="phone"
            name="phone"
            defaultValue={props.profile.phone || ''}
            type="text"
            variant="outlined"
            label="Phone"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="website"
            name="website"
            defaultValue={props.profile.website || ''}
            type="text"
            variant="outlined"
            label="Website"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="type"
            name="type"
            defaultValue={props.profile.type || ''}
            type="text"
            variant="outlined"
            label="Type"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Typography variant="overline" display="block" gutterBottom>
          Social Links
        </Typography>
        <Divider variant="middle" />
        <Box my={3}>
          <TextField
            id="facebook"
            name="facebook"
            type="text"
            variant="outlined"
            label="Facebook"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="linkedin"
            name="linkedin"
            type="text"
            variant="outlined"
            label="LinkedIn"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="twitter"
            name="twitter"
            type="text"
            variant="outlined"
            label="Twitter"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="instagram"
            name="instagram"
            type="text"
            variant="outlined"
            label="Instagram"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Button name="submit" variant="contained" color="primary" type="submit">
          SAVE
        </Button>
      </form>
    </Grid>
  );
};

export default SharedProfileForm;
