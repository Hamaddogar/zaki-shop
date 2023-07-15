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
      <Box pt={{ xs: '150px', sm: '290px', md: '265' }} pb={10}
        width={{ xs: '90%', md: '80%' }}
        margin={'auto'}
      >
        <Grid container alignItems={'center'} rowGap={6} justifyContent={'space-between'}>
          <Grid item xs={12}>
            <Box width={{ xs: '80%', md: '740px' }} margin='auto' mb={.5}>
              <Typography sx={{ color: 'white' }} className={services.subtitle}>
                Create and customize
              </Typography> <Typography sx={{ color: 'white' }} className={services.subtitle}>
                your website in one minute
              </Typography>
            </Box>

            <Box my={{ xs: 5 }} textAlign='center'>
              <Button color='secondary' className={services.secondaryBtn} endIcon={arrowForwardSecond} >
                Start Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} >
            <Box>
              {/* <Picture src={'/face.png'} width={600} height={460} alt='' periorty /> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Introduction
