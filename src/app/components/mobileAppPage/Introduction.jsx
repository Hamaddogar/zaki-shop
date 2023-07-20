import React from 'react'
import common from '@/app/styles/common.module.css'
import mobileapp from '@/app/styles/mobileapp.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForward } from '../reuse/icons'
const Introduction = ({ children, hgap }) => {

  return (
    <div className={common.BGM}>
      <div className={mobileapp.main}>
        <Box pt={{ xs: '20px', md: '65px' }} >{children}</Box>
        <Box pt={hgap} pb={{ xs: '80px', md: '100px', lg: '100px' }}>
          <Box textAlign={'center'} width={{ xs: '80%', md: '100%' }} margin='auto'>

            <Typography
              color={'primary'}
              fontWeight={{ xs: 800 }}
              fontSize={{ xs: '23px', md: '50px', lg: '50px' }}
              lineHeight={{ xs: '29px', md: '49px', lg: '49px' }}
            >
              Build Your Mobile App <br />
              Without Code
            </Typography>
          </Box>
          <Box my="40px" textAlign='center'>
            <Button color='primary' className={mobileapp.primaryBtn} endIcon={arrowForward} >
              Start Now
            </Button>
          </Box>
          <Box>
            <Box width={{ xs: '90%', md: '80%', lg: '70%' }} margin='auto'>
              <Picture src={'/mobileappmain.svg'} width={3159} height={1746} alt='' periorty />
            </Box>
          </Box>
        </Box>










        {/* <Box pt={{ xs: '150px', sm: '290px', md: '300px' }} pb={10}
          width={{ xs: '90%', }}
          margin={'auto'}
        >
          <Grid container alignItems={'center'} justifyContent={'space-between'}>
            <Grid item xs={12}>
              <Box width={{ xs: '80%', md: '740px' }} margin='auto' mb={2}>
                <Typography color='primary' mb={1.3} className={mobileapp.subtitle}>

                </Typography>
                <Typography color='primary' className={mobileapp.subtitle}>

                </Typography>
              </Box>

            </Grid>
            <Grid item xs={12} >
              <Box my={{ xs: 5 }} textAlign='center'>
                <Button color='primary' className={mobileapp.primaryBtn} endIcon={arrowForward} >
                  Start Now
                </Button>
              </Box>
              <Box width={{ xs: '90%', md: '80%', lg: '70%' }} margin='auto'>
                <Picture src={'/mobileappmain.png'} width={3159} height={1746} alt='' periorty />
              </Box>
            </Grid>
          </Grid>
        </Box> */}
      </div>
    </div>
  )
}

export default Introduction
