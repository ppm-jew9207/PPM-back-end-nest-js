import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  TextField,
  Button,
  Box,
  Typography,
  Dialog,
  List,
  DialogActions,
  Checkbox,
  Chip
} from '@material-ui/core';
import './shared-create-advert-form.scss';

import {
  ArrowRight as ArrowRightIcon,
  SystemUpdateAlt as SystemUpdateAltIcon
} from '@material-ui/icons';
import { title } from 'process';

export interface Labels {
  title: 'New advert',
  submitButtonText: 'Create',
  cancelButtonText: 'Cancel',
  descriptionInputLabel: 'Description',
  titleInputLabel: 'New Advert',
  categoryInputLabel: 'Category',
  prerequisitesInputLabel: 'Pre-requisites',
  learningInputLabel: 'What to learn',
}
export interface Category {
  title: string;
  value: string;
  _id: string;
  checked: boolean;
}

export interface Lesson {
  title: string;
  datetime: string;
  _id: string;
  checked: boolean;
}

export interface Advert {
  category: string;
  description: string;
  imageUrl: string;
  title: string;
  _id: string;
  prerequisites: string;
  learning: string;
}

export interface AdvertData {
  id?: string;
  title: string;
  description: string;
  advertImage: FileList;
  category: string;
  prerequisites: string;
  learning: string;
  lessons: Lesson[];
}

export interface SharedCreateAdvertFormProps {
  onSubmit: (advertData: AdvertData) => void;
  onCancel: () => void;
  data?: AdvertData;
  categories: Category[];
  advert?: Advert;
}

