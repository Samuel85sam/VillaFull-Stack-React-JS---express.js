import React from 'react'
import { useState } from 'react';
import SignIn from '../components/auth.components/signInForm';
import SignUp from '../components/auth.components/signUpForm';

function Auth() {
  const [isRegistered, setIsRegistered] = useState(true);
  const handleAction = function () {
    setIsRegistered(!isRegistered);
  };

  return (
    <>
      <h1>Login Page</h1>
      <div id="sidebar">
        <button onClick={handleAction}>
          {isRegistered ? "S'enregistrer" : "Se connecter"}
        </button>
        {isRegistered ? <SignIn /> : <SignUp />}
      </div>
    </>

  )
}



export default Auth

