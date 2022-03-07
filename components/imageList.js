import * as React from 'react';
import { ImageList, ImageListItem, ImageListItemBar,IconButton } from '@mui/material';
import projectsData from '../projects'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



export function QuiltedImageList() {
    const theme = createTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('md'))
    return (
      <ImageList
        variant="quilted"
        cols={3}
        rowHeight={300}
        
      >
        {projectsData.map((item) => (
          <ImageListItem 
            key={item.img}             
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
              style={{boxShadow: '0px 3px 6px #00000029',borderRadius: '20px'}}     
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.client}
              style={{borderRadius: '0 0 20px 20px'}}
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }