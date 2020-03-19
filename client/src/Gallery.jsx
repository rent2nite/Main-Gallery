import React from 'react';
import ImageEntry from './ImageEntry.jsx';

const Gallery = (props) => (
  <div>
    {props.images.map((img) => (
      <ImageEntry img={img} key={img.id} />
    ))}
  </div>
);

export default Gallery;