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
  Dialog,
  List,
  Checkbox,
  Chip,
  FormHelperText,
  DialogActions,
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
  onCancel?: () => void;
  data?: CourseData;
  categories: Category[];
  lessons?: Lesson[];
  course?: Course;
  toggleAddDrawer?: () => void;
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
      <div>
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
      <div>
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
    <Box
      maxWidth={500}
      display="flex"
      flexDirection="column"
      mx="auto"
      className="course-form"
    >
      <Typography className="header" component="h1" variant="h5">
        New Course
      </Typography>
      <form autoComplete="off" onSubmit={handleSubmit(createCourseHandler)}>
        <div className="inner-container">
          <div className={`draggable-container ${!uploadedImg ? 'empty' : ''}`}>
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
        </div>
        <Controller
          as={
            <TextField
              placeholder="Title"
              variant="outlined"
              margin="normal"
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
        {errors.title && (
          <div className="error">
            <ArrowRightIcon className="error-icon" />
            Title is required
          </div>
        )}
        <Controller
          as={
            <TextField
              placeholder="Description"
              variant="outlined"
              margin="normal"
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
        {errors.description && (
          <div className="error">
            <ArrowRightIcon className="error-icon" />
            Description is required
          </div>
        )}
        <div className='text-row'>
        <Controller
          as={
            <TextField
              placeholder="Prerequisites"
              variant="outlined"
              margin="normal"
              label={labels?.prerequisitesInputLabel}
              type="text"
              className="prerequisites"
              onChange={(event) =>
                setCourse({ ...course, prerequisites: event.target.value })
              }
              multiline
            />
          }
          name="prerequisites"
          control={control}
          defaultValue={(course && course.prerequisites) || ''}
          rules={{ required: true }}
        />
        {errors.prerequisites && (
          <div className="error">
            <ArrowRightIcon className="error-icon" />
            Prerequisites is required
          </div>
        )}
        <Controller
          as={
            <TextField
              placeholder="What will you learn?"
              variant="outlined"
              margin="normal"
              label={labels?.learningInputLabel}
              type="text"
              className="learning"
              onChange={(event) =>
                setCourse({ ...course, learning: event.target.value })
              }
              multiline
            />
          }
          name="learning"
          control={control}
          defaultValue={(course && course.learning) || ''}
          rules={{ required: true }}
        />
        {errors.learning && (
          <div className="error">
            <ArrowRightIcon className="error-icon" />
            What to learn is required
          </div>
        )}
        </div>
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
                  label="Categories"
                  name="categories"
                  value={categories}
                  multiple
                  input={<Input id="select-multiple-chip" />}
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
        </Box>
        <Box my={3}>
          <FormControl variant="outlined" fullWidth error={!!errors.lessons}>
            <InputLabel id="lessonsLabel">Lessons *</InputLabel>
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
                  id="lessons"
                  label="Lessons"
                  name="lessons"
                  value={lessons}
                  multiple
                  input={<Input id="select-multiple-chip" />}
                  inputRef={register}
                  renderValue={renderLessonsValue}
                  error={!!errors.lessons}
                >
                  {props.lessons &&
                    props.lessons.map((lesson: Lesson) => (
                      <MenuItem key={lesson._id} value={lesson._id}>
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
        </Box>
        <div className="select-button">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            className="submit-form"
          >
            Create
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            type="reset"
            className="cancel-form"
            onClick={() => {
              props.onCancel();
              props.toggleAddDrawer();
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default SharedCreateCourseForm;
