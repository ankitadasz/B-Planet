// src/components/Description.js
import React from 'react';
import './Description.css';
import img1 from '../assets/image 1.png';

const Description = () => {
  return (
    <div className="plant-care-page">
      <header>
        <h1>B.planet</h1>
      </header>
      <aside>
      <img src={img1} alt="B.planet Logo" className="img_1"  style={{width:400,height:600}} />
      </aside>
      <main>
        <section className="description">
          <h2>Tree 1</h2>
          <p>Three Leaf Clover, symbolizes good luck and fortune in many cultures.</p>
        </section>
        <section className="plant-care-guide">
          <h3><u>Plant Care Guide</u></h3>
          <div className="care-instructions">
            <div className="care-item">
              <strong>Water</strong>
              <span style={{paddingLeft:100}}> Allow the soil to dry out completely before watering.</span>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="care-item">
              <strong>Light</strong>
              <span style={{paddingLeft:100}}>Bright indirect light environments.</span>
            </div>
            <br></br>
            <br></br>
            <br></br>
            
            <div className="care-item">
              <strong>Tips</strong>
              <span style={{paddingLeft:100}}>Gently insert a toothpick into the soil to determine if your plant needs watering.</span>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </section>
        <section className="additional-info">
          <strong>Description</strong>
          <p>A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets.</p>
          <p>Plant images depicted are solely for illustration purposes only.</p>
        </section>
      </main>
    </div>
  );
};


export default Description;
