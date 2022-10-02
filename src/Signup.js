import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import { Link } from "react-router-dom";
import {useState , useEffect} from "react";
import LoginFormValidation from './Login';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
function SignupFormValidation(){
  const initialValues = {username:"", email:"" , password:""};
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
       if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    }
     if(values.username !='' && values.password.length >4 && values.password.length<12 && regex.test(values.email)){
      alert("signup up successfully");
     }
    return errors

  }
  return(
    <div className='container'>

      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div className='forms'>
          <label for="Name" className='label'>Name</label>
          <input 
            className='input'
            type="text" 
            placeholder='Full Name' 
            name='username' 
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.username}</p>

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

        <h3>Already have an account?</h3>
         <Link to="/Login" className='click'>Click here to Log In</Link>
            
      </form>
    </div>
  )
}
export default SignupFormValidation