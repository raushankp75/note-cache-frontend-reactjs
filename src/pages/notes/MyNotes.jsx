import React, { useEffect, useState } from 'react'
import PageLayout from '../../layout/PageLayout'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
// import notes from '../../data/notes'

import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'

import SingleNote from './SingleNote'
import axios from 'axios'

// for redux
import { useDispatch, useSelector } from 'react-redux'
import { allNotes } from '../../redux/actions/notesActions'

import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'



const MyNotes = () => {

    const navigate = useNavigate();


    const dispatch = useDispatch();
    const notesList = useSelector(state => state.notesList)
    const { loading, notes, error } = notesList;


    // for getting lofin info
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;




    // const [notes, setNotes] = useState([]);

    // for single note 
    const [popup, setPopup] = useState(false)




    // // fetch all post
    // const fetchNotes = async () => {
    //     console.log(notes)

    //     const {data} = await axios.get("http://localhost:8000/api/notes")

    //     setNotes(data)
    // }

    useEffect(() => {
        dispatch(allNotes())

         // navigating to this after logout
         if(!userInfo){
            navigate('/')
         }

        // fetchNotes()
    }, [dispatch]);




    // handle popup - for single note
    const handlePopup = (id) => {
        setPopup(true)
    }


    // delete function - for delete
    const deleteHandler = (id) => {
        if (window.confirm('Are you sure to delete?')) {

        }
    }


    return (
        <PageLayout title='Welcome Write notes...'>

            {/* for single note */}
            {popup && <SingleNote popup={setPopup} />}


            <Link to='/createnote' variant='outlined' style={{ backgroundColor: 'cyan', marginLeft:'auto', textDecoration:"none", padding:'10px 20px' }}>Create Note</Link>


            {/* map notes */}
            {error && <ErrorMessage severity="error">{error}</ErrorMessage>}
            <Grid item xs={12} container spacing={4} sx={{ marginTop: '1px' }}>
                {loading && <Loading />}
                {
                    notes?.map((note, index) => (
                        <Grid item lg={4} sm={6} xs={12} sx={{ cursor: 'pointer' }} key={index}>
                            {/* <Link to={`/note/${note._id}`} style={{ textDecoration: 'none' }}> */}
                            <Link onClick={() => { handlePopup(note._id) }} style={{ textDecoration: 'none' }}>
                                <Paper sx={{ padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} elevation={4}>
                                    <Typography sx={{ fontSize: '18px' }}>{note.title}</Typography>

                                    {/* edit and delete button */}
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        <Link to={`/editnote/${note._id}`}>
                                            <AiFillEdit color='green' size={27} />
                                        </Link>
                                        <Typography onClick={() => deleteHandler(note._id)}>
                                            <AiFillDelete color='red' size={27} />
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Link>
                        </Grid>
                    ))
                }

            </Grid>
        </PageLayout>
    )
}

export default MyNotes