import { Box, Button, Card, CardContent, CardHeader, CardMedia, Paper, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useNavigate, useParams } from 'react-router-dom';

import profileUpload from '../../assets/profile-upload.png'

// for redux
import { useDispatch, useSelector } from 'react-redux';
import { createNoteAction, updateNoteAction } from '../../redux/actions/notesActions';
import axios from 'axios';
import { updateProfileAction } from '../../redux/actions/userActions';
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';

const MyProfile = () => {

  // const { id } = useParams()
  // console.log(id)

  const navigate = useNavigate();


  // user data
  const [updateUserData, setUpdateUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  console.log(31, updateUserData)

  const [pic, setPic] = useState("https://www.pngmart.com/files/22/User-Avatar-Profile-Download-PNG-Isolated-Image.png");

  const [picMessage, setPicMessage] = useState()

  const [confirmPassword, setConfirmPassword] = useState("")





  // for redux
  const dispatch = useDispatch();

  // here notCreate name in the store
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;



  // getting user data
  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    } else {
      setUpdateUserData({
        name: userInfo.name,
        email: userInfo.email,
      })
      setPic(userInfo.pic)
      console.log(63, updateUserData)
    }
  }, [navigate, userInfo])



  // input field change function
  const handleValueChange = (e) => {
    setUpdateUserData({ ...updateUserData, [e.target.name]: e.target.value })
  }




  // posting pic to cloudinary
  const postDetails = (pics) => {
    // setPicMessage(null)

    if (!pics) {
      return setPicMessage("Please select an image");
    }
    setPicMessage(null);

    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const data = new FormData();
      data.append('file', pics)
      data.append('upload_preset', 'notecache')
      data.append('cloud_name', 'raushancloud')

      fetch('https://api.cloudinary.com/v1_1/raushancloud/image/upload',
        {
          method: 'post',
          body: data
        }
      ).then(res => {
        return res.json()
      })
        .then(data => {
          // console.log(data.url)
          // setImageUrl(data.url)
          console.log(data)
          setPic(data.url.toString());
        })
        .catch(err => console.log(err))
    } else {
      return setPicMessage('Please select an image');
    }
  }




  // send data to api using redux
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log(120, updateUserData)

    // if (updateUserData.password === confirmPassword) {
      dispatch(updateProfileAction(updateUserData, pic));
    // }




    // window.location.href = "/mynotes";
    // navigate('/mynotes')
  }






  return (
    <Box sx={{ backgroundSize: '100% 82vh', height: '82vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column-reverse', md: 'row' }, gap: '20px' }}>
      <Box elevation={4} sx={{ width: { xs: '80%', md: '40%' }, padding: { xs: '5% 5%', md: '20px 70px' }, margin: { xs: '0px 5%', md: '0' } }}>

        {/* {error && <ErrorMessage severity="error">{error}</ErrorMessage>} */}
      {loading && <Loader />}
      {success && <ErrorMessage severity="success">Updated successfully!</ErrorMessage>}
        <form>
          <TextField variant='standard' type='name' name='name' value={updateUserData.name} onChange={handleValueChange} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Name' placeholder='Enter name' fullWidth required />
          <TextField variant='standard' type='email' name='email' value={updateUserData.email} onChange={handleValueChange} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Email' placeholder='Enter email' fullWidth required />
          <TextField variant='standard' type='password' name='password' value={updateUserData.password} onChange={handleValueChange} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Password' placeholder='Enter password' fullWidth required />
          <TextField variant='standard' type='password' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Confirm Password' placeholder='Enter confirm password' fullWidth required />

          <Button type='submit' onClick={handleUpdateProfile} color='primary' variant="contained" sx={{ margin: '10px 0' }} fullWidth>Update</Button>
        </form>
      </Box>

      {/* For select and upload and show image */}
      {picMessage && (
        <ErrorMessage severity="error">{picMessage}</ErrorMessage>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
        <Button
          // variant="contained"
          component="label"
          sx={{ width: 'fill' }}
        >
          {/* Click here to select a profile pic */}
          <CardMedia
            component='img'
            image={pic}
            alt=''
            sx={{ height: { xs: '150px', md: '400px' }, width: { xs: '150px', md: '400px' }, objectFit: 'fill', border: '1px solid white', outline: 'none' }}
            id='output'
          />
          <input
            id='pic'
            name='pic'
            type="file"
            hidden
            accept='image/*'
            onChange={(event) => {
              // loadfile(event);
              postDetails(event.target.files[0])
            }}
          />
        </Button>
      </Box>


    </Box>
  )
}

export default MyProfile













// bug when update profile pic