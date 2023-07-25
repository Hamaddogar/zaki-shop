import React from 'react'
import home from '@/app/styles/home.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForward } from '../reuse/icons'
import { WritingAnimation } from '../reuse/Animation'
import Link from 'next/link'
import { PrimaryBtn } from '../reuse/Buttons'

const Invoices = () => {

  return (
    <div className={home.Invoices}>
      <Box sx={{ color: '#0F1546', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '30px', placeItems: 'center' }}>
        <Box textAlign={{ xs: 'center', lg: 'left' }}>
          <Typography
            fontWeight={{ xs: 900 }}
            fontSize={{ xs: '40px', md: '45px', lg: '103px' }}
            lineHeight={{ xs: '85px', md: '85px', lg: '135px' }}
          >
            Invoices
          </Typography>

          <Typography mb={{ xs: '31px' }}
            marginX={{ xs: 'auto', lg: '0px' }}
            maxWidth={{ xs: '327px', md: '432px', lg: '599px' }}
            fontWeight={{ xs: 400 }}
            fontSize={{ xs: '16px', md: '20px', lg: '33px' }}
            lineHeight={{ xs: 'normal', md: 'normal', lg: 'normal' }}
          >Our IA can generate and create a beautiful website whatever your field of activity </Typography>
          <Link href={'/invoices'}>
          <PrimaryBtn />
          </Link>
        </Box>
        <Box width={{ xs: '80%', lg: 'auto' }} margin='auto' pl={{ xs: 0, lg: 3 }}>
          <Picture priority={true} src={'/invoices.svg'} width={314} height={405} alt='invoices' />
        </Box>
      </Box>
    </div>
  )
}

export default Invoices
