import React from 'react';
import classNames from 'classnames';
import { CloseIcon } from '../../icons/close-icon';
import './styles.scss';

interface InputProps {
  className?: string;
  clearable?: boolean;
  firstIcon?: React.ReactNode;
  label?: string;
  placeholder?: string;
  value: string | undefined;
  onChange(value: any): void;
}

export const Input = ({ className, clearable = false, firstIcon, label, placeholder = '', value, onChange }: InputProps) => {
  return (
    <div className={classNames('input__wrapper', className)}>
      {label && <span className="input__label">{label}</span>}
      <div className="input__container">
        {firstIcon && <div className="input__first-icon">{firstIcon}</div>}
        <input
          className={classNames('input__component', firstIcon && 'input__with-icon')}
          placeholder={placeholder}
          value={value}
          onChange={({ target }) => onChange(target.value)}
        />
        <div className="input__actions">
          {clearable && (
            <div onClick={() => onChange('')}>
              <CloseIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
