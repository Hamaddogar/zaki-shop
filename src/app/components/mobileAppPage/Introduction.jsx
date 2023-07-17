'use client'
import React from 'react'
import mobileapp from '@/app/styles/mobileapp.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { arrowForward, arrowForwardSecond } from '../reuse/icons'
import { WritingAnimation } from '../reuse/Animation'

const Introduction = () => {

  return (
    <div className={mobileapp.main}>
      <Box pt={{ xs: '150px', sm: '290px', md: '300px' }} pb={10}
        width={{ xs: '90%', }}
        margin={'auto'}
      >
        <Grid container alignItems={'center'} justifyContent={'space-between'}>
          <Grid item xs={12}>
            <Box width={{ xs: '80%', md: '740px' }} margin='auto' mb={2}>
              <Typography color='primary' mb={1.3} className={mobileapp.subtitle}>
                Build Your Mobile App
              </Typography> 
              <Typography color='primary' className={mobileapp.subtitle}>
                Without Code
              </Typography>
            </Box>


          </Grid>
          <Grid item xs={12} >
            <Box my={{ xs: 5 }} textAlign='center'>
              <Button color='primary' className={mobileapp.primaryBtn} endIcon={arrowForward} >
                Start Now
              </Button>
            </Box>
            <Box width={{xs:'90%',md:'80%', lg:'70%'}} margin='auto'>
              <Picture src={'/mobileappmain.png'} width={3159} height={1746} alt='' periorty />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Introduction
