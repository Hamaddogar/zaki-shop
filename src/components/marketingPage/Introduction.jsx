import React from 'react'
import header from '@/styles/Header.module.css'
import common from '@/styles/common.module.css'
import marketing from '@/styles/Marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Typography } from '@mui/material'
import { PrimaryBtn } from '../reuse/Buttons'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'

const Introduction = ({ content, BTNS }) => {

  return (
    <div className={common.BGM1}>
      <div className={marketing.main} sx={{ backgroundSize: { xs: '80%', md: '70%', lg: 'auto' } }}>
        <Box sx={{ overflow: 'hidden' }}>
          <Box pt={{ xs: '20px', md: '65px' }} >
            <Box sx={{ display: { xs: 'none', md: 'block' } }}> <Header mainStyle={header.mainMarketing} /> </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}> <HeaderMobile menu='dark' /> </Box>
          </Box>
          <Box pt={{ xs: '48px', sm: '70px', md: '100px', lg: '108px' }} pb={{ xs: '80px', md: '100px', lg: '0px' }}>

            <Box textAlign={'center'} width={{ xs: '80%', md: '100%' }} margin='auto'>

              <Typography
                color='primary'
                fontWeight={{ xs: 800 }}
                fontSize={{ xs: '23px', md: '50px', lg: '50px' }}
                lineHeight={{ xs: '29px', md: '49px', lg: '49px' }}
              >
                {content.title[0]} <br /> {content.title[1]}
              </Typography>
            </Box>
            <Box my="40px" textAlign='center'>
              <PrimaryBtn text={BTNS.start} />
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }, position: 'relative', top: { xs: 0, lg: '75px' } }} margin='auto'>
            <Picture src={'/marketingmainlg.svg'} width={1728} height={706} alt='' />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'none' }, position: 'relative' }} margin='auto'>
            <Picture src={'/marketingmainmd.svg'} width={980} height={581} alt='' />
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' }, position: 'relative' }} margin='auto'>
            <Picture src={'/marketingmainmdxs.svg'} width={351} height={504} alt='' />
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Introduction
