import React from 'react';
import { TextField } from '@mui/material';
import './styles.scss';

interface InputProps {
  label: string;
  value: string | undefined;
  onChange(value: any): void;
}

export const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <TextField
      className="input-wrapper"
      fullWidth
      size="small"
      label={label}
      value={value ?? ''}
      onChange={({ target: { value } }) => onChange(value)}
    />
  );
};
