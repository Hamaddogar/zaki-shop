import React from 'react'
import home from '@/app/styles/home.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Typography } from '@mui/material'
import { arrowForwardSecond } from '../reuse/icons'
import Link from 'next/link'
import { SecondaryBtn } from '../reuse/Buttons'

const Websites = () => {

  return (
    <Box className={home.websites}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', lg: 'row' }, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '30px', placeItems: 'center' }}>
        <Box width={{ xs: '80%', lg: 'auto' }} margin='auto' pr={{ xs: 0, lg: 3 }}>
          <Picture src={'/websites.svg'} width={402} height={349} alt='websites' />
        </Box>
        <Box textAlign={{ xs: 'center', lg: 'left' }}>
          <Typography
            sx={{ color: '#FFFFFF' }}
            fontWeight={{ xs: 900 }}
            fontSize={{ xs: '40px', md: '45px', lg: '106px' }}
            lineHeight={{ xs: '85px', md: '85px', lg: '135px' }}
          >
            Websites
          </Typography>

          <Typography mb={{ xs: '31px' }}
            marginX={{ xs: 'auto', lg: '0px' }}
            maxWidth={{ xs: '327px', md: '432px', lg: '599px' }}
            sx={{ color: '#FFFFFF' }}
            fontWeight={{ xs: 400 }}
            fontSize={{ xs: '16px', md: '20px', lg: '33px' }}
            lineHeight={{ xs: 'normal', md: 'normal', lg: 'normal' }}
          >Our IA can generate and create a beautiful website whatever your field of activity </Typography>

          <Link href={'/services'}>
            <SecondaryBtn />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Websites
