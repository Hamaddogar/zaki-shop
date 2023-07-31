"use client"
import React from 'react'
import header from '@/styles/Header.module.css'
import common from '@/styles/Common.module.css'
import home from '@/styles/Home.module.css'
import Picture from '../reuse/Picture'
import { Box, Stack, Typography } from '@mui/material'
import { PrimaryBtn } from '../reuse/Buttons'
import HeaderMobile from '../HeaderMobile'
import Header from '../Header'
import face from '@/components/images/face.svg'
import playIcon from '@/components/images/playIcon.png'
import muteIcon from '@/components/images/muteIcon.png'
import stopIcon from '@/components/images/stopIcon.png'
import unmuteIcon from '@/components/images/unmuteIcon.png'
import WithBackground from '../reuse/WithBackground'

const Introduction = ({ content, BTNS }) => {
  const [playing] = React.useState(false);
  const [device, setdevice] = React.useState(null)
  React.useEffect(() => {
    setdevice(window.navigator.userAgent);
  }, [])



  return (
    <WithBackground>
      <div className={common.BGM}>
        <div className={home.main}>
          <Box pt={{ xs: '20px', md: '65px' }} >
            <Box sx={{ display: { xs: 'none', md: 'block' } }}> <Header mainStyle={header.main} /> </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}> <HeaderMobile menu='dark' /> </Box>
          </Box>
          <Box pt={{ xs: '20px', sm: '150px', md: '167px', lg: '200px' }} pb={{ xs: '100px', md: '85px', lg: 'auto' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
              <Box>
                <Box textAlign={{ xs: 'center', lg: 'left' }} width={{ xs: '80%', md: '100%' }} margin='auto'>
                  <Typography color='primary'
                    sx={{ fontWeight: 900 }}
                    fontSize={{ xs: '40px', md: '110px', lg: '97px' }}
                  // lineHeight={{ xs: '84px', md: '84px', lg: '84px' }}
                  >
                    {content.title}
                  </Typography>

                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Typography color='primary'
                      fontWeight={{ xs: 600 }}
                      fontSize={{ xs: '23px', sm: '30px', md: '53px', lg: '57px' }}
                      lineHeight={{ xs: '29px', sm: '45px', md: '59px', lg: '64px' }}
                    >
                      {/* {content.subtitle[0]} <br />
                      {content.subtitle[1]}<br />
                      {content.subtitle[2]} */}
                      {device}
                    </Typography>
                  </Box>
                  <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <Typography color='primary'
                      fontWeight={{ xs: 600 }}
                      fontSize={{ xs: '23px', sm: '30px', md: '53px', lg: '57px' }}
                      lineHeight={{ xs: '29px', sm: '45px', md: '59px', lg: '64px' }}
                      maxWidth={{ xs: '330px', sm: '430px' }}
                      mx='auto'
                    >
                      {/* {content.subtitle2} */}
                      {device}
                    </Typography>
                  </Box>
                </Box>
                <Box mt={{ xs: 5 }} textAlign={{ xs: 'center', lg: 'left' }}>
                  <PrimaryBtn text={BTNS.start} />
                </Box>
              </Box>
              <Box >
                <Box width={{ xs: '86%', }} margin='auto'>
                  <Picture priority={true} src={face} width={570} height={430} alt='' />
                </Box>
                <Stack mt={4} direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}>
                  {!playing && <Picture center={false} src={playIcon} alt='' width={58} height={58} />}
                  {!playing && <Picture center={false} src={muteIcon} alt='' width={58} height={58} />}
                  {playing && <Picture center={false} src={stopIcon} alt='' width={58} height={58} />}
                  {playing && <Picture center={false} src={unmuteIcon} alt='' width={58} height={58} />}
                </Stack>
              </Box>
            </Box>
          </Box>
        </div >
      </div >
    </WithBackground>
  )
}

export default Introduction
