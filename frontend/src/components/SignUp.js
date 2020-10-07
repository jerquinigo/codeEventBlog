import React , { useState } from 'react';
import SignUpForm from './SignUpForm.js';

export default function SignUp() {

 const [email, setEmail ] = useState("");
 const [username, setUsername ] = useState("");
 const [password, setPassword ] = useState("");
 const [submitted, setSubmitter ] = useState(false);

      return(
          <div className='signUp'>
              <SignUpForm email={email} username={username} password={password} submitted={submitted}/>
          </div>
      )


}

