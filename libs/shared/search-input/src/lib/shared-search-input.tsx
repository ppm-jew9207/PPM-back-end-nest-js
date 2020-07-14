import React, { useState, useMemo, ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { debounce } from 'lodash';

import './shared-search-input.scss';

export interface SharedSearchInputProps {
  onSearch: (code: string) => void;
}

export const SharedSearchInput = (props: SharedSearchInputProps) => {
  const [inputText, setInputText] = useState('');

  const waitTime = useMemo(
    () =>
      debounce((searchString: string) => {
        props.onSearch(searchString);
      }, 500),
    [props]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    waitTime(e.target.value);
  };

  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>
        <SearchIcon />
      </Grid>
      <Grid item>
        <TextField label="Search" onChange={handleChange} value={inputText} />
      </Grid>
    </Grid>
  );
};

export default SharedSearchInput;
