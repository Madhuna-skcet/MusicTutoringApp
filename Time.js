import Button from '@mui/material/Button';
import * as React from 'react';
import Checkt from './Checkt';
import { useNavigate } from "react-router-dom";
const Service = () => {
    const navigate = useNavigate();
  const next = () => {
    navigate("/service");
  };
  return (
    <div style={{
      textAlign: 'center',
      backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-woman-in-colorful-music-sound-wallpaper-image_2894117.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <h1>Frequency of lessons</h1>
        <Checkt/>
        <Button variant="contained" color="success" onClick={next} style={{ marginTop: '20px' }} >
          Continue
        </Button>
      </div>
    </div>
  )
}

export default Service;
