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
import Blog from '../SearchBar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CallIcon from '@mui/icons-material/Call';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      
      <Link color="inherit" href="https://mui.com/">
        Guitar Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards =[
{key:1,name:'Manish',i:<BusinessCenterOutlinedIcon/>,c:'14yrs of Exp',d:<CurrencyRupeeIcon/>,x:'500 per hour',call:<CallIcon/>,contact:'8148552805',imgUrl:'https://c.superprof.com/i/a/16026950/8150777/600/20221118020120/prof-musician-with-yrs-experience-gives-guitar-pianovocal-lessons-including-studymaterial.jpg'},
{key:2,name:'Arpit',i:<BusinessCenterOutlinedIcon/>,c:'10yrs of Exp',d:<CurrencyRupeeIcon/>,x:'500 per hour',call:<CallIcon/>,contact:'9924754986',imgUrl:'https://c.superprof.com/i/a/7424192/3768080/600/20220708135242/guitar-lessons-certified-guitarist-with-years-experience-from-trinity.jpg'},
{key:3,name:'Bishal',i:<BusinessCenterOutlinedIcon/>,c:'9yrs of Exp',d:<CurrencyRupeeIcon/>,x:'400 per hour',call:<CallIcon/>,contact:'9992875400',imgUrl:'https://c.superprof.com/i/a/8276319/4281664/600/20230926015653/become-great-guitarist-play-guitar-like-you-always-wanted-just-few-months-become-musically-smart.jpg'},
{key:4,name:'Ashil',i:<BusinessCenterOutlinedIcon/>,c:'7yrs of Exp',d:<CurrencyRupeeIcon/>,x:'300 per hour',call:<CallIcon/>,contact:'8696350863',imgUrl:'https://c.superprof.com/i/a/13821034/7092563/600/20220522163031/trinity-4th-grade-guitarist-gives-guitar-and-ukulele-classes-through-online-classes-and-offline-home-tuitions.jpg'},
{key:5,name:'Suman',i:<BusinessCenterOutlinedIcon/>,c:'4yrs of Exp',d:<CurrencyRupeeIcon/>,x:'200 per hour',call:<CallIcon/>,contact:'9995678474',imgUrl:'https://userphotos2.teacheron.com/764378-20009h.jpg'},
{key:6,name:'Shivaangi',i:<BusinessCenterOutlinedIcon/>,c:'3yrs of Exp',d:<CurrencyRupeeIcon/>,x:'200 per hour',call:<CallIcon/>,contact:'7504879547',imgUrl:'https://c.superprof.com/i/a/13250135/6911498/600/20221116060809/guitar-lessons-for-beginners-and-advance-players-playing-guitar-since-years-and-instructing-since-years.jpg'}
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
            Find a Melodic Mastery Guitar in Tamilnadu
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
            Melodic Mastery Guitar
            </Typography>
          </Container>
             <Blog/>
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
          Music
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}