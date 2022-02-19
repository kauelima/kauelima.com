import appConfig from '../config.json';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactDOM from 'react-dom'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://kauelima.com/">
        Kaue Lima
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: `${appConfig.theme.colors['yellow']}`,
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
          <Stack direction="row" spacing={2}>

          <Stack direction="column" spacing={2}>
              <Typography
                component="h1"
                variant="h2"
                align="left"
                color="text.primary"
                gutterBottom
              >
                Album layout
              </Typography>
              <Typography variant="h5" align="left" color="text.secondary" paragraph>
                Something short and leading about the collection below—its contents,
                the creator, etc. Make it short and sweet, but not too short so folks
                don&apos;t simply skip over it entirely. a
              </Typography>
            </Stack></Stack>
            </Container>
          </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: `${appConfig.theme.colors['yellow']}`, p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
