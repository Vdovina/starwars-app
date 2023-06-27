import { useEffect, useState } from 'react';
import { SearchIcon } from '../../icons/search-icon';
import { Input } from '../input';
import { useDebounce } from '../../use/use-debounce';

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange(value: string): void;
}

export const SearchInput = ({ placeholder, value, onChange }: SearchInputProps) => {
  const [currentValue, setCurrentValue] = useState('');
  const debounsedValue = useDebounce(currentValue);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  useEffect(() => {
    onChange(debounsedValue);
  }, [debounsedValue, onChange]);

  return <Input firstIcon={<SearchIcon />} placeholder={placeholder} value={currentValue} onChange={setCurrentValue} />;
};
