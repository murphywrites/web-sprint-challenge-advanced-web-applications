import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  let history = useHistory();
  const [credentials, setCredentials] = useState({username:'', password:''})

  const handleChange = evt => {
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value
    })
  }

  const login = evt => {
    evt.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res=> {
        // console.log(res.data)
        localStorage.setItem('token', res.data.payload);
        history.push('/protected');
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
    <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.