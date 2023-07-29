import React from 'react'
import common from '@/styles/Common.module.css'
import services from '@/styles/Services.module.css'
import header from '@/styles/Header.module.css'
import Picture from '../reuse/Picture'
import { Box, Hidden, Typography } from '@mui/material'
import { SecondaryBtn } from '../reuse/Buttons'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import weblg from '@/components/images/weblg.svg'
import webmd from '@/components/images/webmd.svg' 

const Introduction = ({ content, BTNS }) => {

  return (
    <div className={common.BGM}>
      <div className={services.main}>
        <Box pt={{ xs: '20px', md: '65px' }} >
          <Box sx={{ display: { xs: 'none', md: 'block' } }}> <Header mainStyle={header.mainService} /> </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}> <HeaderMobile menu={'light'} /> </Box>
        </Box>
        <Box pt={{ xs: '48px', sm: '70px', md: '100px', lg: '108px' }} pb={{ xs: '80px', md: '100px', lg: '100px' }}>
          <Box sx={{ color: '#FFFFFF' }} textAlign={'center'} width={{ xs: '80%', md: '100%' }} margin='auto'>

            <Typography
              fontWeight={{ xs: 800 }}
              fontSize={{ xs: '23px', md: '50px', lg: '50px' }}
              lineHeight={{ xs: '29px', md: '49px', lg: '49px' }}
            >
              {content.title[0]} <br /> {content.title[1]}
            </Typography>
          </Box>
          <Box my="40px" textAlign='center'>
            <SecondaryBtn text={BTNS.start} />
          </Box>
          <Box>
            <Box width={{ xs: '90%', md: '80%', lg: '70%' }} margin='auto'>
              <Hidden lgDown>
                <Picture src={weblg} width={1095} height={487} alt='' />
              </Hidden>
              <Hidden lgUp>
                <Picture src={webmd} width={820} height={619} alt='' />
              </Hidden>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Introduction
