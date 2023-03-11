import { HTMLAttributes } from 'react';
import classnames from 'classnames';
import './styles.scss';

export const GridWrapper = ({
  children,
  className = '',
  ...props
}: React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={classnames('item-card', className)} {...props}>
      {children}
    </div>
  );
};
