import classNames from 'classnames';
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
}

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
}: ITableProps<T>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <>
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
          <tbody {...getTableBodyProps()}>
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
    </>
  );
};
