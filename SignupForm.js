import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useState } from 'react';
import toast from 'react-hot-toast';
 const SignupForm = ({setISLoggedIn}) => {

const [showPassword , setShowPassword]=useState(false);

    const [formData,setFormData] = useState({
        firstName:"" , lastName:"",email:"",password:"",confirmPassword:"" 
    });

    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }));
        }

        function submitHandler(event){
event.preventDefault();
if(formData.password!==formData.confirmPassword){
    toast.error("Password do not match");
    return;
}
setISLoggedIn(true);
toast.success("Account Created");

        }
 
  return (
    <div>
        {/* Student instructor tab  */}
        <div>
            <button>Student</button>
            <button>Insructor</button>
        </div>

        <form onSubmit={submitHandler}>

    <div>
    <label>
        <p>
            First Name<sup>*</sup>
        </p>
        <input
        required type="text"
        name='firstName'
        onChange={changeHandler}
        placeholder='Enter first Name'
        value={formData.firstName}></input>
    </label>

    <label>
        <p>
            Last Name<sup>*</sup>
        </p>
        <input
        required type="text"
        name='lastName'
        onChange={changeHandler}
        placeholder='Enter last Name'
        value={formData.lastName}></input>
    </label>
    </div>
    
    <label>
        <p>
            Email<sup>*</sup>
        </p>
        <input
        required type="email"
        name='email'
        onChange={changeHandler}
        placeholder='Enter email'
        value={formData.email}></input>
    </label>

<div>
    <label>
        <p>
           Create Password<sup>*</sup>
        </p>
        <input
        required type={showPassword? ("Text"): ("password")}
        name='password'
        onChange={changeHandler}
        placeholder='Enter Password'
        value={formData.password}></input>
        <span onClick={()=>setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>) }
        </span>
    </label>



    <label>
        <p>
           Confirm Password<sup>*</sup>
        </p>
        <input
        required type={showPassword? ("Text"): ("password")}
        name='confirmPassword'
        onChange={changeHandler}
        placeholder='Confirm Password'
        value={formData.confirmPassword}></input>
        <span onClick={()=>setShowPassword((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>) }
        </span>
    </label>
    </div>

    <button>
        Create Account
    </button>
        </form>
    </div>
  )
}
export default SignupForm 
