import { Badge, Box, Button, Card, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import { useNavigate, useParams } from 'react-router-dom'


const SingleNote = () => {

    const { id } = useParams()
    console.log(id)


    const navigate = useNavigate()


    const [singleNote, setSingleNote] = useState("")
    const [date, setDate] = useState()


    // Getting notes data from api
    useEffect(() => {
        const fetchingNote = async () => {
            const { data } = await axios.get(`http://localhost:8000/api/notes/${id}`,);

            setSingleNote(data)
            console.log(28, singleNote);
            setDate(data.updatedAt);
        };

        fetchingNote();
    }, [id, date]);





    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', height: '100vh', top: '0', left: '0', backgroundColor: 'black', opacity: '0.5' }}></Box>

            <Box sx={{ position: 'fixed', width: { xs: '87vw', lg: '70vw' }, maxHeight: '70vh', top: '15%', left: { xs: '5%', lg: '15%' }, zIndex: '1000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Paper sx={{ padding: '20px' }} elevation={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        {/* <Button onClick={() => popup(false)} sx={{}}><GrFormClose size={40} /></Button> */}
                        <Button onClick={() => navigate(-1)}><GrFormClose size={40} /></Button>
                    </Box>


                    {/* map single note */}
                    {/* {
                        singleNote.map((note) => {
                            return ( */}
                    <Box >
                        <Typography>{singleNote.title}</Typography>
                        <Typography>{singleNote.content}</Typography>
                        <Badge>{singleNote.category}</Badge>
                    </Box>
                    {/* )
                        })
                    } */}

                    {/* {singleNote.title} */}



                </Paper>

            </Box>
        </Box>
    )
}

export default SingleNote