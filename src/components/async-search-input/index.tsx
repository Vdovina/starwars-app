import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, CircularProgress } from '@mui/material';
import './styles.css';

interface IAsyncSearchInputProps {
  apiRoute: string;
  labelField: string;
  value: any;
  onChange(value: any): void;
}

export const AsyncSearchInput = ({ apiRoute, labelField, value, onChange }: IAsyncSearchInputProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
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
  }, [inputValue]);

  return (
    <Autocomplete
      id="search"
      className="autocomplete-input"
      value={value}
      onChange={(e, val) => onChange(val)}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) => option[labelField] === value[labelField]}
      getOptionLabel={(option) => option[labelField]}
      options={options}
      loading={loading}
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
