import * as React from 'react';
import { useState,createContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./App.css";
import { useNavigate } from "react-router-dom";

// Create a context for form validation
const FormContext = createContext();
function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!email || !email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!password || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Perform form submission logic here
      console.log('Form submitted:', { email, password });
      navigate("/home");
    }
  };

  return (
    <FormContext.Provider value={{ email, setEmail, password, setPassword, errors, handleSubmit }}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
        /><br/>
        <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="Remember me"
        /><br/>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign in
        </Button><br/><br/>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Don't have an account? Sign Up
            </Link><br/>
          </Grid>
        </Grid>
      </form><br/><br/><br/><br/><br/><br/><br/><br/>
    </FormContext.Provider>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs"><br/>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography><br/>
          <SignUpForm />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
