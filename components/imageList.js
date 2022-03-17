import * as React from 'react';
import { ImageList, ImageListItem, ImageListItemBar,IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export async function getStaticProps() {
  const pokemons = await fetch('/api/getProjects')
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Não foi possível carregar os projetos');
    })
    .then((resObject) => resObject);

  return {
    props: {
      projects,
    },
  };
}


export function QuiltedImageList(props) {
    const theme = createTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('md'));
    const { projects } = props;

    return (
      <ImageList
        variant="quilted"
        cols={3}
        rowHeight={300}
        
      >
        {projects.map((item) => (
          <ImageListItem 
            key={item.title}
            cols={isMobile ? item.cols : 3}
            rows={isMobile ? item.rows : 2}
          > 
            <img
              rows={item.rows}
              cols={item.cols}
              src={item.img}
              title={item.title}
              alt={item.title}
              loading="lazy"
              style={{boxShadow: '0px 3px 6px #00000029',borderRadius: '30px'}}     
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.client}
              style={{borderRadius: '0 0 30px 30px'}}
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }