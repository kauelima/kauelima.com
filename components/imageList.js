import React, { useState } from 'react';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import Link from 'next/link'


export function QuiltedImageList(props) {
    const theme = createTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('md'));
    const [projects, setProjects] = useState([]);

    React.useEffect(() => {
      fetch('/api/getProjects')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
  
        throw new Error('Não foi possível carregar os projetos');
      })
      .then((resObject) => {
        setProjects(resObject);
      });
    }, []);

    return (
      <ImageList
        variant="quilted"
        cols={3}
        gap={10}
        rowHeight={300}
        
      >
        {projects.map((item) => (
          <Link href={"/proj/" + item.id} key={item.title} passHref>
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
                style={{boxShadow: '0px 3px 6px #00000029',borderRadius: '30px', cursor: 'pointer'}}     
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.client}
                style={{borderRadius: '0 0 30px 30px'}}
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    );
  }