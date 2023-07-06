import React, { useState } from 'react'
import PageLayout from '../../layout/PageLayout'
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import loginSignupBg from '../../assets/login-signup-bg.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  // login data
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // for error
  const [error, setError] = useState(false);

  // for loading
  const [loading, setLoading] = useState(false);


  // input field change function
  const handleValueChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }


  // post data to the api function
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(loginData)

    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }

      setLoading(false)
      const { data } = await axios.post("http://localhost:8000/api/users/login", loginData, {
        config
      });

      console.log(data)
      localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
      setError(error.response.data.message)
    }
  }



  return (
    <div style={{ background: `url(${loginSignupBg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 82vh', height: '82vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Paper sx={{ width: { xs: '80%', md: '40%' }, padding: { xs: '5% 5%', md: '20px 70px' }, margin: { xs: '0px 5%', md: '0' } }}>
        <Typography sx={{ fontSize: '25px' }}>Log in to your account</Typography>
        <form>
          <TextField variant='standard' type='email' name='email' value={loginData.email} onChange={handleValueChange} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Email' placeholder='Enter email' fullWidth required />
          <TextField variant='standard' type='password' name='password' value={loginData.password} onChange={handleValueChange} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Password' placeholder='Enter password' fullWidth required />

          <Button type='submit' onClick={handleLogin} color='primary' variant="contained" sx={{ margin: '10px 0' }} fullWidth>Login</Button>

          {/* <Typography sx={{ textAlign: 'center', fontSize: '13px', margin: '5px 0' }}>OR</Typography> */}

          <Typography sx={{ fontSize: '13px', margin: '12px 0' }}> Don't have an account?
            <Link to="/signup" > Sign Up </Link>
          </Typography>
        </form>
      </Paper>
    </div>
  )
}

export default Login