import React, { useState } from 'react'


const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})

    // validation function
    const validate = () => {
        let errors = {};
        if (!username) errors.username = "Username is required"
        if (!email) errors.email = "Email is required"
        if (!password) errors.password = "Password is required"
        return errors;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors)
        } else {
            // submit form logic here
            console.log({username, email, password})
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text"
             value={username}
             onChange={(e) => setUsername(e.target.value)} />
             {errors.username && <p>{errors.username}</p>}
             </div>

             <div>
            <label htmlFor="email">Email</label>
            <input type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p>{errors.email}</p>}
           </div> 

            <div>
            <label htmlFor="password">Password</label>
            <input type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p>{errors.password}</p>}
            
            </div>
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default RegistrationForm