export const SharedCreateAdvertForm = (props: SharedCreateAdvertFormProps) => {
  const [uploadedImg, setUploadedImg] = useState<ArrayBuffer | string>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [advert, setAdvert] = useState<Advert>();
  const [lessons, setLesson] = useState<Lesson[]>([]);
  const [openLesson, setLessonOpen] = useState(false);
  const [selectedLessonValue, setSelectedLessonValue] = useState([]);
  const [openCategory, setCategoryOpen] = useState(false);
  const [selectedCategoryValue, setSelectedCategoryValue] = useState([]);
  const [labels, setLabels] = useState<Labels>();

  useEffect(() => {
    (!categories && !categories.length) && setCategories(props.categories);
    !advert && setAdvert(props.advert);
    props.advert && !uploadedImg && setUploadedImg(props.advert.imageUrl);
  }, [props, advert, categories, uploadedImg]);

  const onFileLoad = (e) => {
    const file = e.currentTarget.files[0];

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      setUploadedImg(e.target.result);
    };
    if (file) fileReader.readAsDataURL(file);
  };

  function LessonDialog(props) {
    const { open, options } = props;
    const [data, setData] = useState(options);

    const toggle = (les) => {
      data.forEach((_, key) => {
        if (data[key].title === les.title) data[key].checked = !les.checked;
      });
      setData([...data]);
    };

    const sendData = () => {
      setSelectedLessonValue([data]);
      setLessonOpen(false);
    }

    return (
      <Dialog
        onClose={() => setLessonOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <List className="dialog-list">
          {lessons.map((les) => (
            <section key={les._id}>
              <Controller
                name={les.title}
                control={control}
                as={() => (
                  <Checkbox
                    key={les._id}
                    onClick={() => toggle(les)}
                    checked={les.checked || false}
                  />
                )}
              />
              <label>{les.title}</label>
            </section>
          ))}
        </List>
        <DialogActions>
          <Button onClick={() => setLessonOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={sendData} color="primary" type="submit">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  function CategoryDialog(props) {
    const { open, options } = props;  
    const [data, setData] = useState(options);

    const toggle = (les) => {
      data.forEach((_, key) => {
        if (data[key].title === les.title) data[key].checked = !les.checked;
      });
      setData([...data]);
    };

    const sendData = () => {
      setSelectedCategoryValue([data]);
      setCategoryOpen(false);
    }

    return (
      <Dialog
        onClose={() => setCategoryOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <List className="dialog-list">
          {categories.map((les) => (
            <section key={les._id}>
              <Controller
                name={les.title}
                control={control}
                as={() => (
                  <Checkbox
                    key={les._id}
                    onClick={() => toggle(les)}
                    checked={les.checked || false}
                  />
                )}
              />
              <label>{les.title}</label>
            </section>
          ))}
        </List>
        <DialogActions>
          <Button onClick={() => setCategoryOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={sendData} color="primary" type="submit">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  const { handleSubmit, register, control, errors, setValue } = useForm();

  const createAdvertHandler = (data) => {
    props.onSubmit({ ...data, selectedLessonCheckboxes: {selectedLessonValue}, selectedCategoryCheckboxes: {selectedCategoryValue}});
  };

  return (
    <Box maxWidth={500} display="flex" flexDirection="column" mx="auto" className="advert-form">
      <Typography className="header" component="h1" variant="h5">
        New Advert
      </Typography>
      <form autoComplete="off" onSubmit={handleSubmit(createAdvertHandler)}>
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
                alt=''
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
              placeholder='Title'
              variant="outlined"
              margin="normal"
              fullWidth
              label={labels?.titleInputLabel}
              type="text"
              className="header"
              onChange={(event) =>
                setAdvert({ ...advert, title: event.target.value })
              }
            />
          }
          name="title"
          control={control}
          defaultValue={(advert && advert.title) || ''}
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
              placeholder='Description'
              variant="outlined"
              margin="normal"
              fullWidth
              label={labels?.categoryInputLabel}
              type="text"
              className="description"
              onChange={(event) =>
                setAdvert({ ...advert, description: event.target.value })
              }
              multiline
              rows={8}
            />
          }
          name="description"
          control={control}
          defaultValue={(advert && advert.description) || ''}
          rules={{ required: true }}
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
              placeholder='Prerequisites'
              variant="outlined"
              margin="normal"
              fullWidth
              label={labels?.prerequisitesInputLabel}
              type="text"
              className="prerequisites"
              onChange={(event) =>
                setAdvert({ ...advert, prerequisites: event.target.value })
              }
              multiline
              rows={2}
            />
          }
          name="prerequisites"
          control={control}
          defaultValue={(advert && advert.prerequisites) || ''}
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
              placeholder='What will you learn?'
              variant="outlined"
              margin="normal"
              fullWidth
              label={labels?.learningInputLabel}
              type="text"
              className="learning"
              onChange={(event) =>
                setAdvert({ ...advert, learning: event.target.value })
              }
              multiline
              rows={2}
            />
          }
          name="learning"
          control={control}
          defaultValue={(advert && advert.learning) || ''}
          rules={{ required: true }}
        />
        {errors.learning && (
          <div className="error">
            <ArrowRightIcon className="error-icon" />
            What to learn is required
          </div>
        )}
        <div className='select-button'>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => setLessonOpen(true)}
          >
            Choose Lessons to add
          </Button>
          <div className="chip-container">
            {!!selectedLessonValue[0] &&
              selectedLessonValue[0].map(
                (value) =>
                  !!value.checked && (
                    <div key={value._id} className="chip">
                      <Chip
                        variant="outlined"
                        color="primary"
                        label={value.title}
                      />
                    </div>
                  )
              )}
          </div>
          <LessonDialog
            selectedValue={selectedLessonValue}
            open={openLesson}
            options={!!lessons && lessons}
            onClose={() => setLessonOpen(false)}
            name="lessons"
          />
        </div>
        <div className='select-button'>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => setCategoryOpen(true)}
          >
            Choose Categories to add
          </Button>
          <div className="chip-container">
            {!!selectedCategoryValue[0] &&
              selectedCategoryValue[0].map(
                (value) =>
                  !!value.checked && (
                    <div key={value._id} className="chip">
                      <Chip
                        variant="outlined"
                        color="primary"
                        label={value.title}
                      />
                    </div>
                  )
              )}
          </div>
          <CategoryDialog
            selectedValue={selectedCategoryValue}
            open={openCategory}
            options={!!categories && categories}
            onClose={() => setCategoryOpen(false)}
            name="category"
          />
        </div>
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
          onClick={props.onCancel}
        >
          Cancel
        </Button>
      </form>
    </Box>
  );
};

export default SharedCreateAdvertForm;
