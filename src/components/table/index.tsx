import { useRef } from 'react';
import classNames from 'classnames';
import { useTable, Column } from 'react-table';
import { getId } from '../../utils/get-id';
import { LoadingStatus } from '../../constants/statuses';
import { DotLoading } from '../../icons/dot-loading';
import './styles.scss';

export type TColumn<T> = Omit<Column, 'accessor'> & {
  accessor: keyof T;
};

export type TRow<T> = T & {
  name: string;
  url: string;
};

interface ITableProps<T> {
  rows: TRow<T>[];
  columns: TColumn<T>[];
  total: number;
  size?: number;
  loading?: LoadingStatus;
  onRowClick?(id: string): void;
  onLoad?(pages: number[]): void;
}

const AVG_ROW_HEIGHT = 54;
const BUFFERED_ROWS = 5;

export const Table = <T extends object>({
  rows: data,
  columns,
  total,
  size = 10,
  loading,
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
    const currentPages = Array.from({ length: Math.ceil(rows.length / size) - firstPage }, (_, i) => index + i);
    const expectedPages = pageRange.filter((page) => !currentPages.includes(page));
    if (onLoad && expectedPages.length) {
      onLoad(expectedPages);
    }
  };

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          <tr {...headerGroups[0]?.getHeaderGroupProps()}>
            {headerGroups[0]?.headers.map((column) => (
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
          {loading !== LoadingStatus.Loading && rows.length === 0 && (
            <tr className="msg-placeholder">
              <td className="msg-error">Information not found</td>
            </tr>
          )}
          {loading === LoadingStatus.Error && (
            <tr className="msg-placeholder">
              <td className="msg-error">Something went wrong</td>
            </tr>
          )}
          {loading !== LoadingStatus.Error && rows.map((row) => {
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
                      key={cell.id}
                      {...cell.getCellProps({
                        className: cell.column.className,
                        style: cell.column.style,
                      })}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          {loading === LoadingStatus.Loading && (
            <tr className="loader-placeholder">
              <td>
                <DotLoading />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
