// src/components/PhotoGallery.js
import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { storage } from '../firebaseConfig';
import EXIF from 'exif-js';
import './PhotoGallery.css';

function PhotoGallery() {
  const [file, setFile] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const listRef = ref(storage, 'photos/');
      const res = await listAll(listRef);
      const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
      const photosWithDates = await Promise.all(urls.map(async (url, index) => {
        const dateTaken = await getDateTaken(url);
        return { url, name: res.items[index].name, dateTaken };
      }));
      photosWithDates.sort((a, b) => new Date(a.dateTaken) - new Date(b.dateTaken));
      console.log('Sorted Photos:', photosWithDates); // Debugging log
      setPhotos(photosWithDates);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const getDateTaken = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        EXIF.getData(img, function() {
          const dateTaken = EXIF.getTag(this, 'DateTimeOriginal');
          console.log('Date Taken:', dateTaken); // Debugging log
          resolve(dateTaken || '1970-01-01'); // Default to epoch if no date found
        });
      };
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `photos/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Set max retry time to 10 minutes (600000 milliseconds)
    uploadTask.maxUploadRetryTime = 600000;

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle progress
      },
      (error) => {
        console.error(error);
        setError('Upload failed, please try again.');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setPhotos((prevPhotos) => [...prevPhotos, { url: downloadURL, name: file.name, dateTaken: new Date().toISOString() }]);
          setError(null);
        });
      }
    );
  };

  const handleDelete = (name) => {
    const photoRef = ref(storage, `photos/${name}`);
    deleteObject(photoRef)
      .then(() => {
        setPhotos((prevPhotos) => prevPhotos.filter(photo => photo.name !== name));
      })
      .catch((error) => {
        console.error('Error deleting photo:', error);
        setError('Delete failed, please try again.');
      });
  };

  const handleImageLoad = (index, event) => {
    const img = event.target;
    const aspectRatio = img.naturalWidth > img.naturalHeight ? 'landscape' : 'portrait';
    setPhotos((prevPhotos) => {
      const newPhotos = [...prevPhotos];
      newPhotos[index].aspectRatio = aspectRatio;
      return newPhotos;
    });
  };

  return (
    <div className="photo-gallery">
      <input type="file" id="file-input" onChange={handleFileChange} />
      <label htmlFor="file-input" className="upload-button">Choose File</label>
      <button className="upload-button" onClick={handleUpload}>Upload Photo</button>
      {error && <p className="error">{error}</p>}
      <div className="gallery">
        {photos.map((photo, index) => (
          <div key={index} className={`photo-container ${photo.aspectRatio}`}>
            <img src={photo.url} alt={`Photo ${index + 1}`} onLoad={(event) => handleImageLoad(index, event)} />
            <button className="delete-button" onClick={() => handleDelete(photo.name)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;