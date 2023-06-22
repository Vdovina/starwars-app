import classNames from 'classnames';
import React, { useRef } from 'react';
import { useTable, Column } from 'react-table';
import { getId } from '../../utils/getId';
import './styles.scss';

export type TColumn<T> = Omit<Column, 'accessor'> & {
  accessor: keyof T;
};

export type TRow<T> = T & {
  name: string;
  url: string;
};

interface ITableProps<T> {
  rows: any[];
  columns: TColumn<T>[];
  total: number;
  page?: number;
  setPage?(page: number): void;
  size?: number;
  setSize?(size: number): void;
  loading?: boolean;

  searchValue: any;
  setSearchValue(value: any): void;
  searchField: string;
  searchApi: string;

  onRowClick?(id: string): void;
  onLoad?(pages: number[]): void;
}

const AVG_ROW_HEIGHT = 54;
const BUFFERED_ROWS = 5;

export const Grid = <T extends object>({
  rows: data,
  columns,
  total,
  page = 0,
  size = 10,
  loading,
  setPage,
  setSize,
  onRowClick,
  onLoad,
}: ITableProps<T>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
  const bodyRef = useRef<HTMLTableElement>(null);

  const onScroll = (e) => {
    const firstIndex = Math.max(Math.floor(e.currentTarget.scrollTop / AVG_ROW_HEIGHT) - BUFFERED_ROWS, 0);
    const lastIndex = Math.min(
      Math.ceil(((bodyRef?.current?.offsetHeight ?? 0) + e.currentTarget.scrollTop) / AVG_ROW_HEIGHT - 1 + BUFFERED_ROWS),
      total - 1
    );
    const firstPage = Math.floor(firstIndex / size);
    const index = firstPage;
    const pageRange = Array.from({ length: Math.floor(lastIndex / size) - firstPage + 1 }, (_, i) => index + i);
    const currentPages = Array.from({ length: Math.floor(rows.length / size) - firstPage }, (_, i) => index + i);
    const exceptedPages = pageRange.filter((page) => !currentPages.includes(page));
    console.log(firstIndex, lastIndex, size, rows.length, total, pageRange, currentPages, exceptedPages);
    if (onLoad && exceptedPages.length) {
      onLoad(exceptedPages);
    }
  };

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          <tr {...headerGroups[0].getHeaderGroupProps()}>
            {headerGroups[0].headers.map((column) => (
              <th
                key={column.id}
                {...column.getHeaderProps({
                  className: classNames(column.className),
                  style: column.style,
                })}
              >
                <div>{column.render('Header')}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody ref={bodyRef} {...getTableBodyProps()} onScroll={onScroll}>
          {rows.length === 0 && (
            <div className="msg-placeholder">
              <div className="msg-error">Information not found</div>
            </div>
          )}
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                onClick={() => {
                  if (onRowClick) {
                    onRowClick(getId(row.original.url));
                  }
                }}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps({
                        className: cell.column.className,
                        style: cell.column.style,
                      })}
                      key={cell.id}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
