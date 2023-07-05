import { Badge, Box, Button, Card, Paper, Typography } from '@mui/material'
import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import { useParams } from 'react-router-dom'


const SingleNote = ({ popup }) => {

    const { id } = useParams();


    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', height: '100vh', top: '0', left: '0', backgroundColor: 'black', opacity: '0.5' }}></Box>

            <Box sx={{ position: 'fixed', width: { xs: '87vw', lg: '70vw' }, maxHeight: '70vh', top: '15%', left: { xs: '5%', lg: '15%' }, zIndex: '1000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Paper sx={{ padding: '20px' }} elevation={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <Button onClick={() => popup(false)} sx={{}}><GrFormClose size={40} /></Button>
                    </Box>


                    {/* map single note */}
                    {/* {
                        notes.map((note, index) => (
                            <Typography>{note.content}</Typography>
                            ))
                        } */}

                    <Badge>Category</Badge>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, officia?</Typography>

                </Paper>

            </Box>
        </Box>
    )
}

export default SingleNote