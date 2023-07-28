import React from 'react'
import home from '@/styles/Home.module.css'
import Picture from '../reuse/Picture'
import { Box,Typography } from '@mui/material'
import Link from 'next/link'
import { PrimaryBtn } from '../reuse/Buttons'

const MobileApp = ({ content, BTNS }) => {

  return (
    <div className={home.MobileApp}>
      <Box flexDirection={{ xs: 'column', lg: 'row' }} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '30px', placeItems: 'center' }}>
        <Box textAlign={{ xs: 'center', lg: 'left' }}>
          <Typography
            color='primary'
            fontWeight={{ xs: 900 }}
            fontSize={{ xs: '40px', md: '45px', lg: '103px' }}
            lineHeight={{ xs: '85px', md: '85px', lg: '135px' }}
          >
           {content.title}
          </Typography>

          <Typography mb={{ xs: '31px' }}
            marginX={{ xs: 'auto', lg: '0px' }}
            maxWidth={{ xs: '327px', md: '432px', lg: '599px' }}
            color='primary'
            fontWeight={{ xs: 400 }}
            fontSize={{ xs: '16px', md: '20px', lg: '33px' }}
            lineHeight={{ xs: 'normal', md: 'normal', lg: 'normal' }}
          >{content.subtitle}</Typography>
          <Link href={'/mobileapp'}>
            <PrimaryBtn text={BTNS.start} />
          </Link>
        </Box>
        <Box pt={{ xs: 0, lg: 15 }} width={{ xs: '80%', lg: 'auto' }} margin='auto' pl={{ xs: 0, lg: 3 }}>
          <Picture src={'/mobileapp.svg'} width={274} height={396} alt='MobileApp' />
        </Box>
      </Box>
    </div>
  )
}

export default MobileApp
