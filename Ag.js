import Button from '@mui/material/Button';
import * as React from 'react';
import Checka from './Checka';
import { useNavigate } from "react-router-dom";
const Service = () => {
    const navigate = useNavigate();
  const next = () => {
    navigate("/exp");
  };
  const next1 = () => {
    navigate("/exp1");
  };
  return (
    <div style={{
      textAlign: 'center',
      backgroundImage: 'url(https://t3.ftcdn.net/jpg/05/62/98/36/360_F_562983674_524xR5Rzurt8MjTQghCvNYBcyeuvLHPE.jpg)',
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
        <h2>Student Age</h2>
        <Checka/>
        <Button variant="contained" color="success" onClick={next} style={{ marginTop: '20px' }}  >
          Continue
        </Button>
        <Button   onClick={next1} style={{ marginTop: '20px' }}  >
          Another way
        </Button>
      </div>
    </div>
  )
}

export default Service;
