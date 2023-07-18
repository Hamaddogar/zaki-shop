import React from 'react'
import marketing from '@/app/styles/marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Typography } from '@mui/material'
import { arrowForward } from '../reuse/icons'

const Introduction = () => {

  return (
    <div className={marketing.main}>
      <Box pt={{ xs: '190px', sm: '290px', md: '300px' }} pb={{ xs: 10, lg: 0 }}
        width={{ xs: '90%', }}
        margin={'auto'}
      >
        <Box width={{ xs: '80%', md: '740px' }} margin='auto' mb={2}>
          <Typography color='primary' mb={1.3} className={marketing.subtitle}>
            Think of it as an ad
          </Typography>
          <Typography color='primary' className={marketing.subtitle}>
            agency in one place.
          </Typography>
        </Box>
        <Box mt={3} textAlign='center'>
          <Button color='primary' className={marketing.primaryBtn} endIcon={arrowForward} >
            Start Now
          </Button>
        </Box>
      </Box>
      <Box position='relative' bottom={{ xs: 0, lg: '-70px' }} >
        <Picture src={'/marketingmain.png'} width={3440} height={1275} alt='' periorty />
      </Box>
    </div>
  )
}

export default Introduction
