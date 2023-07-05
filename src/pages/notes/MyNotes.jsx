import React from 'react'
import PageLayout from '../../layout/PageLayout'
import { Link } from 'react-router-dom'
import { Button, Grid, Paper } from '@mui/material'

const MyNotes = () => {
    return (
        <PageLayout title='Raushan'>
            <Link to='/createnote'>
                <Button variant='outlined' sx={{ backgroundColor: 'cyan' }}>Create Note</Button>
            </Link>

            {/* main notes card area */}

            <Grid item xs={12} container spacing={4} marginTop={1}>
                <Grid item lg={4} sm={6} xs={12}>
                    <Paper sx={{ padding: '30px' }} elevation={4}>
                        sgsgfsj
                    </Paper>
                </Grid>
                <Grid item lg={4} sm={6} xs={12}>
                    <Paper sx={{ padding: '30px' }} elevation={4}>
                        sgsgfsj
                    </Paper>
                </Grid>
                <Grid item lg={4} sm={6} xs={12}>
                    <Paper sx={{ padding: '30px' }} elevation={4}>
                        sgsgfsj
                    </Paper>
                </Grid>
                

            </Grid>







        </PageLayout>
    )
}

export default MyNotes