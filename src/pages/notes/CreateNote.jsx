import { Box, Button, Card, CardContent, CardHeader, Paper, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useNavigate } from 'react-router-dom';

// for redux
import { useDispatch, useSelector } from 'react-redux';
import { createNoteAction } from '../../redux/actions/notesActions';

const CreateNote = () => {

  const navigate = useNavigate();


  // signup data
  const [createNotesData, setCreateNotesData] = useState({
    title: '',
    content: '',
    category: ''
  });



  // for redux
  const dispatch = useDispatch();

  // here notCreate name in the store
  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;
  // console.log(note)



  // input field change function
  const handleValueChange = (e) => {
    setCreateNotesData({ ...createNotesData, [e.target.name]: e.target.value })
  }



  // Empty all fields
  const handleReset = () => {
    setCreateNotesData({
      title: '',
      content: '',
      category: ''
    })
  };



  // send data to api using redux
  const handleCreateNote = (e) => {
    e.preventDefault();
    console.log(createNotesData)

    // here createNote name in the noteActions
    if(!createNotesData.title || !createNotesData.content || !createNotesData.category) return;
    dispatch(createNoteAction(createNotesData));

    handleReset();

    window.location.href = "/mynotes";
    // navigate('/mynotes')
  }






  return (
    <div style={{ height: '82vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={20} sx={{ width: { xs: '85%', md: '60%' }, padding: { xs: '6% 6%', md: '40px 40px' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '25px' }}>Create Your Notes</Typography>
          <Typography>Today Date: {new Date().toLocaleDateString()}</Typography>
        </Box>

        {/* {error && <ErrorMessage severity="error">{error}</ErrorMessage>}
        {message && <ErrorMessage severity="error">{message}</ErrorMessage>}
        {loading && <Loader />} */}
        <form>
          <TextField variant='outlined' type='text' name='title' value={createNotesData.title} onChange={handleValueChange} sx={{ margin: '10px 0', borderRadius: '5px' }} label='title' placeholder='Enter title' fullWidth />
          <TextareaAutosize
            name='content'
            minRows={3}
            maxRows={16}
            placeholder='Write your content...'
            style={{ padding: '10px 10px', width: '96%', fontSize: '16px', fontFamily: 'sans-serif', letterSpacing: '2px', borderRadius: '5px' }}
            value={createNotesData.content} onChange={handleValueChange}
          />
          {createNotesData.content && (
            <>
              <Typography>Note Preview</Typography>
              <Card variant='elevation' elevation={4} sx={{ padding: '0px 10px', wordWrap: 'break-word', fontSize: '16px' }}>
                <ReactMarkdown>{createNotesData.content}</ReactMarkdown>
              </Card>
            </>
          )}

          <TextField variant='outlined' type='text' name='category' value={createNotesData.category} onChange={handleValueChange} sx={{ margin: '10px 0', borderRadius: '5px' }} label='category' placeholder='Enter category' fullWidth />

          <Box sx={{ display: 'flex', gap: '60px' }}>
            <Button type='submit' onClick={handleCreateNote} color='primary' variant="contained" sx={{ margin: '10px 0' }} fullWidth>Create Note</Button>
            <Button onClick={handleReset} color='error' variant="contained" sx={{ margin: '10px 0' }} fullWidth>Reset</Button>
          </Box>
        </form>
      </Paper>
    </div>
  )
}

export default CreateNote