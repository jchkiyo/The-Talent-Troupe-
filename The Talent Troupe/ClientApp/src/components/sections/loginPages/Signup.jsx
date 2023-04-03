import React, {useState, useRef} from 'react';
import {  createUserWithEmailAndPassword, sendEmailVerification   } from 'firebase/auth';
import { auth ,db} from '../firebase.js';
import {  NavLink, useNavigate } from 'react-router-dom'
import '../loginPages/LoginStyle.css'; 
import { Alert } from "react-bootstrap"
import { collection, addDoc } from "firebase/firestore";
 

       
export const Signup = () => {
        const passwordRef = useRef();
        const passwordConfirmRef = useRef();
        const [error, setError] = useState("");
        const navigate = useNavigate();
        const [username, setUsername] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('');

        
        const onSubmit = async (e) => {
          e.preventDefault()
          if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
          }
         
          await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                 //send verification mail
                 sendEmailVerification(auth.currentUser)
                 //auth.signOut();
                addDoc(collection(db, "users"), {
                  username:username,
                  email:email,
                  userid: auth.lastNotifiedUid

                
                })
                          
                .then(() => {
                  alert('Account Created Successfully 👍' );
                })
                .catch((error) => {
                  alert(error.message);
                });
               
                 
                console.log(user);
                navigate('/login',);
                
                // ...
            })
            .catch((error) => {
                
                return setError(error.message);
                
            });
         

     
       
        }
 
    return(
        <div className="Signup">
        
        <div className="page-holder align-items-center py-4 bg-gray-100 vh-100">
         <div className="container">
           <div className="row align-items-center">
             
               <div className="card">
                 <div className="card-header px-lg-5">Get Started
                
                 </div>
                 <div className="card-body p-lg-5">
                   {error && <Alert variant="danger">{error}</Alert>}
                   <form id="loginForm" action="index.html">
                   <div className="form-floating mb-3">
              <label htmlFor="username">Full Name</label>
              <input className="form-control" id="floatingInput" type="text" value ={username} placeholder="Full Name" required onChange={(e)=> setUsername(e.target.value)}  />
                
              </div>
                     <div className="form-floating mb-3">
                     <label htmlFor="floatingInput">Email address</label>
                     <input className="form-control" id="floatingInput" type="email" value ={email} placeholder="name@example.com" required onChange={(e)=> setEmail(e.target.value)} />
                      
                     </div>
                     <div className="form-floating mb-3">
                     <label htmlFor="floatingPassword">Password</label>
                       <input className="form-control" id="floatingPassword" type="password" placeholder="Password" required ref={passwordRef} onChange={(e)=> setPassword(e.target.value)} />
                      
                     </div>
                     <div className="form-floating mb-3">
                     <label htmlFor="floatingPassword2">Confirm Password</label>
                       <input className="form-control" id="floatingPassword2" type="password" placeholder="Confrim Password" ref={passwordConfirmRef} required onChange={(e)=> setPassword(e.target.value)} />
                      
                     </div>
                    
                     <button className="btn btn-primary active" type="button" onClick={onSubmit}>Register</button>
                   </form>
                 </div>
                 <div className="card-footer px-lg-5 py-lg-4">
                   <div className="text-sm text-muted">Don't have an account? <NavLink to="/login" className="underlined">Login</NavLink>.</div>
                   
                 </div>
                 
               </div>
               <div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"><img className="img-fluid mb-4" width="300" src="https://therichpost.com/wp-content/uploads/2021/06/login_page_image.png" alt="" style={{transform: "rotate(10deg)"}} />
            <h1 className="mb-4">Plan Your Future <br className="d-none d-lg-inline" />With Us Today.</h1>
          </div>
           
             </div>
             
             </div>
             
             </div>
             
            
               
             </div>
      

    )
}