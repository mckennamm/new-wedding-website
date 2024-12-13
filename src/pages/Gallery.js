//imports
import React from 'react';
import PhotoGallery from '../components/PhotoGallery.js';

//styles
import './Gallery.css'; 

function Gallery() {
  return (
    <>
    <div className="main-gallery">
      <h1>Photo Gallery</h1>
    </div>
    <p>Have some photos of the couple you want to share?</p>
    <PhotoGallery />
    </>
  );
}

export default Gallery;