// src/components/Profile.js
import React from 'react';
import './Profile.css';
import profilepic from '../assets/profilepic.png';

// const Profile = () => {
//   return (
//     <div className="profile-container">
//       <h2>About Us</h2>
//       <div className="profile-info">
//         <p>Name: Rahul Kumar</p>
//         <p>Email: rahulkumar@gmail.com</p>
//         <button>Edit</button>
//       </div>
//     </div>
//   );
// };

// export default Profile;


const Profile = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={profilepic} alt="Profile" className="profile-pic" />
      </div>
      <div className="profile-details">
        <h1>B.planet</h1>
        <div className="detail">
          <label>Name</label>
          <input type='text' value="rahul kumar"></input>
        </div>
        <div className="detail">
          <label>Email</label>
          <input type='gmail' value="rahulkumar@gmail.com"></input>
        </div>
        <div className="detail">
          <label>Phone Number</label>
          <input type='number' placeholder="9853264***"></input>
        </div>
        <div className="detail">
          <label>Address</label>
          <input type='textarea' value="Patia, Bhubaneswar"></input>
        </div>
        <div className="detail">
          <label>State</label>
          <input type='text' value="Odisha"></input>
        </div>
        <div className="detail">
          <label>Zip Code</label>
          <input type='text' placeholder='751024'></input>
        </div>
      </div>
    </div>
  );
}

export default Profile;

