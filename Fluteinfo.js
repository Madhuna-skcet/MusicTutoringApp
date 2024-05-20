import React from 'react';

const FluteInfo = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Flute</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagGsG4IUVetnq8ydolcMnD94_oSdaRoEe7Q&usqp=CAU"
        alt="Flute"
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <h2>Overview</h2>
        <p>
          The flute is a versatile woodwind instrument producing sound by blowing air across the mouthpiece and
          fingering different keys. Known for its melodious and airy tones, it's commonly used in classical and
          contemporary music genres.
        </p>
        <h2>Types of Flutes</h2>
        <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
          <li>Concert Flute</li>
          <li>Piccolo</li>
          <li>Alto Flute</li>
          <li>Bass Flute</li>
          <li>Contrabass Flute</li>
        </ul>
        <h2>Playing the Flute</h2>
        <p>
          <h3>Hold and Posture:</h3> Hold the flute horizontally to the right, balancing it with your chin and fingers.
          <br />
          <h3>Embouchure:</h3> Create sound by blowing across the mouthpiece while forming the correct mouth shape.
          <br />
          <h3>Finger Technique:</h3> Learn finger positions on keys to produce different notes and scales.
          <br />
          <h3>Music Styles:</h3> Explore various genres, including classical, jazz, folk, and contemporary, to adapt playing styles.
          <br />
          <h3>Practice:</h3> Regular practice helps develop breath control, tone quality, and musical expression.
        </p>
        <p><a href="https://www.wikihow.com/Play-flute" >How to Play Flute in  Easy Steps</a></p>   

      </div>
    </div>
  );
};

export default FluteInfo;
