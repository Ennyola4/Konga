import React from 'react'
import '../components/CSS/login.css'
import { FaApple } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";



const Login = ({isVisible, onClose}) => {
  return (
    <div >
      <div className='container mt-0 bg-light rounded border'>
       {isVisible && <div className='overlay' onClick={onClose }/>}

       <div className={`login-page ${isVisible ? 'visible' : '' }`} >
            <div className='login-header mb-4'>
               <h4>Login</h4> 
               <button type='button' className='btn btn-outline-basic' onClick={onClose}>Close</button>
               
           </div>

           <div  className="container mt-2 p-2 bg-light rounded border">
            <form>
            <div>
                <label className="form-label">Email Address or Phone Number</label>
                 <input type="email" className='form-control' />
                
            </div>

            <div className="mt-3 mb-3">
                <label className="form-label">Password</label>
                <input type="password" className='form-control' placeholder='Enter Password' />
            </div>
            <a href="#" className='d-flex justify-content-end align-items-center  text-dark' style={{color: "red"}}>Forgot Password?</a>
            
            </form> <br />
            <button className='submit'>Login</button> <hr />
            <p className='p'>OR</p>
            <div  className="container mt-4 d-flex align-items-center justify-content-center">
              <button className="btn btn-outline-basic" style={{color : "blue"}}><FcGoogle />Login with google</button>
              <button className="btn btn-outline-basic" style={{color: "black"}}><FaApple />Login with Apple</button>
            </div>
           </div> <br /><br /><br />
           
                 <a href="#" className='d-flex justify-content-center align-items-center text-center bg-white text-dark'> Don't have an account?</a>
         
       </div>
      </div>
     
    </div>
  )
}

export default Login