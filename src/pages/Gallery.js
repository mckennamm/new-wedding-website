//imports
import React from 'react';
import PhotoGallery from '../components/PhotoGallery';

//styles
import './Gallery.css'; 

function Gallery() {
  return (
    <div className="main-gallery">
      <h1>Photo Gallery</h1>
      <p>Have some photos of the couple you want to share?</p>
      <PhotoGallery />
     
    </div>
  );
}

export default Gallery;