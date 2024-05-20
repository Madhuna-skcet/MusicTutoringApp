import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
const AboutUs = () => {
  const navigate = useNavigate();
  const next = () => {
    navigate("/home");
  };
  return (
    <div style={{textAlign:'center',backgroundImage:'url("https://png.pngtree.com/background/20231017/original/pngtree-creative-brain-jamming-3d-illustration-of-musical-notes-and-headphones-with-picture-image_5587968.jpg")',
    backgroundRepeat:'no-repeat',
    backgroundSize: '100% 100%',
    backgroundAttachment: 'fixed',
    color:'white'}
    }><br/>
      <h1>About Us</h1><br/>
      <p >
        Welcome to our company! We are passionate about what we do and strive
        to provide the best services to our customers.Our team is dedicated to excellence and innovation. We believe in
        creating a positive impact on the world through our work.Welcome to our music platform, where we strive to provide an
        exceptional musical experience for our users. Our passion for music fuels our commitment to delivering a platform that connects artists
        and listeners.
        </p><br/>
        <p>
        Tamilnadu Music Institute is located at the heart of the Music Industry. The courses which we offer is creatively designed keeping 
        the evolving technology in mind, which help the students receive the best education required to prosper in the music industry. Certainly, 
        the sense of individualism is strong at our Institute, as we believe in giving personal attention to each and every students & is not limited to the duration 
        of the course.Students of Institute are frequently engaged with the top artists of the industry and learn all the tricks & bricks from the faculty itself 
        who are professionals in the music industry with years of experience and unparalleled knowledge of the technical know-hows in the industry.
        </p>
        <br/>
        <p>
        The exposed atmosphere of Institute can be of great benefit to the aspiring musician & especially for someone who is little confused with the future
        prospects. We give not only an excellent and unparalleled music degree but also a real time experience through our little initiatives like Workshops, 
        Super Saturdays, Institute Connect, & rehearsals at Institute Stage Jam Room. Under Institute’s expert guidance we aim to groom our students and shape their creativity. 
        We strive to create world class music professionals.
      </p>
      <Button variant="contained" color="primary" onClick={next}>Back</Button>
      <br/><br/><br/><br/><br/><br/>
    </div>
  );
};

export default AboutUs;