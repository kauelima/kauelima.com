import appConfig from '../config.json';
import Head from 'next/head'
import * as React from 'react';
import { Copyright } from '../components/copyright';
import { Box, Typography, Container, Button, Stack } from '@mui/material';

export default function Custom404() {
    return (
    <>
        <main>
        <Head>
            <title>{appConfig.name}</title>
            <meta name="description" content={appConfig.miniBio}/>
            <meta property="og:title" content={appConfig.name} />
            <meta property="og:url" content="https://kauelima.com/" />
        </Head>
        <Box
        sx={{
            width: '100vw',
            height: '80vh',
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            <Container maxWidth="md">
                <Stack>
                    <Typography variant="h5" component="h1" align='center'>
                    404
                    </Typography><br />
                    <Typography variant="h1" component="h2" align='center'>
                    Ops!
                    </Typography><br />
                    <Typography variant="h3" component="h3" align='center'>
                    A página que você procurava parece que não está mais aqui
                    </Typography><br />

                    <Button size="large" color="secondary" href="/">Voltar para kauelima.com</Button>
                </Stack>
            </Container>

        </Box>
        {/* Footer */}
        <Box sx={{ bgcolor: `primary.main`, p: 6,
            height: '20vh',}} component="footer">
            <Copyright />
        </Box>
        {/* End footer */}
        </main>
    </>
    )
  }