import { Suspense } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import { getId } from '../../utils/getId';
import './styles.scss';
import { Loader } from '../loader';

export type TColumn<T> = {
  id: keyof T;
  label: string;
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

  searchValue: any;
  setSearchValue(value: any): void;
  searchField: string;
  searchApi: string;

  onRowClick?(id: string): void;
}

export const Grid = <T extends object>({
  rows,
  columns,
  total,
  page = 0,
  size = 10,
  setPage,
  setSize,
  onRowClick,
}: ITableProps<T>) => {
  return (
    <Suspense fallback={<Loader />}>
      {/* <div className="grid-container"> */}
      <div className="table-container">
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={String(column.id)}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  hover
                  onClick={() => {
                    if (onRowClick) {
                      onRowClick(getId(row.url));
                    }
                  }}
                >
                  {columns.map((column) => (
                    <TableCell key={String(column.id)}>{row[column.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          className="tfooter"
          count={total}
          rowsPerPage={size}
          page={page}
          onPageChange={(_, page) => {
            setPage && setPage(page);
          }}
          // onRowsPerPageChange={({ target: { value } }) => {
          //   setSize && setSize(Number(value));
          // }}
        />
      </div>
      {/* </div> */}
    </Suspense>
  );
};
