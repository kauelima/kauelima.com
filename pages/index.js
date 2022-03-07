import appConfig from '../config.json';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReactDOM from 'react-dom'
import * as React from 'react';
import Image from 'next/image'
import Fab from '@mui/material/Fab';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import profilePic from '../public/assets/kauelima.webp'
import { QuiltedImageList } from '../components/imageList';

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';

function Copyright() {
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#efbc49',
    },
    secondary: {
      main: '#363739',
    },
    background: {
      default: '#f5f5ef',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Fredoka',
    h1: {
      fontFamily: 'Fredoka',
      fontWeight: 600,
    },
  },
});

export default function kaueLima() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
      <Head>
        <title>{appConfig.name}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={appConfig.miniBio}/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: `${appConfig.theme.colors['yellow']}`,
            minHeight: 500,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={2}>
            <Stack direction="column" spacing={2}>
                <Typography
                  component="h1"
                  variant="h1"
                  align="left"
                  color="text.primary"
                >
                  {appConfig.name}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Fab href="https://www.linkedin.com/in/kauelima"  color="dark" aria-label="LinkedIn" target="_blank" sx={{ backgroundColor: `${appConfig.theme.colors['gray1']}` }} >
                    <LinkedInIcon sx={{ color: `${appConfig.theme.colors['yellow']}` }} />
                  </Fab>
                  <Fab href="https://www.telegram.me/kauelima" color="dark" aria-label="Telegram" target="_blank" sx={{ backgroundColor: `${appConfig.theme.colors['gray1']}` }} >
                    <TelegramIcon sx={{ color: `${appConfig.theme.colors['yellow']}` }} />
                  </Fab>
                  <Fab href="mailto:kaue@kauelima.com" color="dark" aria-label="Email" target="_blank" sx={{ backgroundColor: `${appConfig.theme.colors['gray1']}` }} >
                    <MailIcon sx={{ color: `${appConfig.theme.colors['yellow']}` }} />
                  </Fab>
                  <Fab href="https://www.twitter.com/kauelima" color="dark" aria-label="Twitter" target="_blank" sx={{ backgroundColor: `${appConfig.theme.colors['gray1']}` }} >
                    <TwitterIcon sx={{ color: `${appConfig.theme.colors['yellow']}` }} />
                  </Fab>
                </Stack>
                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                {appConfig.miniBio}
                </Typography>
              </Stack>
              <Image
                src={profilePic}
                alt={'"' + appConfig.name + '"'}
                layout={'intrinsic'}
                objectFit={'contain'}
             />
             </Stack>
            </Container>
          </Box>
        {/* End hero unit */}
        <Container maxWidth="lg">
        <QuiltedImageList />
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
