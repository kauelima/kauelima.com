import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import projectsData from '../projects'

export function QuiltedImageList() {
    return (
      <ImageList
        variant="quilted"
        cols={3}
        rowHeight={300}
      >
        {projectsData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}> 
              <img
                src={item.img}
                title={item.title}
                rows={item.rows}
                cols={item.cols}
                alt={item.title}
                loading="lazy"
              />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }