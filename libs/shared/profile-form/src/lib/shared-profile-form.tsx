import React, { useState, ChangeEvent } from 'react';
import { useForm, Controller, ErrorMessage } from 'react-hook-form';
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
  Typography
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './shared-profile-form.scss';

interface EntityRef {
  _id: string;
  name: string;
}

export interface SharedProfileFormProps {
  onSubmit: (submitData: {
    description: string;
    firstName: string;
    lastName: string;
    email: string;
    photo: FileList;
    fieldOfProfession: string;
    company: string;
    categories: string[];
    city: string;
    country: string;
    phone: string;
    web: string;
    type: string;
    facebook: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  }) => void;
  categories: EntityRef[];
  cities: Array<string>;
  countries: Array<string>;
}

export const SharedProfileForm = (props: SharedProfileFormProps) => {
  const { handleSubmit, register, control, errors } = useForm();

  const [categories, setCategories] = useState<string[]>([]);

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
  
  return (
    <Grid container direction="column" className="profileForm">
      <form autoComplete="nope" onSubmit={handleSubmit(props.onSubmit)}>
        <Box my={3}>
          <TextField
            id="firstName"
            name="firstName"
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
            type="text"
            variant="outlined"
            label="Last Name"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="email"
            name="email"
            type="email"
            variant="outlined"
            label="Email"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <InputLabel id="photoLabel">Photo</InputLabel>
          <TextField
            id="photo"
            name="photo"
            type="file"
            variant="outlined"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="description"
            name="description"
            multiline
            rows={4}
            variant="outlined"
            label="Description"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="fieldOfProfession"
            name="fieldOfProfession"
            type="text"
            variant="outlined"
            label="Field of Profession"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="company"
            name="company"
            type="text"
            variant="outlined"
            label="Company"
            inputRef={register()}
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
        <Box my={3}>
          <Controller
            name="city"
            control={control}
            onChange={([, data]) => data}
            onInputChange={(data) => data}
            as={
              <Autocomplete
                id="city"
                freeSolo
                autoSelect
                options={props.cities}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="City"
                    variant="outlined"
                  />
                )}
              />
            }
          />
        </Box>
        <Box my={3}>
          <Controller
          name="country"
          control={control}
          onChange={([, data]) => data}
          onInputChange={(data) => data}
            as={
              <Autocomplete
                id="country"
                freeSolo
                autoSelect
                options={props.countries}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Country"
                    variant="outlined"
                  />
                )}
              />
            }
          />
        </Box>
        <Box my={3}>
          <TextField
            id="phone"
            name="phone"
            type="text"
            variant="outlined"
            label="Phone"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="web"
            name="web"
            type="text"
            variant="outlined"
            label="Website"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="type"
            name="type"
            type="text"
            variant="outlined"
            label="Type"
            inputRef={register()}
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
            inputRef={register()}
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
            inputRef={register()}
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
            inputRef={register()}
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
            inputRef={register()}
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
