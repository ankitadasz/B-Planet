// src/components/Home.js
import React from 'react';
import './Home.css';
import PaginationButtons1 from "./PaginationButtons1";
import Hero from '../assets/Hero image 1.png';
import hero from '../assets/hero image 2.png';
import img1 from '../assets/image 1.png';
import img2 from '../assets/image 2.png';
import img3 from '../assets/image 3.png';
import img4 from '../assets/image 4.png';
import img5 from '../assets/image 5.png';
import img6 from '../assets/image 6.png';
import img7 from '../assets/image 7.png';
import img8 from '../assets/image 8.png';
import img9 from '../assets/image 9.png';
import img10 from '../assets/image 10.png';
import img11 from '../assets/image 11.png';
import img12 from '../assets/image 12.png';
import img13 from '../assets/image 13.png';
import img14_1 from '../assets/image 14_1.png';
import img14 from '../assets/image 14.png';
import img15 from '../assets/image 15.png';
import img16 from '../assets/image 16.png';
import img17 from '../assets/image 17.png';
import img18 from '../assets/image 18.png';
import img19 from '../assets/image 19.png';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    <div className="home-container_1">
      <h1 >B.planet</h1>
    </div>
    <div className="home-container_2">
    <p id='para'>As intersting<br></br>as a plant</p>    
        <Link to="/">
        <img src={hero} alt="B.planet Logo" className="image_1" style={{height:490,width:380}} />
        <img src={Hero} alt="B.planet Logo" className="image_2" style={{height:290,width:290}} />            
        </Link>
    </div>
    <br></br>
    <p style={{fontSize:30,marginLeft:40}}>FEATURED PRODUCT</p>
    <div id='photo'>
      <img src={img1} alt="B.planet Logo" className="img_1" />
      <img src={img2} alt="B.planet Logo" className="img_2" />
      <img src={img3} alt="B.planet Logo" className="img_3" />
      <img src={img4} alt="B.planet Logo" className="img_4" />
      <img src={img5} alt="B.planet Logo" className="img_5" /><br></br>
      <img src={img6} alt="B.planet Logo" className="img_6" />
      <img src={img7} alt="B.planet Logo" className="img_7" />
      <img src={img8} alt="B.planet Logo" className="img_8" />
      <img src={img9} alt="B.planet Logo" className="img_9" />
      <img src={img10} alt="B.planet Logo" className="img_10" /><br></br>
      <img src={img11} alt="B.planet Logo" className="img_11" />
      <img src={img12} alt="B.planet Logo" className="img_12" />
      <img src={img13} alt="B.planet Logo" className="img_13" />
      <img src={img14_1} alt="B.planet Logo" className="img_14_1" />
      <img src={img14} alt="B.planet Logo" className="img_14" /><br></br>
      <img src={img15} alt="B.planet Logo" className="img_15" />
      <img src={img16} alt="B.planet Logo" className="img_16" />
      <img src={img17} alt="B.planet Logo" className="img_17" />
      <img src={img18} alt="B.planet Logo" className="img_18" />
      <img src={img19} alt="B.planet Logo" className="img_19" />
    </div>
    <PaginationButtons1
        page={1}
        setPage={10}
        total={Math.ceil(img1.length / 10)}
      />
    </>
  );
};

export default Home;
