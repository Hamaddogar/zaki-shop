import React from 'react'
import common from '@/app/styles/common.module.css'
import services from '@/app/styles/services.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Hidden, Typography } from '@mui/material'
import { arrowForwardSecond } from '../reuse/icons'

const Introduction = ({ children, hgap }) => {

  return (
    <div className={common.BGM}>
      <div className={services.main}>
        <Box pt={{ xs: '20px', md: '65px' }} >{children}</Box>
        <Box pt={hgap} pb={{ xs: '80px', md: '100px', lg: '100px' }}>
          <Box sx={{ color: '#FFFFFF' }} textAlign={'center'} width={{ xs: '80%', md: '100%' }} margin='auto'>

            <Typography
              fontWeight={{ xs: 800 }}
              fontSize={{ xs: '23px', md: '50px', lg: '50px' }}
              lineHeight={{ xs: '29px', md: '49px', lg: '49px' }}
            >
              Create and customize <br />
              your website in one minute
            </Typography>
          </Box>
          <Box my="40px" textAlign='center'>
            <Button color='secondary' className={services.secondaryBtn} endIcon={arrowForwardSecond} >
              Start Now
            </Button>
          </Box>
          <Box>
            <Box width={{ xs: '90%', md: '80%', lg: '70%' }} margin='auto'>
              <Hidden lgDown>
                <Picture src={'/weblg.svg'} width={1095} height={487} alt=''  />
              </Hidden>
              <Hidden lgUp>
                <Picture src={'/webmd.svg'} width={820} height={619} alt=''  />
              </Hidden>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Introduction
