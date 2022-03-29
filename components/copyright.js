import { Typography, Link } from '@mui/material';
import appConfig from '../config.json';

export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://kauelima.com/">
        {appConfig.name}
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}