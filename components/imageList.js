import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export function QuiltedImageList() {
    return (
      <ImageList
        variant="quilted"
        cols={3}
        rowHeight={200}
      >
        {itemData.map((item) => (
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
  
  const itemData = [
    {
      img: 'https://placekitten.com/500/500',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://placekitten.com/501/501',
      title: 'Burger',
    },
    {
      img: 'https://placekitten.com/502/502',
      title: 'Camera',
    },
    {
      img: 'https://placekitten.com/503/503',
      title: 'Coffee',
    },
    {
      img: 'https://placekitten.com/504/504',
      title: 'Hats',
    },
    {
      img: 'https://placekitten.com/505/505',
      title: 'Basketball',
    },
    {
      img: 'https://placekitten.com/506/506',
      title: 'Honey',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://placekitten.com/507/507',
      title: 'Tomato basil',
    },
    {
      img: 'https://placekitten.com/508/508',
      title: 'Fern',
    },
    {
      img: 'https://placekitten.com/509/509',
      title: 'Mushrooms',
      cols: 2,
    },
    {
      img: 'https://placekitten.com/510/510',
      title: 'Sea star',
    },
    {
      img: 'https://placekitten.com/511/511',
      title: 'Bike',
      rows: 2,
      cols: 3,
    },
  ];