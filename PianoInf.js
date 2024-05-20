import React from 'react';

const PianoInf = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Piano</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1m9mQDd6tr0TMfAxalDO3wklRc_AQXuEqQ&usqp=CAU"
        alt="Piano"
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <h2>Overview</h2>
        <p>
          A piano is a musical instrument that produces sounds by striking strings with felt-covered hammers when keys
          are pressed. It's known for its versatility, expressive capabilities, and wide range of tones.
        </p>
        <h2>Types of Pianos</h2>
        <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
          <li>Grand Pianos</li>
          <li>Upright (Vertical) Pianos</li>
          <li>Digital Pianos</li>
          <li>Baby Grand Pianos</li>
          <li>Electric Pianos</li>
        </ul>
        <h2>Playing the Piano</h2>
        <p>
          <h3>Learning:</h3> Begins with music theory, finger techniques, and scales.
          <br />
          <h3>Practice:</h3> Regular practice improves proficiency, accuracy, and expression.
          <br />
          <h3>Styles:</h3> Spans various styles - classical, jazz, pop, rock - each with unique techniques.
          <p><a href="https://yousician.com/blog/how-to-play-piano-8-easy-steps" >How to Play Piano in 8 Easy Steps</a></p>        </p>
      </div>
    </div>
  );
};

export default PianoInf;
