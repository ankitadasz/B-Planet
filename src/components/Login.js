// // src/components/Login.js
// import React from 'react';
// import './Login.css';

// const Login = () => {
//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" placeholder="Enter your email" />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input type="password" placeholder="Enter your password" />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account yet? <a href="/signup">Sign up for free</a></p>
//     </div>
//   );
// };

// export default Login;
import React from 'react';
import './Login.css';
import Loginnn from '../assets/Login in page image.png';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* <h1>B.planet</h1> */}
        <div className="image-container">
      <Link to="/">
        <img src={Loginnn} alt="B.planet Logo" className="navbar-logo-image_1" />      
        </Link>
      </div>
        <form>
          <h2>Login</h2>
          <p>Welcome back !!</p>
          <label>Email</label>
          <input type="email"/>
          <label>Password</label>
          <input type="password"/>
          <div className="password-options">
            <a href="#">Forget Password ?</a>
          </div>
          <button type="submit">Login as user</button>
          <button type="submit">Login as admin</button>
          <p>Don't have an account yet ? <a href="#">Sign up for free</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;