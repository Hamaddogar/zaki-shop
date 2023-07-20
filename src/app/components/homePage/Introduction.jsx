"use client"
import React from 'react'
import common from '@/app/styles/common.module.css'
import home from '@/app/styles/home.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Hidden, Stack, Typography } from '@mui/material'
import { arrowForward } from '../reuse/icons'

const Introduction = ({ children, hgap }) => {
  const [playing] = React.useState(false)

  return (
    <div className={common.BGM}>
      <div className={home.main}>
        <Box
          pt={{ xs: '20px', md: '65px' }}
        >{children}</Box>
        <Box pt={hgap} pb={{ xs: '100px', md: '85px', lg: 'auto' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
            <Box>
              <Box textAlign={{ xs: 'center', lg: 'left' }} width={{ xs: '80%', md: '100%' }} margin='auto'>
                <Typography color='primary'
                  sx={{ fontWeight: 900 }}
                  fontSize={{ xs: '40px', md: '110px', lg: '97px' }}
                // lineHeight={{ xs: '84px', md: '84px', lg: '84px' }}
                >
                  What i do !
                </Typography>
                <Typography color='primary'
                  fontWeight={{ xs: 600 }}
                  fontSize={{ xs: '23px', md: '53px', lg: '57px' }}
                  lineHeight={{ xs: '29px', md: '59px', lg: '64px' }}
                >
                  <Hidden smDown>
                    i can do websites,<br />
                    Mobile App, Marketing <br />
                    & Invoices
                  </Hidden>
                  <Hidden smUp>
                    i can do websites,
                    Mobile App, Marketing
                    & Invoices
                  </Hidden>
                </Typography>
              </Box>
              <Box mt={{ xs: 5 }} textAlign={{ xs: 'center', lg: 'left' }}>
                <Button color='primary' className={home.primaryBtn} endIcon={arrowForward} >
                  Start Now
                </Button>
              </Box>
            </Box>
            <Box >
              <Box width={{ xs: '86%', }} margin='auto'>
                <Picture src={'/face.svg'} width={570} height={430} alt='' periorty />
              </Box>
              <Stack mt={4} direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}>
                {!playing && <Picture center={false} src={'/playIcon.png'} alt='' width={58} height={58} />}
                {!playing && <Picture center={false} src={'/muteIcon.png'} alt='' width={58} height={58} />}
                {playing && <Picture center={false} src={'/stopIcon.png'} alt='' width={58} height={58} />}
                {playing && <Picture center={false} src={'/unmuteIcon.png'} alt='' width={58} height={58} />}
              </Stack>
            </Box>
          </Box>
        </Box>
      </div >
    </div >
  )
}

export default Introduction
