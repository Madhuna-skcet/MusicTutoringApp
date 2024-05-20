import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
const Service = () => {
  const navigate = useNavigate();
  
  
  const next = () => {
    navigate("/contacts");
  };
  return (
    <div style={{
      textAlign: 'center',
      backgroundImage: 'url(https://live-production.wcms.abc-cdn.net.au/a362273509f7eccdcf362bb73b3b006d?impolicy=wcms_crop_resize&cropH=788&cropW=1400&xPos=0&yPos=0&width=862&height=485)',
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
        <h3>What service do you need?</h3>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            textAlign: 'center',
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="Name" label="Name" variant="outlined" /><br/>
          <TextField id="music-service" label="Music Services" variant="outlined" /><br/>
          <TextField id="Phone Number" label="Enter your Phone Number" variant="outlined" />
        </Box>
        <Button variant="contained" color="success" onClick={()=>alert("Our team will contact you soon")} style={{ marginTop: '20px' }} >
          Continue
        </Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button variant="contained" color="success" onClick={next}>
        Popular Categories 
        </Button>
      </div>
    </div>
  )
}

export default Service;
