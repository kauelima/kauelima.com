import React from 'react';
import { AppBar, Typography, Toolbar, Box, Container, Stack, IconButton } from '@mui/material';
import { Copyright } from '../../components/copyright';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from '@mui/icons-material';
import { useRouter } from 'next/router';

export default function Project({ project }) {
  const router = useRouter();
  const { locale } = router;

  const imgSection1 = project.section1Image
  const imgSection2 = project.section2Image
  const imgSection3 = project.section3Image
  const imgSection4 = project.section4Image
  
  const tagList = locale === 'en' ?  project.tags_en :  project.tags_ptBR;
  const description = locale === 'en' ?  project.description_en :  project.description_ptBR;
  const section1Title = locale === 'en' ?  project.section1Title_en :  project.section1Title_ptBR;
  const section2Title = locale === 'en' ?  project.section2Title_en :  project.section2Title_ptBR;
  const section3Title = locale === 'en' ?  project.section3Title_en :  project.section3Title_ptBR;
  const section4Title = locale === 'en' ?  project.section4Title_en :  project.section4Title_ptBR;
  const section1Text = locale === 'en' ?  project.section1Text_en :  project.section1Text_ptBR;
  const section2Text = locale === 'en' ?  project.section2Text_en :  project.section2Text_ptBR;
  const section3Text = locale === 'en' ?  project.section3Text_en :  project.section3Text_ptBR;
  const section4Text = locale === 'en' ?  project.section4Text_en :  project.section4Text_ptBR;
  const developedFor = locale === 'en' ?  "Project developed for" :  "Projeto desenvolvido para";
 
  return (
    <>
    {/* App Bar */}
      <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar variant="regular">
          <Stack 
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            <IconButton href="../" aria-label="Back">
              <ChevronLeft />
            </IconButton>
            <Image alt="Kaue Lima" src="/assets/kauelima.webp" width={64} height={64} objectFit="contain" objectPosition="left bottom"/>
            <Typography 
              variant="h5"
              noWrap
              component="a"
            >
              <Link href="../" color="secondary" underline="none">
                  Kaue Lima
              </Link>
            </Typography>
          </Stack>
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
        <Typography component="span" variant="h6" align="left" color="text.secondary" noWrap>
          {tagList.map((tag, i) => (
            <>
            {tag}
            { tagList.length - 1 === i ?
            null : 
            '\u00A0' + '•' + '\u00A0'}
            </>
          ))}
          </Typography>
        </Stack>
          <Typography component="p" variant="p" align="left" color="text.secondary" paragraph>
            {developedFor} <a href={project.clientLink} target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>{project.client}</a>
          </Typography>
          
          <Typography component="p" variant="p" align="left" color="text.secondary" paragraph>
            {description} 
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
              alt={project.title}
              />
          </Box>
        </Stack>
        {/* END Project base */}

        {/* Section 1 */}
        <Stack>
        {section1Title ? 
          <Typography component="h2" variant="h4" align="left" color="text.secondary" paragraph>
            {section1Title} 
          </Typography>
          : null}

          {section1Text ?
          <Typography component="p" variant="p" align="left" color="text.secondary" paragraph>
            {section1Text + "-" + locale} 
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
          <Image
            src={project.section1Image} 
            height={400}
            width={800}
            key={section1Title}
            alt={section1Title}
          />
          </Box>
          : null}
        </Stack>
        {/* END Section 1 */}

        {/* Section 2 */}
        <Stack>
        {section2Title ? 
          <Typography component="h2" variant="h4" align="left" color="text.secondary" paragraph>
            {section2Title} 
          </Typography>
          : null}

          {section2Text ?
          <Typography component="p" variant="p" align="left" color="text.secondary" paragraph>
            {section2Text} 
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
          <Image
            src={project.section2Image}
            height={400}
            width={800}
            key={section2Title}
            alt={section2Title}
          />
          </Box>
          : null}
        </Stack>
        {/* END Section 2 */}

        {/* Section 3 */}
        <Stack>
        {section3Title ? 
          <Typography component="h2" variant="h4" align="left" color="text.secondary" paragraph>
            {section3Title} 
          </Typography>
          : null}

          {section3Text ?
          <Typography component="p" variant="p" align="left" color="text.secondary" paragraph>
            {section3Text} 
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
            <Image
              src={project.section3Image}
              height={400}
              width={800}
              key={section3Title}
              alt={section3Title}
            />
          </Box>
          : null}
        </Stack>
        {/* END Section 3 */}

        {/* Section 4 */}
        <Stack>
        {section4Title ? 
          <Typography component="h2" variant="h4" align="left" color="text.secondary" paragraph>
            {section4Title} 
          </Typography>
          : null}

          {section4Text ?
          <Typography component="p" variant="p" align="left" color="text.secondary" paragraph>
            {section4Text} 
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
            <Image
              src={project.section4Image}
              height={400}
              width={800}
              key={section4Title}
              alt={section4Title}
            />
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
        locale: 'en',
    },
    {
        params: {
        id: 'reclx9Q3qbD4JtRYn',
        slug: 'expedicao',
        },
        locale: 'en',
    },
    {
        params: {
        id: 'recIAXJPNRTMsba9D',
        slug: 'restaurante',
        },
        locale: 'en',
    },
    {
        params: {
        id: 'recorqorfNBVU3g7H',
        slug: 'delivery-center',
        },
        locale: 'en',
    },
    {
        params: {
        id: 'reccSLlW396ONBx3m',
        slug: 'entregador',
        },
        locale: 'en',
    },
    {
        params: {
        id: 'recoEn64A542p6N5n',
        slug: 'conectapay',
        },
        locale: 'en',
    },
    {
        params: {
        id: 'recCsBkIWSI0zs9IT',
        slug: 'fieldy',
        },
        locale: 'pt-BR',
    },
    {
        params: {
        id: 'reclx9Q3qbD4JtRYn',
        slug: 'expedicao',
        },
        locale: 'pt-BR',
    },
    {
        params: {
        id: 'recIAXJPNRTMsba9D',
        slug: 'restaurante',
        },
        locale: 'pt-BR',
    },
    {
        params: {
        id: 'recorqorfNBVU3g7H',
        slug: 'delivery-center',
        },
        locale: 'pt-BR',
    },
    {
        params: {
        id: 'reccSLlW396ONBx3m',
        slug: 'entregador',
        },
        locale: 'pt-BR',
    },
    {
        params: {
        id: 'recoEn64A542p6N5n',
        slug: 'conectapay',
        },
        locale: 'pt-BR',
    },
    ],
    fallback: false,
};
}