import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from "react-router-dom";
const defaultTheme = createTheme();

export default function Album() {
  const navigate = useNavigate();
  
  
  const next = () => {
    navigate("/ag");
  };
  const next1 = () => {
    navigate("/about");
  };
  const next2 = () => {
    navigate("/login");
  };
  const next3 = () => {
    navigate("/signup");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="static" color="secondary">
        <Toolbar style={{ justifyContent: 'flex-end' }}>
          <Button color="inherit" variant="outlined" onClick={next2}>SignIn</Button>
          <Button color="inherit" variant="outlined" onClick={next3}>SignUp</Button>
          <Button color="inherit" variant="outlined" onClick={next1}>About Us</Button>
        </Toolbar>
      </AppBar>
      <main style={{
        backgroundImage: 'url("https://img.freepik.com/premium-photo/headphones-with-colorful-paint-splashed-them-generative-ai_97167-2767.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '100vh', // Set minimum height to fit the screen
        display: 'flex',
        alignItems: 'center', // Center content vertically
        justifyContent: 'center' // Center content horizontally
      }}>
        <Box
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
            p: 4,
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' // Box shadow for depth
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              color="text.primary"
              gutterBottom
            >
              Find a Music Mentor in Tamilnadu
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Which musical styles are you interested in?
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" color="primary" onClick={next}>Go</Button>
            </Stack>
          </Container>
        </Box>
      </main>
      <Box sx={{
        bgcolor: '#f4f4f4', // Light gray background for footer
        color: 'black', // Text color in the footer
        p: 6
      }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Also Follow Us on
        </Typography>
        <div style={{textAlign:'center'}}>
           <WhatsAppIcon color="success"/ >
           <LinkedInIcon  color="primary"/>
           <InstagramIcon style={{color:'LightCoral' }} />
        </div> 
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
        >
          “Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.”
        </Typography>
        <Typography variant="body2" align="center">
          {'Music © '}
          <Link color="inherit" href="https://mui.com/">
            Music Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
