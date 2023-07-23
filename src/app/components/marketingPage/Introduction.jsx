import React from 'react'
import common from '@/app/styles/common.module.css'
import marketing from '@/app/styles/marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Typography } from '@mui/material'
import { arrowForward } from '../reuse/icons'

const Introduction = ({ children, hgap }) => {

  return (
    <div className={common.BGM1}>
      <div className={marketing.main} sx={{ backgroundSize: { xs: '80%', md: '70%', lg: 'auto' } }}>
        <Box pt={{ xs: '20px', md: '65px' }} >{children}</Box>
        <Box pt={hgap} pb={{ xs: '80px', md: '100px', lg: '0px' }}>

          <Box textAlign={'center'} width={{ xs: '80%', md: '100%' }} margin='auto'>

            <Typography
              color='primary'
              fontWeight={{ xs: 800 }}
              fontSize={{ xs: '23px', md: '50px', lg: '50px' }}
              lineHeight={{ xs: '29px', md: '49px', lg: '49px' }}
            >
              Think of it as an ad <br />
              agency in one place.
            </Typography>
          </Box>
          <Box my="40px" textAlign='center'>
            <Button color='primary' className={marketing.primaryBtn} endIcon={arrowForward} >
              Start Now
            </Button>
          </Box>
          <Box>

            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }, position: 'relative', top: { xs: 0, lg: '75px' } }} margin='auto'>
              <Picture src={'/marketingmainlg.svg'} width={1728} height={706} alt=''  />
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'none' }, position: 'relative' }} margin='auto'>
              <Picture src={'/marketingmainmd.svg'} width={980} height={581} alt=''  />
            </Box>

            <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' }, position: 'relative' }} margin='auto'>
              <Picture src={'/marketingmainmdxs.svg'} width={351} height={504} alt=''  />
            </Box>

          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Introduction
