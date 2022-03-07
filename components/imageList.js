import * as React from 'react';
import { ImageList, ImageListItem, ImageListItemBar,IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import projectsData from '../projects'

export function QuiltedImageList() {
    return (
      <ImageList
        variant="quilted"
        cols={3}
        rowHeight={300}
        
      >
        {projectsData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} > 
              <img
                src={item.img}
                title={item.title}
                rows={item.rows}
                cols={item.cols}
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