import React from 'react'

const LoginForm=()=> {
    const[formData,setFormData]=useState({
        email:"",password:""
    })

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target,value;
            }
        ))
    }
  return (
    <form>
        <label>
            <p>
Email Address<sup>*</sup>
            </p>
            <input required type="text" 
            value={formData.email}
            onChange={changeHandler}
            placeholder="enter email id">
            </input>
        </label>

        <label>
            <p>
             Password<sup>*</sup>
            </p>
            <input required type="text" 
            value={formData.email}
            onChange={changeHandler}
            placeholder="enter email id">
            </input>
        </label>



    </form>
  )
}
export default LoginForm
