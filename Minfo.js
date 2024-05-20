import React from 'react';

const MarimbaInf = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Marimba</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4xe2MA4JVOa1enBifMlirPjEz7Z4dcWRyw&usqp=CAU" // Replace with the actual image URL of a marimba
        alt="Marimba"
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <h2>Overview</h2>
        <p>
          The marimba is a percussion instrument consisting of wooden bars struck with mallets to produce musical tones.
          It originated in Central America and is known for its rich, warm sound and versatile musical capabilities.
        </p>
        <h2>Types of Marimbas</h2>
        <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
          <li>Concert Marimba</li>
          <li>Marching Marimba</li>
          <li>Vibraphone (a type of marimba)</li>
          <li>Bass Marimba</li>
          <li>Chromatic Marimba</li>
        </ul>
        <h2>Playing the Marimba</h2>
        <p>
          <h3>Techniques:</h3> Involves using various striking techniques, including four-mallet playing, to produce different tones.
          <br />
          <h3>Learning:</h3> Requires understanding musical notation, rhythm, and dynamics specific to the instrument.
          <br />
          <h3>Styles:</h3> Covers classical, contemporary, and traditional music, allowing for diverse musical expressions.
          <br />
          <h3>Performance:</h3> Often performed solo, in ensembles, or as part of orchestras and percussion groups.
        </p>
        
      </div>
    </div>
  );
};

export default MarimbaInf;
