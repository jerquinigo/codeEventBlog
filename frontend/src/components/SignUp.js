import React from 'react';
import SignUpForm from './SignUpForm.js';

class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            email : '',
            username: '',
            password: '',
            submitted: false,
        }
    }
  render(){
      const {email, username, password, submitted} = this.state;
      return(
          <div className='signUp'>
              <SignUpForm email={email} username={username} password={password} submitted={submitted}/>
          </div>
      )
  }

}

export default SignUp;