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
       Marimba Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards =[
{key:1,name:'Serban',i:<BusinessCenterOutlinedIcon/>,c:'10yrs of Exp',d:<CurrencyRupeeIcon/>,x:'700 per hour',call:<CallIcon/>,contact:'6738291729',imgUrl:'https://c.superprof.com/i/a/5230887/2538130/600/20221205140742/london-based-world-class-symphonic-percussionist-and-drummer-for-your-drumming-journey.jpg'},
{key:2,name:'Tania',i:<BusinessCenterOutlinedIcon/>,c:'20yrs of Exp',d:<CurrencyRupeeIcon/>,x:'800 per hour',call:<CallIcon/>,contact:'9874392837',imgUrl:'https://c.superprof.com/i/t/1502163/135221/600/20220826154608/professional-classes-drums-and-percussions-home-house.jpg'},
{key:3,name:'Santiago',i:<BusinessCenterOutlinedIcon/>,c:'19yrs of Exp',d:<CurrencyRupeeIcon/>,x:'800 per hour',call:<CallIcon/>,contact:'9875763874',imgUrl:'https://c.superprof.com/i/t/17294848/1079803/600/20221215115133/private-drums-and-symphonic-percussion-lessons-argentinian-free-lance-musician-studied-buenos-aires-and-israel-more.jpg'},
{key:4,name:'Andrea',i:<BusinessCenterOutlinedIcon/>,c:'12yrs of Exp',d:<CurrencyRupeeIcon/>,x:'900 per hour',call:<CallIcon/>,contact:'9389749292',imgUrl:'https://c.superprof.com/i/t/10445163/1147672/600/20221216102903/drum-classes-both-face-face-and-online-not-necessary-know-music-able-play-come-and-will-show-you.jpg'},
{key:5,name:'Silvano',i:<BusinessCenterOutlinedIcon/>,c:'9yrs of Exp',d:<CurrencyRupeeIcon/>,x:'500 per hour',call:<CallIcon/>,contact:'6464289977',imgUrl:'https://c.superprof.com/i/t/3759166/744487/600/20221216133104/professional-drummer-offers-teach-percussion-drums-madrid-home.jpg'},
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
            Find a Quentara Insight in Tamilnadu
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
          Quentara Insight(Marimba)
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
          Music
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}