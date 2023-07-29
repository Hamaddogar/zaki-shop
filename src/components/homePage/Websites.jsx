import React from 'react'
import home from '@/styles/Home.module.css'
import Picture from '../reuse/Picture'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { SecondaryBtn } from '../reuse/Buttons'
import websites from '@/components/images/websites.svg'

const Websites = ({ content, BTNS }) => {

  return (
    <Box className={home.websites}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', lg: 'row' }, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '30px', placeItems: 'center' }}>
        <Box width={{ xs: '80%', lg: 'auto' }} margin='auto' pr={{ xs: 0, lg: 3 }}>
          <Picture priority={true} src={websites} width={402} height={349} alt='websites' />
        </Box>
        <Box textAlign={{ xs: 'center', lg: 'left' }}>
          <Typography
            sx={{ color: '#FFFFFF' }}
            fontWeight={{ xs: 900 }}
            fontSize={{ xs: '40px', md: '45px', lg: '106px' }}
            lineHeight={{ xs: '85px', md: '85px', lg: '135px' }}
          >
            {content.title}
          </Typography>

          <Typography mb={{ xs: '31px' }}
            marginX={{ xs: 'auto', lg: '0px' }}
            maxWidth={{ xs: '327px', md: '432px', lg: '599px' }}
            sx={{ color: '#FFFFFF' }}
            fontWeight={{ xs: 400 }}
            fontSize={{ xs: '16px', md: '20px', lg: '33px' }}
            lineHeight={{ xs: 'normal', md: 'normal', lg: 'normal' }}
          >{content.subtitle}</Typography>

          <Link href={'/services'}>
            <SecondaryBtn text={BTNS.start} />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Websites
