import React from 'react';
import './styles.scss';

export const TableWrapper = ({ children }: React.PropsWithChildren) => {
  return <div className="table-wrapper">{children}</div>;
};
