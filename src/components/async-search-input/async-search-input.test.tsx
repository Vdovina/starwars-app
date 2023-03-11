import { render, screen, act, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import { AsyncSearchInput } from '.';

const api = '';

describe('Async search input testing', () => {
  const [value, setValue] = useState('');
  render(<AsyncSearchInput value={value} apiRoute={api} field="Search" onChange={setValue} />);
  // const userInput = screen.getByTestId("input-field");
});
