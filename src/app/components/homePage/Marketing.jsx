import React from 'react'
import home from '@/app/styles/home.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForwardSecond } from '../reuse/icons'
import { WritingAnimation } from '../reuse/Animation'
import Link from 'next/link'

const Marketing = () => {

  return (
    <div className={home.marketing}>

      <Box sx={{ color: 'white', display: 'flex', flexDirection: { xs: 'column-reverse', lg: 'row' }, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '30px', placeItems: 'center' }}>
        <Box width={{ xs: '80%', lg: 'auto' }} margin='auto' pr={{ xs: 0, lg: 3 }}>
          <Picture src={'/marketinng.svg'} width={550} height={437} alt='marketing' />
        </Box>

        <Box textAlign={{ xs: 'center', lg: 'left' }}>
          <Typography
            fontWeight={{ xs: 900 }}
            fontSize={{ xs: '40px', md: '45px', lg: '103px' }}
            lineHeight={{ xs: '85px', md: '85px', lg: '135px' }}
          >
            Marketing
          </Typography>

          <Typography mb={{ xs: '31px' }}
            marginX={{ xs: 'auto', lg: '0px' }}
            maxWidth={{ xs: '327px', md: '432px', lg: '599px' }}
            fontWeight={{ xs: 400 }}
            fontSize={{ xs: '16px', md: '20px', lg: '33px' }}
            lineHeight={{ xs: 'normal', md: 'normal', lg: 'normal' }}
          >Our IA can generate and create a beautiful website whatever your field of activity </Typography>
          <Link href={'/marketing'}>
            <Button color='secondary' className={home.secondaryBtn} endIcon={arrowForwardSecond} >
              Start Now
            </Button>
          </Link>
        </Box>

      </Box>
    </div>
  )
}

export default Marketing
