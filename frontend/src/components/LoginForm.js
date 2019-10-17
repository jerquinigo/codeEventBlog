import React from 'react'

const LoginForm = () => {
    return (
        <div className='login_form'>
        <h1>Log In</h1>
        <form >
            <span className='email'>email
                Email: <input value='email' name='email' type="text"/>
                Password: <input value='password' name='passworl' type="password"/>
            </span>
        </form>
        </div>
    )
}

export default LoginForm;