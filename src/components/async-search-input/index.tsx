import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, CircularProgress } from '@mui/material';
import './styles.css';

interface IAsyncSearchInputProps {
  apiRoute: string;
  field: string;
  noOptionsText?: string;
  value: any;
  onChange(value: any): void;
}

export const AsyncSearchInput = ({ apiRoute, field, noOptionsText, value, onChange }: IAsyncSearchInputProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    // if (!open) {
    //   setOptions([]);
    // }
  }, [open]);

  useEffect(() => {
    if (inputValue) {
      setLoading(true);
      fetch(`${apiRoute}/?search=${inputValue}`)
        .then((response) => response.json())
        .then((data) => {
          setOptions(data.results);
          setLoading(false);
        })
        .catch(() => {
          setOptions([]);
        });
    } else {
      setOptions([]);
    }
  }, [apiRoute, inputValue]);

  return (
    <Autocomplete
      autoComplete
      id="search"
      className="autocomplete-input"
      noOptionsText={noOptionsText}
      options={options}
      value={value}
      getOptionLabel={(option) => option[field]}
      onChange={(_, val) => onChange(val)}
      
      
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) => option[field] === value[field]}
      
      loading={loading}
      size="small"
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search character..."
          value={inputValue ?? ''}
          onChange={({ target: { value } }) => setInputValue(value)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};
