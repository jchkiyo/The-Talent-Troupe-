import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import {  NavLink, useNavigate } from 'react-router-dom'
import '../loginPages/LoginStyle.css'; 
import { Alert } from "react-bootstrap"

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
          return setError(error.message);
        });
       
    }
 
    return(
   
      <div className="Login">
      
      <div className="page-holder align-items-center py-4 bg-gray-100 vh-100">
       <div className="container">
         <div className="row align-items-center">
           
             <div className="card">
               <div className="card-header px-lg-5">
              
               </div>
               <div className="card-body p-lg-5">
                 <h3 className="mb-4">Hi, welcome back</h3>
                 {error && <Alert variant="danger">{error}</Alert>}
                 <form id="loginForm" action="index.html">
                   <div className="form-floating mb-3">
                   <label for="floatingInput">Email address</label>
                   <input className="form-control" id="floatingInput" type="email" placeholder="name@example.com" required onChange={(e)=> setEmail(e.target.value)} />
                    
                   </div>
                   <div className="form-floating mb-3">
                   <label for="floatingPassword">Password</label>
                     <input className="form-control" id="floatingPassword" type="password" placeholder="Password" required onChange={(e)=> setPassword(e.target.value)} />
                    
                   </div>
                  
                   <button className="btn btn-primary" type="button" onClick={onLogin}>Login</button>
                 </form>
               </div>
               <div className="card-footer px-lg-5 py-lg-4">
                 <div className="text-sm text-muted">Don't have an account? <NavLink to="/signup" className="underlined">Register</NavLink>.</div>
                 
               </div>
               
             </div>
             <div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"><img className="img-fluid mb-4" width="300" src="https://therichpost.com/wp-content/uploads/2021/06/login_page_image.png" alt="" style={{transform: "rotate(10deg)"}} />
            <h1 className="mb-4">Plan Your Future <br className="d-none d-lg-inline" />With Us Today.</h1>
            <p className="lead text-muted">My teammates are awesome.</p>
          </div>
           
           </div>
           
           </div>
           
           </div>
          
          
             
           </div>
          
          
    )
}
 
