import React from 'react'
import header from '@/app/styles/header.module.css'
import common from '@/app/styles/common.module.css'
import mobileapp from '@/app/styles/mobileapp.module.css'
import Picture from '../reuse/Picture'
import { Box, Typography } from '@mui/material'
import { PrimaryBtn } from '../reuse/Buttons'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
const Introduction = ( ) => {

  return (
    <div className={common.BGM}>
      <div className={mobileapp.main}>
        <Box pt={{ xs: '20px', md: '65px' }} >
          <Box sx={{ display: { xs: 'none', md: 'block' } }}> <Header mainStyle={header.mainMobileApp} /> </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}> <HeaderMobile menu='dark' /> </Box>
        </Box>
        <Box pt={{ xs: '48px', sm: '70px', md: '100px', lg: '108px' }} pb={{ xs: '80px', md: '100px', lg: '100px' }}>
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
            <PrimaryBtn />
          </Box>
          <Box>
            <Box width={{ xs: '90%', md: '80%', lg: '70%' }} margin='auto'>
              <Picture priority={true} src={'/mobileappmain.svg'} width={3159} height={1746} alt='' />
            </Box>
          </Box>
        </Box>

      </div>
    </div>
  )
}

export default Introduction
