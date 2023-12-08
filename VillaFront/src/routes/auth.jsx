import React from 'react'
import { useState } from 'react';
import SignIn from '../components/auth.components/signInForm';
import SignUp from '../components/auth.components/signUpForm';
import { Button } from '@mui/material';

function Auth() {
  const [isRegistered, setIsRegistered] = useState(true);
  const handleAction = function () {
    setIsRegistered(!isRegistered);
  };

  return (
    <>    
      <div id="sidebar">
        <Button 
        color = 'secondary' 
        onClick={handleAction}
        fullWidth= {true}
        size = 'large'
         >
          {isRegistered ? "Créer Un Compte → " : "Se connecter → "}
        </Button>
        {isRegistered ? <SignIn /> : <SignUp />}
      </div>

    </>

  )
}



export default Auth