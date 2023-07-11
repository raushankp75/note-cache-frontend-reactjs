import { Box, Button, Card, CardContent, CardHeader, Paper, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useNavigate, useParams } from 'react-router-dom';

// for redux
import { useDispatch, useSelector } from 'react-redux';
import { createNoteAction, updateNoteAction } from '../../redux/actions/notesActions';
import axios from 'axios';

const EditNote = () => {

  const { id } = useParams()
  // console.log(id)

  const navigate = useNavigate();


  // signup data
  const [editNotesData, setEditNotesData] = useState({
    title: '',
    content: '',
    category: ''
  });

  const [date, setDate] = useState("");



  // for redux
  const dispatch = useDispatch();

  // here notCreate name in the store
  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;
  // console.log(note)



  // input field change function
  const handleValueChange = (e) => {
    setEditNotesData({ ...editNotesData, [e.target.name]: e.target.value })
  }




  // Getting notes data from api
  useEffect(() => {
    const fetchingNote = async () => {
      const { data } = await axios.get(`http://localhost:8000/api/notes/${id}`,);

      setEditNotesData({
        title: data.title,
        content: data.content,
        category: data.category
      });
      console.log(54,editNotesData);
      setDate(data.updatedAt);
    };

    fetchingNote();
  }, [id, date]);






  // send data to api using redux
  const handleUpdateNote = (e) => {
    e.preventDefault();
    console.log(editNotesData)

    // here updateNote name in the noteActions
    dispatch(updateNoteAction(id, editNotesData));
    if (!editNotesData.title || !editNotesData.content || !editNotesData.category) return;

  

    // window.location.href = "/mynotes";
    navigate('/mynotes')
  }






  return (
    <div style={{ height: '82vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={20} sx={{ width: { xs: '85%', md: '60%' }, padding: { xs: '6% 6%', md: '40px 40px' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '25px' }}>Create Your Notes</Typography>
          {/* <Typography>Updated On: {new Date().toLocaleDateString()}</Typography> */}
          <Typography>Updated On: {date.substring(0, 10)}</Typography>
        </Box>

        {/* {error && <ErrorMessage severity="error">{error}</ErrorMessage>}
        {message && <ErrorMessage severity="error">{message}</ErrorMessage>}
        {loading && <Loader />} */}
        <form>
          <TextField variant='outlined' type='text' name='title' value={editNotesData.title} onChange={handleValueChange} sx={{ margin: '10px 0', borderRadius: '5px' }} label='title' placeholder='Enter title' fullWidth />
          <TextareaAutosize
            name='content'
            minRows={3}
            maxRows={16}
            placeholder='Write your content...'
            style={{ padding: '10px 10px', width: '96%', fontSize: '16px', fontFamily: 'sans-serif', letterSpacing: '2px', borderRadius: '5px' }}
            value={editNotesData.content} onChange={handleValueChange}
          />
          {editNotesData.content && (
            <>
              <Typography>Note Preview</Typography>
              <Card variant='elevation' elevation={4} sx={{ padding: '0px 10px', wordWrap: 'break-word', fontSize: '16px' }}>
                <ReactMarkdown>{editNotesData.content}</ReactMarkdown>
              </Card>
            </>
          )}

          <TextField variant='outlined' type='text' name='category' value={editNotesData.category} onChange={handleValueChange} sx={{ margin: '10px 0', borderRadius: '5px' }} label='category' placeholder='Enter category' fullWidth />

          <Box sx={{ display: 'flex', gap: '60px' }}>
            <Button type='submit' onClick={handleUpdateNote} color='primary' variant="contained" sx={{ margin: '10px 0' }} fullWidth>Create Note</Button>
            {/* <Button onClick={handleReset} color='error' variant="contained" sx={{ margin: '10px 0' }} fullWidth>Reset</Button> */}
          </Box>
        </form>
      </Paper>
    </div>
  )
}

export default EditNote