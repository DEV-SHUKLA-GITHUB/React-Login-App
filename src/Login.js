import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import { Link } from "react-router-dom";
import {useState , useEffect} from "react";
function LoginFormValidation(){
  const initialValues = { email:"" , password:""};
  const [formValues,setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange= (e)=>{
    const{name,value} = e.target;
    setFormValues({...formValues,[name]:value});
    // console.log(formValues)
  };
  const handleSubmit= (e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values)=>{
    const errors = {};
    const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (values.email != "sahil@crework.in") {
      errors.email = "Please enter valid email";
    //   values.target.style.borderColor = "red";
    }
    else{
        // values.target.style.borderColor = "green";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password != "sahil") {
      errors.password = "Enter the correct password";
    }
    if(values.email == "sahil@crework.in" && values.password == "sahil"){
        alert("logged in successfully")
    }
    return errors

  }
  return(
    <div className='container'>

      <form onSubmit={handleSubmit}>
        <h1>Log in</h1>
    
        <div className='forms'>
          <label for="email" className='label'>Email</label>
          <input 
            className='input'
            type="text" 
            placeholder='Example@mail.com'
            name='email' 
            value={formValues.email}
            onChange={handleChange}
          />
        </div >
        <p>{formErrors.email}</p>

        <div className='forms'>
          <label for="password" className='label'>Password</label>
          <input 
            className='input'
            type="password"  
            placeholder='at least 8 characters' name='password' 
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
            
        <button class="click" type="submit">Sign up</button>

        <h3>Don't have an account?</h3>
        <Link to="/" className='click'>Click here to Sign Up</Link>
            
      </form>
    </div>
  )
}
export default LoginFormValidation