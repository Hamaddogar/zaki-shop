import React from 'react'
import home from '@/styles/Home.module.css'
import Picture from '../reuse/Picture'
import { Box, ButtonBase, Hidden, Stack, Typography } from '@mui/material'
import { AndriodIcon, ISOIcon, miniFace } from '../reuse/icons'
import mobile from '@/components/images/mobile.svg'
import QR from '@/components/images/QR.svg'
import { ISOANDBTN } from '../reuse/Buttons'

const DownloadApp = ({ content }) => {

  return (
    <div className={home.DownloadApp}>
      <Box className={home.BG} sx={{ display: 'flex', color: '#0F1546', flexDirection: { xs: 'column-reverse', lg: 'row' }, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '30px', placeItems: 'center' }}>
        <Box width={{ xs: '70%', lg: 'auto' }} sx={{ display: 'inline-block', position: 'relative', top: '7px' }} >
          <Picture src={mobile} width={401} height={573} alt='mobile' />
        </Box>
        <Stack direction={{ xs: 'column' }} alignItems='center' justifyContent={{ xs: 'center', lg: 'flex-start' }} spacing={1.5} mb={'20px'}>
          <Box textAlign={{ xs: 'center', lg: 'left' }}>
            <Typography
              fontWeight={{ xs: 900 }}
              fontSize={{ xs: '22px', md: '42px', lg: '42px' }}
            >
              {content.title} {miniFace}
            </Typography>
            <Typography mb={{ xs: '31px' }}
              marginX={{ xs: 'auto', lg: '0px' }}
              fontWeight={{ xs: 400 }}
              fontSize={{ xs: '20px', md: '23px', lg: '23px' }}
              lineHeight={{ xs: 'normal', md: 'normal', lg: 'normal' }}
            >{content.subtitle} </Typography>
            <Stack direction={'row'} alignItems='center' justifyContent={{ xs: 'center', lg: 'flex-start' }} spacing={1.5} mb={'20px'}>
              <ISOANDBTN icon={ISOIcon} text={'iOS'} />
              <ISOANDBTN icon={AndriodIcon} text={'Andriod'} />
            </Stack>
          </Box>


          <Hidden lgUp>
            <Stack direction={{ xs: 'row', lg: 'column' }} alignItems='center' justifyContent={{ xs: 'center', lg: 'flex-start' }} spacing={1.5} mb={'20px'}>
              <Picture center={false} src={QR} alt='icon' width={120} height={120} />
              <Typography mb={{ xs: '31px' }}
                marginX={{ xs: 'auto', lg: '0px' }}
                // maxWidth={{ xs: '283', md: '432px', lg: '599px' }}
                fontSize={{ xs: '20px', md: '23px', lg: '23px' }}
                lineHeight={{ xs: 'normal', md: 'normal', lg: 'normal' }}
              >
                <b>{content.scanme}</b> <br />
                {content.rest}
              </Typography>
            </Stack>
          </Hidden>
        </Stack>
        <Hidden lgDown>
          <Stack direction={{ xs: 'row', lg: 'column' }} alignItems='center' justifyContent={{ xs: 'center', lg: 'flex-start' }} spacing={1.5} mb={'20px'}>
            <Picture center={false} src={QR} alt='icon' width={210} height={210} />
            <Typography mb={{ xs: '31px' }}
              marginX={{ xs: 'auto', lg: '0px' }}
              fontSize={{ xs: '20px', md: '23px', lg: '23px' }}
              lineHeight={{ xs: 'normal', md: 'normal', lg: 'normal' }}
            >
              <b>{content.scanme}</b> <br />
              {content.rest}
            </Typography>
          </Stack>
        </Hidden>
      </Box>

    </div>
  )
}

export default DownloadApp
