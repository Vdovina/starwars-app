import { HTMLAttributes } from 'react';
import classnames from 'classnames';
import './styles.css';

type IBlockProps = HTMLAttributes<HTMLDivElement>;

export const GridWrapper = ({ children, className = '', ...props }: IBlockProps) => {
  return (
    <div className={classnames('item-card', className)} {...props}>
      {children}
    </div>
  );
};
