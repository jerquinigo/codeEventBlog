import React from 'react'

const LoginForm = () => {
    return (
        <div className='login_form'>
        <h1>Log In</h1>
        <form >
            <span className='email'>
                Email: <input value='email' name='email' type="text"/>
            </span> 
            <span className='password'>   
                Password: <input value='password' name='passworl' type="password"/>
            </span>
            <span>
             <input className='login_btn' value='Log In' type="submit"/>
            </span>
        </form>
        </div>
    )
}

export default LoginForm;