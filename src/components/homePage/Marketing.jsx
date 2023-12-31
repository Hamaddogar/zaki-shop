import React from 'react'
import home from '@/styles/Home.module.css'
import Picture from '../reuse/Picture'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { SecondaryBtn } from '../reuse/Buttons'
import marketinng from '@/components/images/marketinng.svg'

const Marketing = ({ content, BTNS }) => {

  return (
    <div className={home.marketing}>

      <Box sx={{ color: 'white', display: 'flex', flexDirection: { xs: 'column-reverse', lg: 'row' }, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '30px', placeItems: 'center' }}>
        <Box width={{ xs: '80%', lg: 'auto' }} margin='auto' pr={{ xs: 0, lg: 3 }}>
          <Picture src={marketinng} width={550} height={437} alt='marketing' />
        </Box>

        <Box textAlign={{ xs: 'center', lg: 'left' }}>
          <Typography
            fontWeight={{ xs: 900 }}
            fontSize={{ xs: '40px', md: '45px', lg: '103px' }}
            lineHeight={{ xs: '85px', md: '85px', lg: '135px' }}
          >
            {content.title}
          </Typography>

          <Typography mb={{ xs: '31px' }}
            marginX={{ xs: 'auto', lg: '0px' }}
            maxWidth={{ xs: '327px', md: '432px', lg: '599px' }}
            fontWeight={{ xs: 400 }}
            fontSize={{ xs: '16px', md: '20px', lg: '33px' }}
            lineHeight={{ xs: 'normal', md: 'normal', lg: 'normal' }}
          >{content.subtitle}</Typography>
          <Link href={'/marketing'}>
            <SecondaryBtn text={BTNS.start} />
          </Link>
        </Box>

      </Box>
    </div>
  )
}

export default Marketing
