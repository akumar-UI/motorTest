import React, { useEffect, useState } from 'react';
import './App.css';
import Contact from './Contact';

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <Contact />
      <div className="imageComp">
        {
          images && images.map(img => (

            <div key={img.id} className="box" >
              <div className="box__front">
                <img src={img.url} alt='' />
              </div>
              <div className="box__back">
                <h1>{img.user.name}</h1>
                <img src={img.user.profile_image} alt='' className="userImage" />
              </div>

            </div>
          ))
        }
      </div>

    </div>
  );
}

export default App;
