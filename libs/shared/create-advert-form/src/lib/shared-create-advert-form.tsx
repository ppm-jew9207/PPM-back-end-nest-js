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
  Dialog,
  List,
  DialogActions,
  FormControlLabel,
  Checkbox,
  Chip
} from '@material-ui/core';
import './shared-create-advert-form.scss';

import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import { isContext } from 'vm';

export interface AdvertDefaultParams {
  title: string;
  titleInputLabel: string;
  descriptionInputLabel: string;
  categoryInputLabel: string;
  submitButtonText: string;
  cancelButtonText: string;
  prerequisitesInputLabel: string;
  learningInputLabel: string;
}
export interface Category {
  title: string;
  value: string;
  _id: string;
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
  id: string;
  title: string;
  description: string;
  advertImage: FileList;
  category: string;
  prerequisites: string;
  learning: string;
  lessons: Lesson[];
}

export interface SharedCreateAdvertFormProps {
  onSubmit: (advertData: {
    title: string;
    description: string;
    advertImage: FileList;
    category: string;
    prerequisites: string;
    learning: string;
    lesson: Lesson[];
  }) => void;
  onCancel: () => void;
  data: AdvertDefaultParams;
  categories: Category[];
  advert?: Advert;
  lesson: Lesson[];
}

export const SharedCreateAdvertForm = (props: SharedCreateAdvertFormProps) => {
  const [uploadedImg, setUploadedImg] = useState<ArrayBuffer | string>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [advert, setAdvert] = useState<Advert>();
  const [lesson, setLesson] = useState<Lesson[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);

  const handleDialogClickOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    !categories.length && setCategories(props.categories);
    !advert && setAdvert(props.advert);
    !lesson.length && setLesson(props.lesson)
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

  function SimpleDialog(props) {
    const { open, onChange, options } = props;
    
      const [data, setData] = useState(options);

      const toggle = (les) => {
        data.forEach((_, key) => {
          if (data[key].title === les.title) data[key].checked = !les.checked;
        });
        setData([...data]);
        onChange(data);
      };

      const sendData = () => {
        setSelectedValue([data]);
        handleDialogClose();
      }

    return (
      <Dialog
        onClose={handleDialogClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <List className="dialog-list">
          {lesson.map((les) => (
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
          <Button onClick={handleDialogClose} color="primary">
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
  if (!props.data) return <div>Loading...</div>;

  const createAdvertHandler = (data) => {
    props.onSubmit({ ...data, selectedCheckboxes: {selectedValue} });
  };

  return (
    <Box maxWidth={500} display="flex" flexDirection="column" mx="auto">
      <Typography className="header" component="h1" variant="h5">
        {props.data.title}
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
              label={props.data.titleInputLabel}
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
        <Controller
          as={
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label={props.data.descriptionInputLabel}
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
        <Controller
          as={
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label={props.data.prerequisitesInputLabel}
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
        <Controller
          as={
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label={props.data.learningInputLabel}
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
        <div>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={handleDialogClickOpen}
          >
            Choose Lessons to add
          </Button>
          <div className="chip-container">
            {!!selectedValue[0] &&
              selectedValue[0].map(
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
          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            options={!!lesson && lesson}
            onClose={handleDialogClose}
            onChange={(data) => {
              console.log(data);
            }}
            name="lessons"
          />
        </div>
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
