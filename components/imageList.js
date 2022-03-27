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
        console.log(resObject);
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
          <Link href={"/projeto/" + item.id}>
            <ImageListItem 
              key={item.fields.title}
              cols={isMobile ? item.fields.cols : 3}
              rows={isMobile ? item.fields.rows : 2}
            > 
              <img
                rows={item.fields.rows}
                cols={item.fields.cols}
                src={item.fields.img}
                title={item.fields.title}
                alt={item.fields.title}
                loading="lazy"
                style={{boxShadow: '0px 3px 6px #00000029',borderRadius: '30px', cursor: 'pointer'}}     
              />
              <ImageListItemBar
                title={item.fields.title}
                subtitle={item.fields.client}
                style={{borderRadius: '0 0 30px 30px'}}
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    );
  }