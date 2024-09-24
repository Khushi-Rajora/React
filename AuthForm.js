import React, { useState } from 'react'

export default function AuthForm() {
    const[isLogin, setIsLogin] = useState(true);
    const [userType, setUserType] = useState('');

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };
    return (
        <div className='container'>
        <div className='form-container'>
        <div className='form-toggle'>
            <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
            <button className={!isLogin ? 'active' : ""} onClick={()=> setIsLogin(false)}>Register</button>
        </div>
        {isLogin ? <>
        <div class='form'>
            <h2>Login Now</h2>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <a href='#'>Forgot Password?</a>
            <button>Login</button>
            <p>Don't have an Account? <a href='#' onClick={()=> setIsLogin()}>Register now</a></p>
        </div>
        </> : <>
        <div className='form'>
        <h2>Registrater Now</h2>
        <select value={userType} onChange={handleUserTypeChange}>
                                <option value="">--Select User Type--</option>
                                <option value="user">User</option>
                                <option value="organizer">Organizer</option>
                            </select>
        <br></br>
        <input type='Username' placeholder='Username'/>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <input type='password' placeholder='Confirm Password'/>
            <button>Register</button>
            </div>
        </>}
        </div>
        </div>
    )
}