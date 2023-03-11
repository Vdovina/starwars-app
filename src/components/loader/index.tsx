import { CircularProgress } from '@mui/material';
import './styles.scss';

export const Loader = () => (
  <div className="loader">
    <CircularProgress color="inherit" />
  </div>
);
