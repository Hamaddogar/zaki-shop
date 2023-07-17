'use client'
import React from 'react'
import services from '@/app/styles/services.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { arrowForwardSecond } from '../reuse/icons'
import { WritingAnimation } from '../reuse/Animation'

const Introduction = () => {

  return (
    <div className={services.main}>
      <Box pt={{ xs: '150px', sm: '290px', md: '305px' }} pb={10}
        width={{ xs: '90%', }}
        margin={'auto'}
      >
        <Grid container alignItems={'center'} justifyContent={'space-between'}>
          <Grid item xs={12}>
            <Box width={{ xs: '80%', md: '740px' }} margin='auto' mb={.5}>
              <Typography sx={{ color: 'white' }} className={services.subtitle}>
                Create and customize
              </Typography> <Typography sx={{ color: 'white' }} className={services.subtitle}>
                your website in one minute
              </Typography>
            </Box>


          </Grid>
          <Grid item xs={12} >
            <Box my={{ xs: 5 }} textAlign='center'>
              <Button color='secondary' className={services.secondaryBtn} endIcon={arrowForwardSecond} >
                Start Now
              </Button>
            </Box>
            <Box width={{xs:'90%',md:'80%', lg:'70%'}} margin='auto'>
              <Picture src={'/webmain.png'} width={1900} height={1300} alt='' periorty />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Introduction
