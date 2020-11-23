import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';

import './shared-list-editor.scss';
import { Close as CloseIcon, Menu as MenuIcon, Clear as ClearIcon, CheckRounded } from '@material-ui/icons';
import { Drawer, Typography, IconButton, Fab , Box, Checkbox, TextField, Button} from '@material-ui/core';

/* eslint-disable-next-line */
export interface SharedListEditorProps {
  onSubmit: (listItemData: ListItem) => void;
}

export interface ListItem {
  value: string,
  title: string
};

export const SharedListEditor = (props: SharedListEditorProps) => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const fullList:ListItem[] = [{ value: 'belekas', title: 'belekas'}, { value: 'ragas', title: 'ragas'}];

  const [ selectedList, setSelectedList ] = useState([{ value: 'belekas', title: 'belekas'}]);
  const [ excludedList, setExcludedList ] = useState([{ value: 'ragas', title: 'ragas'}]);
  const [ newItem, setNewItem ] = useState({ value: '', title: ''});

  const handleChange = (index: number) => {
    const tempSelectedList = [...selectedList];
    tempSelectedList.push(excludedList[index]);
    setSelectedList(tempSelectedList);
    const tempExcludedList = [...excludedList];
    tempExcludedList.splice(index, 1);
    setExcludedList(tempExcludedList);
  };

  const handleRemove = (index: number) => {
    const tempExcludedList = [...excludedList];
    tempExcludedList.push(selectedList[index]);
    setExcludedList(tempExcludedList);
    const tempSelectedList = [...selectedList];
    tempSelectedList.splice(index, 1);
    setSelectedList(tempSelectedList);
  };

  const toggleDrawer = (open: boolean) => {
    setMenuOpen(open);
  };

  const { handleSubmit, register, control, errors, setValue } = useForm();


  return (
    <div>
      <Drawer
        open={isMenuOpen}
        anchor="right"
        onClose={ () => toggleDrawer(false) }
      >
        <div className="list-menu">
          <IconButton
            onClick={() => toggleDrawer(false)}
            aria-label="close drawer"
          >
            <CloseIcon />
          </IconButton>
        </div>
        <Box px={3}>
          <form  autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
            <div className="input-wrapper">
              <TextField 
              variant="outlined"
              margin="normal"
              fullWidth
              id="title"
              label="New item"
              type="text"
              name="title"
              autoComplete="title"
              autoFocus
              value={newItem && newItem.title}
              onChange={(event) =>
                setNewItem({ ...newItem, title: event.target.value, value: event.target.value.replace(/[^a-z0-9]/gi, '_') })
              }
              inputRef={register({
                required: 'Required',
              })}
              multiline
              rows={1}
              className="item__title"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              className="submit-form"
            >
              Add
            </Button></div>
          </form>
        </Box>
        <Box px={3}>
        <Typography  variant="h5" component="h3">Selected</Typography>
          { selectedList.map( (item, index) => <Fab className="list__item"  size="small"  variant="extended">{item.title}<ClearIcon  onClick={() => handleRemove(index)} /></Fab>)}
        </Box>
        <Box px={3}>
        <Typography  variant="h5" component="h3">Unselected</Typography>
          { excludedList.map( (item, index) => <Fab className="list__item"  size="small"  variant="extended">
            {item.title}<Checkbox
              checked={false}
              onChange={() => handleChange(index)}
              inputProps={{ 'aria-label': 'primary checkbox' }}/></Fab>)}
        </Box>
      </Drawer>
    </div>
  );
};

export default SharedListEditor;
