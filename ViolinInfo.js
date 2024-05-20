import React from 'react';

const PianoInf = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Violin</h1>
      <img
        src="https://c02.purpledshub.com/uploads/sites/43/2021/03/when-was-the-violin-invented-2ccbe78.jpg"
        alt="violin"
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <h2>Overview</h2>
        <p>
        The violin, a versatile string instrument, produces sound through bowed strings and holds a prominent role in classical music while being used across various genres worldwide.
        </p>
        <h2>Types of Violin</h2>
        <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
          <li>Standard Violin</li>
          <li>Electric Violin</li>
          <li>Baroque Violin</li>
          <li>Five-String Violin</li>
          <li>Silent Violin</li>
        </ul>
        <h2>Playing the Violin</h2>
        <p>
          <h3>Hold and Posture:</h3>Hold the violin between your chin and shoulder, maintaining a comfortable, upright position
          <br />
          <h3>Bow and Strings:</h3>Use the bow to make sound by moving it across the strings. The left hand presses strings on the fingerboard to create different notes.
          <br />
          <h3>Learning Music:</h3> Understand sheet music to play different tunes, notes, and rhythms
          <h3>Practice Techniques:</h3>Regularly practice scales, exercises, and pieces to improve skills and finger movements.
          <br />
          <h3>Express Yourself:</h3>Use bow control, finger placements, and dynamics to express emotions while playing.
          <br />
          <h3>Explore Styles:</h3>Experiment with various music genres like classical, folk, or jazz to learn different playing styles.
          <br />
          <h3>Practice Regularly</h3>mprovement comes from consistent practice and dedication.
        </p>     
             <p><a href="https://www.wikihow.com/Play-the-Violin" >How to Play Violin in  Easy Steps</a></p>   

      </div>
    </div>
  );
};

export default PianoInf;
