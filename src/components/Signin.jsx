import React from 'react';

function Signin() {
  const signinStyles ={
    backgroundColor: '#6E9B92'
  }
  return(
    <div style={signinStyles}>
      <h1>Welcome to SquirreledAway</h1>
      <button>Sign in with Google</button>
      <h3>Create an account</h3>
      <label>Email: </label>
      <input
        type='text'
        id='email'/>
      <label>Password: </label>
      <input
        type='text'
        id='password'/>
      <button>Sign in</button>
    </div>
  );
}

export default Signin;
