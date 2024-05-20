import * as React from 'react';
import AppBar from '@mui/material/AppBar';
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
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Music © '}
      <Link color="inherit" href="https://mui.com/">
        Music Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards =[
{key:1,name:'Piano Prowess Mento',c:'Unlock the melodies within you and master the art of piano playing with our comprehensive classes—where technique meets creativity, fostering musicality, and unleashing your inner virtuoso!',imgUrl:'https://media.istockphoto.com/id/1293058709/photo/girl-playing-piano-at-home.jpg?s=612x612&w=0&k=20&c=QeVvAX-bcynkhSlFVQSiNsDiSPSVOW2B6ZQ3F5FgxtQ=',path:'./piano',Inf:'./pianoInfo'},
{key:2,name:'Violin Virtuoso Guide',c:'"With every pluck and every bow, the violinist writes poetry in the language of music, an eloquent serenade to the heart."',imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHp2hL10KGXOXyDTcjX7TnUnERO56xBfGsSA&usqp=CAU',path:'./violin',Inf:'./vinfo'},
{key:3,name:'Melodic Mastery Guitar',c:'From the gentle pluck to the fiery strum, the guitarists expression is a spectrum of emotions woven into the fabric of melody.',imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFKv3WY7VAeOf5DfZEFZFoUEcJAn3RWUyXw&usqp=CAU',path:'./guitar',Inf:'./ginfo'},
{key:4,name:'Fluttering Maestro',c:'With every trill and flutter, the flutist weaves a tapestry of sound—a mosaic of beauty in every breath.',imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfoMc_ktrvN5nUK-PxATxiLrH3KRkCKDxNQ&usqp=CAU',path:'./flute',Inf:'./finfo'},
{key:5,name:'Strings of Melody',c:'In the delicate dance of veena strings, one finds the heartbeat of tradition and the melody of innovation, entwined in harmonious union.',imgUrl:'https://i.pinimg.com/originals/58/e6/72/58e67251730ca514bc7525044a090bc7.jpg',path:'./veena',Inf:'./veinfo'},
{key:6,name:'Crescendo Connoisseur',c:'Percussive raindrops, drumming melodies on the roof of silence, compose a serenade for the listening soul.',imgUrl:'https://tse3.mm.bing.net/th?id=OIP.rBCRr_lB7HTLnuvTtOAUDAHaE8&pid=Api&P=0&h=180',path:'./drums',Inf:'./drInfo'},
{key:7,name:'Celestial Rhythms',c:'Every song is a whisper from the universe, inviting us to listen to the secrets of our own hearts.',imgUrl:'https://tse2.mm.bing.net/th?id=OIP.rA_KQiFBdn1TioeRzMIjZgHaE7&pid=Api&P=0&h=180',path:'./ac',Inf:'./acinfo'},
{key:8,name:'Quentara Insight',c:'Music is the bridge between the seen and the unseen, the audible manifestation of the invisible.',imgUrl:'https://barkingdrum.com/wp-content/uploads/2021/08/Marimba.jpg',path:'./marimba',Inf:'./minfo'},
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
            Find a Music Tutor in TamilNadu
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
             Melodious Mentor
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
                   {card.c}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href={card.path} style={{textDecoration:'none'}}>View</a>
                    <a href={card.Inf} style={{textDecoration:'none'}}>About</a>
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