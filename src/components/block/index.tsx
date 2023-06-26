import { HTMLAttributes } from 'react';
import classnames from 'classnames';
import './styles.scss';

type IBlockProps = { title?: string } & HTMLAttributes<HTMLDivElement>;

export const Block = ({ children, className = '', title, ...props }: IBlockProps) => {
  return (
    <div className={classnames('block', className)} {...props}>
      {title && <div className='block__title'>{title}</div>}
      {children}
    </div>
  );
};
