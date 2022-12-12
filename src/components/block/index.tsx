import { HTMLAttributes } from 'react';
import classnames from 'classnames';
import './styles.css';

type IBlockProps = HTMLAttributes<HTMLDivElement>;

export const Block = ({ children, className = '', ...props }: IBlockProps) => {
  return (
    <div className={classnames('block', className)} {...props}>
      {children}
    </div>
  );
};
