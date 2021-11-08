import React, { useState, useEffect, ChangeEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
  TextField,
  Button,
  Box,
  Typography,
  List,
  Checkbox,
  Chip,
  FormHelperText,
  Grid,
  Divider,
  OutlinedInput,
} from '@material-ui/core';
import './shared-create-course-form.scss';

import {
  Check as CheckIcon,
  Clear as ClearIcon,
  ArrowRight as ArrowRightIcon,
  SystemUpdateAlt as SystemUpdateAltIcon,
} from '@material-ui/icons';
import { title } from 'process';

export interface Labels {
  title: 'New course';
  submitButtonText: 'Create';
  cancelButtonText: 'Cancel';
  descriptionInputLabel: 'Description';
  titleInputLabel: 'New Course';
  categoryInputLabel: 'Category';
  prerequisitesInputLabel: 'Pre-requisites';
  learningInputLabel: 'What to learn';
}
export interface Category {
  title: string;
  value: string;
  _id?: string;
  checked?: boolean;
}

export interface Lesson {
  title: string;
  description: string;
  datetime: string;
  imageUrl: string;
  resources: string;
  mentorName: string;
  connectionURL: string;
  categories: string[];
  _id?: string;
}

export interface Course {
  category: string;
  description: string;
  imageUrl: string;
  title: string;
  _id: string;
  prerequisites: string;
  learning: string;
}

export interface CourseData {
  id?: string;
  title?: string;
  description?: string;
  courseImage?: FileList;
  category?: Category[];
  prerequisites?: string;
  learning?: string;
  lessons?: Lesson[];
}

export interface SharedCreateCourseFormProps {
  onSubmit?: (courseData: CourseData) => void;
  data?: CourseData;
  categories: Category[];
  lessons?: Lesson[];
  course?: Course;
  onCancel?: Function;
}

