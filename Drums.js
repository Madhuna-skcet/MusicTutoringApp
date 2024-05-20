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
      Crescendo Connoisseur Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards =[
{key:1,name:'Anupam',i:<BusinessCenterOutlinedIcon/>,c:'14yrs of Exp',d:<CurrencyRupeeIcon/>,x:'500 per hour',call:<CallIcon/>,contact:'8148552805',imgUrl:'https://c.superprof.com/i/a/11853912/6206556/600/20231031053429/learn-play-tabla-indian-classical-bhajan-folk-gazal-with.jpg'},
{key:2,name:'Arindam',i:<BusinessCenterOutlinedIcon/>,c:'10yrs of Exp',d:<CurrencyRupeeIcon/>,x:'500 per hour',call:<CallIcon/>,contact:'9924754986',imgUrl:'https://c.superprof.com/i/a/16454605/8355394/600/20230206082009/learn-drums-one-one-sessions-followed-trinity-college-london-curriculum-music-theory-and-staff-notation-taught-here.jpg'},
{key:3,name:'Ronit',i:<BusinessCenterOutlinedIcon/>,c:'9yrs of Exp',d:<CurrencyRupeeIcon/>,x:'400 per hour',call:<CallIcon/>,contact:'9992875400',imgUrl:'https://c.superprof.com/i/a/19051442/9340977/600/20221224070059/trinity-rock-school-london-graduate-certified-drums-instructor-with-years-experience-learn-how-play-drums-develop-your.jpg'},
{key:4,name:'Phaso',i:<BusinessCenterOutlinedIcon/>,c:'7yrs of Exp',d:<CurrencyRupeeIcon/>,x:'300 per hour',call:<CallIcon/>,contact:'8696350863',imgUrl:'https://c.superprof.com/i/a/8978730/4691257/600/20221215140315/free-lanser-drummer-gives-you-drum-lessons-for-beginner-intermediate-advance-students-any-age.jpg'},
{key:5,name:'Samiran',i:<BusinessCenterOutlinedIcon/>,c:'4yrs of Exp',d:<CurrencyRupeeIcon/>,x:'200 per hour',call:<CallIcon/>,contact:'9995678474',imgUrl:'https://c.superprof.com/i/a/12937180/6758429/600/20230113133021/you-beginner-interested-playing-drums-then-why-are-you-wasting-your-time-learn-drums-from-samiran-dey.jpg'},
{key:6,name:'Arpan',i:<BusinessCenterOutlinedIcon/>,c:'3yrs of Exp',d:<CurrencyRupeeIcon/>,x:'200 per hour',call:<CallIcon/>,contact:'7504879547',imgUrl:'https://www.superprof.co.in/images/teachers/teacher-home-drums-and-percussion-lessons-for-all-here-your-chance-learn-and-love-drums.jpg'}
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
            Find a Crescendo Connoisseur in Tamilnadu
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
         Crescendo Connoisseur(Drums)
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