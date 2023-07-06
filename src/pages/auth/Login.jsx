import React, { useEffect, useState } from 'react'
import PageLayout from '../../layout/PageLayout'
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import loginSignupBg from '../../assets/login-signup-bg.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loader from '../../components/Loader'
import ErrorMessage from '../../components/ErrorMessage'


// for redux
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/userActions'



const Login = (history) => {

  const navigate = useNavigate();

  // for redux - use to call our actions for api
  const dispatch = useDispatch();

  // for redux - use to access our state -- userLogin is the name that is written inside the combineReducers in STORE.js
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin

  // login data
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // // for error
  // const [error, setError] = useState(false);

  // // for loading
  // const [loading, setLoading] = useState(false);



  // input field change function
  const handleValueChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }




  // for going to next page after login
  useEffect(() => {
    if (userInfo) {
      navigate('/mynotes')
    }
  }, [navigate, userInfo])





  // post data to the api function
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(loginData)

    // using redux for calling api
    dispatch(login(loginData));


    // try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   }

    //   setLoading(true)
    //   const { data } = await axios.post("http://localhost:8000/api/users/login", loginData, {
    //     config
    //   });

    //   console.log(data)
    //   localStorage.setItem('userInfo', JSON.stringify(data))
    //   setLoading(false)
    // } catch (error) {
    //   setError(error.response.data.message)
    //   setLoading(false)
    // }
  }



  return (
    <div style={{ background: `url(${loginSignupBg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 82vh', height: '82vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Paper elevation={4} sx={{ width: { xs: '80%', md: '40%' }, padding: { xs: '5% 5%', md: '20px 70px' }, margin: { xs: '0px 5%', md: '0' } }}>
        <Typography sx={{ fontSize: '25px' }}>Log in to your account</Typography>

        {error && <ErrorMessage severity="error">{error}</ErrorMessage>}
        {loading && <Loader />}
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