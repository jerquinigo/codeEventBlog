import React from 'react';

const SignUpForm = (props) => {
    return (
        <div className='signUpForm'>
            <form>
                <span className='signUp-username'>
                    <input value={props.userName} name='username' type="text"/>
                </span>
                <span className='signUp-email'>
                    <input value={props.email} name='email' type="text"/>
                </span>
                <span className='signUp-password'>
                    <input value={props.password} type="password"/>
                </span>
                <span>
                    <input  type="submit"/>
                </span>
            </form>
        </div>
    )
}

export default SignUpForm