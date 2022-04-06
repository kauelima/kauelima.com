import appConfig from '../config.json';
import Head from 'next/head'
import * as React from 'react';
import Image from 'next/image'
import { Fab, Stack, Box, Typography, Container } from '@mui/material';
import profilePic from '../public/assets/kauelima.webp'
import { QuiltedImageList } from '../components/imageList';
import { Copyright } from '../components/copyright';
import { useRouter } from 'next/router';

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Page() {
  const router = useRouter();
  const { locale } = router;

  const miniBio = locale === 'en' ?  appConfig.miniBio_en : appConfig.miniBio_ptBR;

  return (
    <>
      <main>
      <Head>
        <title>{appConfig.name}</title>
        <meta name="description" content={miniBio}/>
        <meta property="og:title" content={appConfig.name} />
        <meta property="og:url" content="https://kauelima.com/" />
      </Head>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: `primary.main`,
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
                    <LinkedInIcon sx={{ color: `primary.main` }} />
                  </Fab>
                  <Fab href="https://www.telegram.me/kauelima" color="secondary" aria-label="Telegram" target="_blank" >
                    <TelegramIcon sx={{ color: `primary.main` }} />
                  </Fab>
                  <Fab href="mailto:kaue@kauelima.com" color="secondary" aria-label="Email" target="_blank" >
                    <MailIcon sx={{ color: `primary.main` }} />
                  </Fab>
                  <Fab href="https://www.twitter.com/kauelima" color="secondary" aria-label="Twitter" target="_blank" >
                    <TwitterIcon sx={{ color: `primary.main` }} />
                  </Fab>
                </Stack>
                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                {miniBio}
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
      <Box sx={{ bgcolor: `primary.main`, p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </>
  );
}
