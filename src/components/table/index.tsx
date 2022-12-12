import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination } from '@mui/material';
import Paper from '@mui/material/Paper';
import { AsyncSearchInput } from '../../components/async-search-input';
import { getId } from '../../utils/getId';
import './styles.css';

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
  currentPage: number;
  setCurrentPage(page: number): void;
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
  currentPage,
  setCurrentPage,
  searchValue,
  setSearchValue,
  searchField,
  searchApi,
  onRowClick,
}: ITableProps<T>) => {
  return (
    <div className="grid-container">
      <AsyncSearchInput value={searchValue} apiRoute={searchApi} labelField={searchField} onChange={setSearchValue} />
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
          rowsPerPage={10}
          page={currentPage}
          onPageChange={(e, page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};
