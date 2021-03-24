import React, { useState, useEffect, ChangeEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './shared-lesson-component.scss';
import moment from 'moment';

import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Fab,
  Input,
  Chip,
} from '@material-ui/core';

import {
  ArrowRight as ArrowRightIcon,
  SystemUpdateAlt as SystemUpdateAltIcon,
  Clear as ClearIcon,
  Add as AddIcon,
} from '@material-ui/icons';

import { green, teal } from '@material-ui/core/colors';

export interface Category {
  title: string;
  value: string;
  _id: string;
}

export interface LessonDefaultParams {
  title: string;
  titleInputLabel: string;
  descriptionInputLabel: string;
  resourcesInputLabel: string;
  mentorInputLabel: string;
  connectionUrlInputLabel: string;
  datetimeInputLabel: string;
  submitButtonText: string;
  cancelButtonText: string;
}
export interface Mentor {
  name: string;
  value: string;
  _id: string;
}

export interface Lesson {
  title: string;
  description: string;
  datetime: string;
  imageUrl: string;
  resources: string;
  mentorName: string;
  connectionUrl: string;
  categories: string[];
  _id: string;
}

export interface SharedLessonComponentProps {
  onSubmit?: (lesson: Lesson) => void;
  onCancel?: () => void;
  mentors?: Mentor[];
  lesson?: Lesson;
  categories?: Category[];
  data?: LessonDefaultParams;
}

export const SharedLessonComponent = (props: SharedLessonComponentProps) => {
  const [uploadedImg, setUploadedImg] = useState<ArrayBuffer | string>();
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [lesson, setLesson] = useState<Lesson>();
  const [categories, setCategories] = useState<Category[]>([]);

  !lesson && setLesson(props.lesson);

  useEffect(() => {
    !categories?.length && setCategories(props.categories);
    props.lesson && !uploadedImg && setUploadedImg(props.lesson.imageUrl);
    !mentors?.length && setMentors(props.mentors);
  }, [props, lesson, mentors, uploadedImg]);

  const onFileLoad = (e) => {
    const file = e.currentTarget.files[0];

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      setUploadedImg(e.target.result);
    };
    if (file) fileReader.readAsDataURL(file);
  };

  const { handleSubmit, control, register, reset, errors } = useForm();

  const validateCategories = (value) => {
    return !!value.length;
  };

  const handleCategoriesChange = (event: ChangeEvent<{ value }>) => {
    setCategories(event.target.value);
  };

  const renderCategoryValue = (selected) => {
    const categories = {};
    props.categories.map((category) => {
      categories[category.value] = category;
    });
    return (
      <div>
        {selected.map((value: string) => (
          <Chip key={value} label={categories[value].title} />
        ))}
      </div>
    );
  };

  return (
    <Box
      maxWidth={500}
      display="flex"
      flexDirection="column"
      mx="auto"
      className="lesson"
    >
      <Typography component="h1" variant="h5">
        Lesson title
      </Typography>
      <form autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
        <Controller
          as={
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Title *"
              type="text"
              className="input-field"
            />
          }
          name="title"
          control={control}
          defaultValue={(lesson && lesson.title) || ''}
          rules={{ required: true }}
          error={!!errors.title}
        />
        {errors.title && (
          <div className="error">
            <ArrowRightIcon className="error-icon" />
            Title is required
          </div>
        )}
        <Controller
          as={
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Description *"
              type="text"
              className="description"
              multiline
              rows={8}
            />
          }
          name="description"
          control={control}
          defaultValue={(lesson && lesson.description) || ''}
          rules={{ required: true }}
          error={!!errors.description}
        />
        {errors.description && (
          <div className="error">
            <ArrowRightIcon className="error-icon" />
            Description is required
          </div>
        )}
        <Controller
          as={
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Date and Time"
              type="datetime-local"
              className="datetime"
              inputRef={register({})}
            />
          }
          name="datetime"
          control={control}
          defaultValue={
            (lesson && lesson.datetime.substr(0, 16)) ||
            moment().format('YYYY-MM-DDTHH:MM')
          }
          error={!!errors.datetime}
        />
        {!!errors.datetime && (
          <div className="error">
            <ArrowRightIcon className="error-icon" />
            Date and time is required
          </div>
        )}
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
                alt=""
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
        <Controller
          as={
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Resources"
              type="text"
              className="resources"
              multiline
              rows={8}
            />
          }
          name="resources"
          control={control}
          defaultValue={(lesson && lesson?.resources) || ''}
        />
        <InputLabel style={{ padding: '8.5px 14px' }}>
          Select mentor *
        </InputLabel>
        <Controller
          control={control}
          name="mentor"
          defaultValue={
            (props?.lesson && props?.lesson?.mentorName) ||
            (props?.mentors?.length && props?.mentors[0]?._id) ||
            ''
          }
          error={!!errors.mentor}
          as={
            <Select variant="outlined" fullWidth ref={register}>
              {!!props?.mentors?.length &&
                props?.mentors?.map((mentor) => (
                  <MenuItem key={mentor?._id} value={mentor?._id}>
                    {mentor.name}
                  </MenuItem>
                ))}
            </Select>
          }
        />
        <Controller
          as={
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Connection URL *"
              type="text"
              className="input-field"
            />
          }
          name="connectionUrl"
          control={control}
          defaultValue={(lesson && lesson.connectionUrl) || ''}
          rules={{ required: true }}
          error={!!errors.connectionUrl}
        />
        {!!errors.connectionUrl && (
          <div className="error">
            <ArrowRightIcon className="error-icon" />
            Connection URL is required
          </div>
        )}
        <Controller
          control={control}
          name="category"
          defaultValue=""
          as={
            <FormControl
              variant="outlined"
              fullWidth
              error={!!errors.categories}
            >
              <InputLabel id="categoriesLabel">Categories *</InputLabel>
              <Controller
                name="categories"
                defaultValue={categories}
                control={control}
                rules={{ validate: (value) => validateCategories(value) }}
                onChange={([selected]) => {
                  return selected;
                }}
                as={
                  <Select
                    id="categories"
                    label="Categories"
                    name="categories"
                    value={categories}
                    multiple
                    onChange={handleCategoriesChange}
                    input={<Input id="select-multiple-chip" />}
                    inputRef={register}
                    renderValue={renderCategoryValue}
                    error={!!errors.categories}
                  >
                    {props.categories.map((category: Category) => (
                      <MenuItem key={category._id} value={category.value}>
                        {category.title}
                      </MenuItem>
                    ))}
                  </Select>
                }
                fullWidth
              />
              {!!errors.categories && (
                <div className="error">
                  <ArrowRightIcon className="error-icon" />
                  At least one category is required
                </div>
              )}
            </FormControl>
          }
        ></Controller>
        <Controller
          as={<Input type="hidden" />}
          control={control}
          name="id"
          defaultValue={(lesson && lesson._id) || ''}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          className="submit-form"
        >
          {lesson && lesson._id ? 'Update' : 'Create'}
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          type="button"
          className="cancel-form"
          onClick={props.onCancel}
        >
          Cancel
        </Button>
      </form>
    </Box>
  );
};

export default SharedLessonComponent;
