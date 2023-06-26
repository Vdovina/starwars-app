import { useEffect, useState } from 'react';
import { SearchIcon } from '../../icons/search-icon';
import { Input } from '../input';
import { useDebounce } from '../../use/useDebounce';

export const SearchInput = ({ value, onChange }) => {
  const [currentValue, setCurrentValue] = useState('');
  const debounsedValue = useDebounce(currentValue);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  useEffect(() => {
    onChange(debounsedValue);
  }, [debounsedValue]);

  return (
    <Input firstIcon={<SearchIcon />} placeholder="Search characters" value={currentValue} onChange={setCurrentValue} />
  );
};
