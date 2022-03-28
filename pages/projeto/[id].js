import React from 'react';
import { AppBar, Typography, Toolbar, Box, Container, Stack } from '@mui/material';
import appConfig from '../../config.json';
import { Copyright } from '../../components/copyright';
import { useRouter } from 'next/router'
import { minHeight } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';

export default function Project({ project }) {
  const tagList = project.tags
  const imgSection1 = project.section1Image
  const imgSection2 = project.section2Image
  const imgSection3 = project.section3Image
  const imgSection4 = project.section4Image
 
  return (
    <>
    {/* App Bar */}
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
      {/* END App Bar */}
      <main>

      {/* Project Hero */}
      <Box
        sx={{
          bgcolor: `${project.color}`,
          minHeight: 300,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
          >
            {project.title}
          </Typography>
        </Container>
      </Box>
      {/* END Project Hero */}

      <Container maxWidth="lg" 
      sx={{
        padding:'24px 24px'
      }}
      >
        <Stack spacing={4}>
        {/* Project base */}
        <Stack>
        <Stack direction='row'>
          {tagList.map((tag, i) => (
          <>
            <Typography component="span" variant="h6" align="left" color="text.secondary">
              {tag}
              { tagList.length - 1 === i ?
              null : 
              '\u00A0' + '•' + '\u00A0'}
            </Typography>
          </>
          ))}
        </Stack>
          <Typography component="p" variant="p" align="left" color="text.secondary" paragraph>
            Projeto desenvolvido para <a href={project.clientLink} target="_blank" style={{textDecoration: 'underline'}}>{project.client}</a>
          </Typography>
          
          <Typography component="p" variant="p" align="left" color="text.secondary" paragraph>
            {project.description} 
            <br />
          </Typography>
          
          <Box 
          sx={{
            bgcolor: `${project.color}`, 
            boxShadow: '0px 3px 6px #00000029',
            borderRadius: '30px', 
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Image
              src={project.img}
              height={400}
              width={400}
              />
          </Box>
        </Stack>
        {/* END Project base */}

        {/* Section 1 */}
        <Stack>
        {project.section1Title ? 
          <Typography component="h2" variant="h4" align="left" color="text.secondary" paragraph>
            {project.section1Title} 
          </Typography>
          : null}

          {project.section1Text ?
          <Typography component="p" variant="p" align="left" color="text.secondary" paragraph>
            {project.section1Text} 
            <br />
          </Typography>
          : null}
          
          {project.section1Image ?
          <Box 
          sx={{
            bgcolor: 'white', 
            boxShadow: '0px 3px 6px #00000029',
            borderRadius: '30px', 
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          {imgSection1.map((img) => (
            <Image
              src={img.url}
              height={400}
              width={800}
            />
          ))}
          </Box>
          : null}
        </Stack>
        {/* END Section 1 */}

        {/* Section 2 */}
        <Stack>
        {project.section2Title ? 
          <Typography component="h2" variant="h4" align="left" color="text.secondary" paragraph>
            {project.section2Title} 
          </Typography>
          : null}

          {project.section2Text ?
          <Typography component="p" variant="p" align="left" color="text.secondary" paragraph>
            {project.section2Text} 
            <br />
          </Typography>
          : null}
          
          {project.section2Image ?
          <Box 
          sx={{
            bgcolor: 'white', 
            boxShadow: '0px 3px 6px #00000029',
            borderRadius: '30px', 
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          {imgSection2.map((img) => (
            <Image
              src={img.url}
              height={400}
              width={800}
            />
          ))}
          </Box>
          : null}
        </Stack>
        {/* END Section 2 */}

        {/* Section 3 */}
        <Stack>
        {project.section3Title ? 
          <Typography component="h2" variant="h4" align="left" color="text.secondary" paragraph>
            {project.section3Title} 
          </Typography>
          : null}

          {project.section3Text ?
          <Typography component="p" variant="p" align="left" color="text.secondary" paragraph>
            {project.section3Text} 
            <br />
          </Typography>
          : null}
          
          {project.section3Image ?
          <Box 
          sx={{
            bgcolor: 'white', 
            boxShadow: '0px 3px 6px #00000029',
            borderRadius: '30px', 
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          {imgSection3.map((img) => (
            <Image
              src={img.url}
              height={400}
              width={800}
            />
          ))}
          </Box>
          : null}
        </Stack>
        {/* END Section 3 */}

        {/* Section 4 */}
        <Stack>
        {project.section4Title ? 
          <Typography component="h2" variant="h4" align="left" color="text.secondary" paragraph>
            {project.section4Title} 
          </Typography>
          : null}

          {project.section4Text ?
          <Typography component="p" variant="p" align="left" color="text.secondary" paragraph>
            {project.section4Text} 
            <br />
          </Typography>
          : null}
          
          {project.section4Image ?
          <Box 
          sx={{
            bgcolor: 'white', 
            boxShadow: '0px 3px 6px #00000029',
            borderRadius: '30px', 
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          {imgSection4.map((img) => (
            <Image
              src={img.url}
              height={400}
              width={800}
            />
          ))}
          </Box>
          : null}
        </Stack>
        {/* END Section 4 */}
        </Stack>
        

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