import appConfig from '../config.json';
import Head from 'next/head'
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

export default function kaueLima() {
  return (
    <>
      <main>
      <Head>
        <title>{appConfig.name}</title>
        <meta name="description" content={appConfig.miniBio}/>
        <meta property="og:title" content={appConfig.name} />
        <meta property="og:url" content="https://kauelima.com/" />
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
                  <Fab href="https://www.linkedin.com/in/kauelima"  color="secondary" aria-label="LinkedIn" target="_blank" >
                    <LinkedInIcon sx={{ color: `${appConfig.theme.colors['yellow']}` }} />
                  </Fab>
                  <Fab href="https://www.telegram.me/kauelima" color="secondary" aria-label="Telegram" target="_blank" >
                    <TelegramIcon sx={{ color: `${appConfig.theme.colors['yellow']}` }} />
                  </Fab>
                  <Fab href="mailto:kaue@kauelima.com" color="secondary" aria-label="Email" target="_blank" >
                    <MailIcon sx={{ color: `${appConfig.theme.colors['yellow']}` }} />
                  </Fab>
                  <Fab href="https://www.twitter.com/kauelima" color="secondary" aria-label="Twitter" target="_blank" >
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
    </>
  );
}
