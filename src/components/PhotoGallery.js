import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, listAll, getMetadata } from 'firebase/storage';
import { storage } from '../firebaseConfig.js';
import EXIF from 'exif-js';
import './PhotoGallery.css';

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchPhotos();
  });

  const fetchPhotos = async () => {
    try {
      const listRef = ref(storage, 'photos/');
      const res = await listAll(listRef);
      const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
      const photosWithDates = await Promise.all(urls.map(async (url, index) => {
        const dateTaken = await getDateTaken(url, res.items[index]);
        const metadata = await getMetadata(res.items[index]);
        return { url, name: res.items[index].name, dateTaken, metadata };
      }));
      photosWithDates.sort((a, b) => new Date(a.dateTaken) - new Date(b.dateTaken));
      setPhotos(photosWithDates);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const getDateTaken = (url, fileRef) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        EXIF.getData(img, function() {
          const dateTaken = EXIF.getTag(this, 'DateTimeOriginal');
          if (dateTaken) {
            resolve(dateTaken);
          } else {
            // Fallback to the file's last modified date if EXIF data is not available
            getMetadata(fileRef).then(metadata => {
              const lastModified = metadata.updated;
              resolve(lastModified);
            }).catch(() => {
              resolve('1970-01-01'); // Default to epoch if no date found
            });
          }
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

    setUploading(true);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle progress
      },
      (error) => {
        console.error(error);
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const newPhoto = { url: downloadURL, name: file.name, dateTaken: new Date().toISOString() };
          setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
          setFile(null);
          setUploading(false);

          
        });
      }
    );
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-gallery">
      <div className="upload-section">
        <input type="file" id="file-input" onChange={handleFileChange} />
        <label htmlFor="file-input" className="custom-file-upload">
          Choose File
        </label>
        <button onClick={handleUpload} disabled={!file || uploading}>
          {uploading ? 'Uploading...' : 'Upload Photo'}
        </button>
      </div>
      <div className="gallery">
        {photos.map((photo, index) => (
          <div key={index} className="photo-container" onClick={() => openModal(photo)}>
            <img src={photo.url} alt="engagement" />
          </div>
        ))}
      </div>
      {selectedPhoto && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedPhoto.url} alt={selectedPhoto.name} />
            <div className="photo-details">
              <p><strong>Date Taken:</strong> {selectedPhoto.dateTaken}</p>
              <p><strong>Location:</strong> {selectedPhoto.metadata?.customMetadata?.location || 'Unknown'}</p>
              <p><strong>Caption:</strong> {selectedPhoto.metadata?.customMetadata?.caption || 'No caption'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;