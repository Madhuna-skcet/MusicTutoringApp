import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HeadsetIcon from '@mui/icons-material/Headset';
import SearchBar from '../SearchBar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CallIcon from '@mui/icons-material/Call';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      
      <Link color="inherit" href="https://mui.com/">
       Accordian Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards =[
{key:1,name:'Stefan',i:<BusinessCenterOutlinedIcon/>,c:'10yrs of Exp',d:<CurrencyRupeeIcon/>,x:'700 per hour',call:<CallIcon/>,contact:'9384784313',imgUrl:'https://c.superprof.com/i/a/1919862/855403/600/20220804150104/onilne-accordion-lessons-via-skype-zoom-with-experienced-and-extremely-patient-accordion-teacher-with-bachelor-degree-accordion.jpg'},
{key:2,name:'Marco',i:<BusinessCenterOutlinedIcon/>,c:'20yrs of Exp',d:<CurrencyRupeeIcon/>,x:'800 per hour',call:<CallIcon/>,contact:'9435328758',imgUrl:'https://c.superprof.com/i/t/6390884/390314/600/20220803120846/accordion-world-professional-musician-and-teacher-offers-accordion-lessons-with-tailored-paths-folk-blues-jazz-world-music.jpg'},
{key:3,name:'Andrea',i:<BusinessCenterOutlinedIcon/>,c:'15yrs of Exp',d:<CurrencyRupeeIcon/>,x:'800 per hour',call:<CallIcon/>,contact:'6578347349',imgUrl:'https://c.superprof.com/i/a/11591874/6078234/600/20221202111816/online-lessons-for-all-ages-and-levels-zoom-skype-professional-accordionist.jpg'},
{key:4,name:'Christophe',i:<BusinessCenterOutlinedIcon/>,c:'12yrs of Exp',d:<CurrencyRupeeIcon/>,x:'900 per hour',call:<CallIcon/>,contact:'8478564754',imgUrl:'https://c.superprof.com/i/t/16942/1475/600/20221209142332/accordion-lessons-paris-webcam-possible-english.jpg'},
{key:5,name:'Loic',i:<BusinessCenterOutlinedIcon/>,c:'8yrs of Exp',d:<CurrencyRupeeIcon/>,x:'1000 per hour',call:<CallIcon/>,contact:'8485748988',imgUrl:'https://c.superprof.com/i/t/7961/2870/600/20221201114134/prof-offers-courses-diatonic-accordion-levels-quentin-yvelines.jpg'},
{key:5,name:'Zivorad',i:<BusinessCenterOutlinedIcon/>,c:'8yrs of Exp',d:<CurrencyRupeeIcon/>,x:'90 per hour',call:<CallIcon/>,contact:'9875642378',imgUrl:'https://www.tutorhunt.com/profile-images/circle280/786269640922590113882.jpg'},
];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <MusicNoteIcon/>
          <HeadsetIcon/>
          <Typography variant="h6" color="inherit" noWrap>
            Find a Celestial Rhythms in Tamilnadu
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
         Celestial Rhythms(Accordian)
            </Typography>
          </Container>
             <SearchBar/>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.imgUrl}
                    
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                    </Typography>
                    <Typography>
                 {card.i}  {card.c}
                    </Typography>
                    <Typography>
                 {card.d}  {card.x}
                    </Typography>
                    <Typography>
                    {card.call}  {card.contact} 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={()=>alert("Booked SuccessFully!")}>Book Now</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        Celestial Rhythms
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}