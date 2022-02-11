import React, {useState, useEffect} from 'react';
import './App.css';
import Button from '@mui/material/Button'


function App() {
  const initialValues = { firstname:"", lastname:"", Email: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  const handleSubmit = (e) => {
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
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    }
    if (!values.Email) {
      errors.Email = "Email is required!";
    } else if (!regex.test(values.Email)) {
      errors.Email = "This is not a valid Email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

 

  return (
    <div className="wrapper">
    <div className="logo"> </div>
    <div className="text-center mt-4 name"> Signup </div>
    <form className="p-3 mt-3">
    <div className="form-field d-flex align-items-center">
           <span className="far fa-user"></span> 
           <input type="text" 
           name="firstname" 
           id="firstname" 
           placeholder="First Name"
           value={formValues.firstname}
           onChange={handleChange}
            /> 
           </div>
           <p>{formErrors.firstname}</p>

           <div className="form-field d-flex align-items-center">
           <span className="far fa-user"></span> 
           <input type="text"
            name="lastname" 
            id="lastname" 
            placeholder="Last Name" 
            value={formValues.lastname}
            onChange={handleChange} 
            /> 
           </div>
           <p>{formErrors.lastname}</p>

        <div className="form-field d-flex align-items-center">
           <span className="far fa-user"></span> 
           <input type="text" 
           name="Email" 
           id="Email" 
           placeholder="Email" 
           value={formValues.Email}
           onChange={handleChange}
           /> 
           </div>
           <p>{formErrors.Email}</p>

        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span> 
          <input type="password" 
          name='password' 
          id="password" 
          placeholder="Password"
          onChange={handleChange}
           />
           </div> 
           <p>{formErrors.password}</p>

           <button className="btn mt-3" onClick={handleSubmit}>Signup</button>

    </form>

    <div class="text-center fs-6"> Already have an account or <a href="#">Login</a> </div>
</div>
  );
}

export default App;
