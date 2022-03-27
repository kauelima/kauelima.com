import React from 'react';
import { AppBar, Typography, Toolbar, Box, Container, Link } from '@mui/material';
import appConfig from '../../config.json';
import { Copyright } from '../../components/copyright';
import { useRouter } from 'next/router'

export default function Project({ project }) {

  return (
    <>
      <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar variant="regular">
          <Typography 
            variant="h5"
            noWrap
            component="a"
          >
            <Link href="../" color="secondary" underline="none">
              Kaue Lima
            </Link>
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>
      <main>

      <Box
        sx={{
          bgcolor: `${project.color}`,
          minHeight: 400,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="lg">
        </Container>
      </Box>
      <Container maxWidth="lg">
      <Typography
        component="h1"
        variant="h4"
        align="left"
        color="text.primary"
      >
        {project.title}
      </Typography>

      <Typography component="p" variant="p" align="left" color="text.secondary" paragraph>
        {project.description} 
        <br />
      </Typography>
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

export async function getStaticProps({ params }) {
  const projectId = params.id

    const project = await fetch(`https://kauelima.com/api/getProjects/${projectId}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Não foi possível carregar os projetos');
    })
      .then((resObject) => resObject);
  
    return {
      props: {
        project,
      },
    };
  }

export async function getStaticPaths() {
return {
    paths: [
    {
        params: {
        id: 'recCsBkIWSI0zs9IT',
        slug: 'fieldy',
        },
    },
    {
        params: {
        id: 'reclx9Q3qbD4JtRYn',
        slug: 'expedicao',
        },
    },
    {
        params: {
        id: 'recIAXJPNRTMsba9D',
        slug: 'restaurante',
        },
    },
    {
        params: {
        id: 'recorqorfNBVU3g7H',
        slug: 'delivery-center',
        },
    },
    {
        params: {
        id: 'reccSLlW396ONBx3m',
        slug: 'entregador',
        },
    },
    {
        params: {
        id: 'recoEn64A542p6N5n',
        slug: 'conectapay',
        },
    },
    ],
    fallback: false,
};
}