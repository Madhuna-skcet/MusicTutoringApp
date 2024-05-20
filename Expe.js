import Button from '@mui/material/Button';
import * as React from 'react';
import Check from './Check';
import { useNavigate } from "react-router-dom";
const Service = () => {
    const navigate = useNavigate();
  const next = () => {
    navigate("/time");
  };
  return (
    <div style={{
      textAlign: 'center',
      backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/62/98/45/360_F_562984513_UQb2L9wdHY5X0x95D573zgNAeAucw9sO.jpg)',
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
        <h1>Find Music Services professionals near You</h1>
        <h3>Level of experience</h3>
        <Check/>
        <Button variant="contained" color="success" onClick={next} style={{ marginTop: '20px' }} >
          Continue
        </Button>
      </div>
    </div>
  )
}

export default Service;
