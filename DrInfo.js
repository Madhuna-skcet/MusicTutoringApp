import React from 'react';

const DrumsInf = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Drums</h1>
      <img
        src="https://images.unsplash.com/photo-1524230659092-07f99a75c013?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ1bXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Drums"
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <h2>Overview</h2>
        <p>
          Drums are a percussion instrument typically made up of cylindrical shells and various membranes (drumheads)
          stretched over the ends. They produce sound by being struck with sticks or hands and play a fundamental role
          in music across multiple genres.
        </p>
        <h2>Types of Drums</h2>
        <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
          <li>Bass Drum</li>
          <li>Snare Drum</li>
          <li>Tom-Toms</li>
          <li>Hi-Hat</li>
          <li>Cymbals</li>
        </ul>
        <h2>Playing the Drums</h2>
        <p>
          <h3>Techniques:</h3> Involves hand and foot coordination, mastering different strokes, and rhythms.
          <br />
          <h3>Practice:</h3> Regular practice enhances precision, timing, and dynamics.
          <br />
          <h3>Styles:</h3> Spans across genres such as rock, jazz, funk, and more, each requiring diverse playing techniques.
        </p>
        <p><a href="https://www.wikihow.com/Play-Drums" >How to Play Drums in  Easy Steps</a></p>   

      </div>
    </div>
  );
};

export default DrumsInf;