export const SharedCreateCourseForm = (props: SharedCreateCourseFormProps) => {
  const [uploadedImg, setUploadedImg] = useState<ArrayBuffer | string>(null);
  const [course, setCourse] = useState<Course>();
  const [lessons, setLessons] = useState<string[]>([]);
  const [labels, setLabels] = useState<Labels>();
  const [categories, setCategories] = useState<string[]>([]);

  const stopImmediatePropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const renderCategoryValue = (selected) => {
    const categories = {};
    props.categories.map((category) => {
      categories[category.value] = category;
    });
    return (
      <div className="multiple-selected">
        {selected.map(
          (value: string) =>
            categories[value] && (
              <Chip key={value} label={categories[value].title} />
            )
        )}
      </div>
    );
  };

  const renderLessonsValue = (selected) => {
    const lessons = {};
    props.lessons.map((lesson) => {
      lessons[lesson._id] = lesson;
    });
    return (
      <div className="multiple-selected">
        {selected.map(
          (title: string) =>
            lessons[title] && <Chip key={title} label={lessons[title].title} />
        )}
      </div>
    );
  };

  const validateCategories = (value) => {
    return value.length > 0;
  };

  const validateLessons = (value) => {
    return value.length > 0;
  };

  useEffect(() => {
    !course && setCourse(props.course);
    props.course && !uploadedImg && setUploadedImg(props.course.imageUrl);
  }, [props, course, categories, uploadedImg]);

  const onFileLoad = (e) => {
    const file = e.currentTarget.files[0];

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      setUploadedImg(e.target.result);
    };
    if (file) fileReader.readAsDataURL(file);
  };

  const { handleSubmit, register, control, errors, setValue } = useForm();

  const createCourseHandler = (data: CourseData) => {
    props.onSubmit(data);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(createCourseHandler)}>
      <div className="course-form-container">
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography className="header" component="h1" variant="h5">
              New Course
            </Typography>
            <Divider />
          </Grid>

          <Grid item md={12}>
            <Controller
              as={
                <TextField
                  error={!!errors.title}
                  placeholder="Title *"
                  variant="outlined"
                  id="standard-basic"
                  fullWidth
                  label={labels?.titleInputLabel}
                  type="text"
                  className="header"
                  onChange={(event) =>
                    setCourse({ ...course, title: event.target.value })
                  }
                />
              }
              name="title"
              control={control}
              defaultValue={(course && course.title) || ''}
              rules={{ required: true }}
            />
            <FormHelperText style={{ color: '#f44336' }}>
              {errors.title ? 'This field is required' : ''}
            </FormHelperText>
          </Grid>
          <Grid item md={12}>
            <Controller
              as={
                <TextField
                  error={!!errors.description}
                  placeholder="Description *"
                  variant="outlined"
                  rowsMax={6}
                  fullWidth
                  label={labels?.categoryInputLabel}
                  type="text"
                  className="description"
                  onChange={(event) =>
                    setCourse({ ...course, description: event.target.value })
                  }
                  multiline
                  rows={2}
                />
              }
              name="description"
              control={control}
              defaultValue={(course && course.description) || ''}
              rules={{ required: true }}
            />
            <FormHelperText style={{ color: '#f44336' }}>
              {errors.description ? 'This field is required' : ''}
            </FormHelperText>
          </Grid>
          <Grid item md={12}>
            <div
              className={`draggable-container ${!uploadedImg ? 'empty' : ''}`}
            >
              <TextField
                inputRef={register({})}
                type="file"
                id="file-browser-input"
                name="courseImage"
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
          </Grid>
          <Grid item md={6}>
            <Controller
              as={
                <TextField
                  error={!!errors.prerequisites}
                  placeholder="Prerequisites *"
                  variant="outlined"
                  rowsMax={6}
                  label={labels?.prerequisitesInputLabel}
                  type="text"
                  className="prerequisites"
                  onChange={(event) =>
                    setCourse({
                      ...course,
                      prerequisites: event.target.value,
                    })
                  }
                  multiline
                  fullWidth
                />
              }
              name="prerequisites"
              control={control}
              defaultValue={(course && course.prerequisites) || ''}
              rules={{ required: true }}
            />
            <FormHelperText style={{ color: '#f44336' }}>
              {errors.prerequisites ? 'This field is required' : ''}
            </FormHelperText>
          </Grid>
          <Grid item md={6}>
            <Controller
              as={
                <TextField
                  error={!!errors.learning}
                  placeholder="What will you learn? *"
                  variant="outlined"
                  rowsMax={6}
                  label={labels?.learningInputLabel}
                  type="text"
                  className="learning"
                  onChange={(event) =>
                    setCourse({ ...course, learning: event.target.value })
                  }
                  fullWidth
                  multiline
                />
              }
              name="learning"
              control={control}
              defaultValue={(course && course.learning) || ''}
              rules={{ required: true }}
            />
            <FormHelperText style={{ color: '#f44336' }}>
              {errors.learning ? 'This field is required' : ''}
            </FormHelperText>
          </Grid>
          <Grid item md={12}>
            <FormControl fullWidth error={!!errors.categories}>
              <InputLabel className="categoriesLabel">Categories *</InputLabel>
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
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Categories *"
                      />
                    }
                    id="categories"
                    label="Categories"
                    name="categories"
                    value={categories}
                    multiple
                    inputRef={register}
                    renderValue={renderCategoryValue}
                    error={!!errors.categories}
                  >
                    {props.categories &&
                      props.categories.map((category: Category) => (
                        <MenuItem key={category._id} value={category.value}>
                          {category.title}
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
          </Grid>

          <Grid item md={12}>
            <FormControl fullWidth error={!!errors.lessons}>
              <InputLabel className="lessonsLabel">Lessons *</InputLabel>

              <Controller
                name="lessons"
                defaultValue={[]}
                control={control}
                rules={{ validate: (value) => validateLessons(value) }}
                onChange={([selected]) => {
                  return selected;
                }}
                as={
                  <Select
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Lessons *"
                      />
                    }
                    id="lessons"
                    label="Lessons"
                    name="lessons"
                    value={lessons}
                    multiple
                    inputRef={register}
                    renderValue={renderLessonsValue}
                    error={!!errors.lessons}
                  >
                    {props.lessons &&
                      props.lessons.map((lesson: Lesson) => (
                        <MenuItem
                          className="testi"
                          key={lesson._id}
                          value={lesson._id}
                        >
                          {lesson.title}
                        </MenuItem>
                      ))}
                  </Select>
                }
                fullWidth
              />
              <FormHelperText>
                {errors.lessons ? 'This field is required' : ''}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item md={6}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Create
            </Button>
          </Grid>
          <Grid item md={6}>
            <Button
              variant="contained"
              color="secondary"
              type="reset"
              onClick={() => {
                props.onCancel();
              }}
              fullWidth
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default SharedCreateCourseForm;
