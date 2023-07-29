import React from 'react'
import home from '@/styles/Home.module.css'
import Picture from '../reuse/Picture'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { PrimaryBtn } from '../reuse/Buttons'
import invoices from '@/components/images/invoices.svg'

const Invoices = ({ content, BTNS }) => {

  return (
    <div className={home.Invoices}>
      <Box sx={{ color: '#0F1546', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '30px', placeItems: 'center' }}>
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
          >{content.subtitle} </Typography>
          <Link href={'/invoices'}>
            <PrimaryBtn text={BTNS.start} />
          </Link>
        </Box>
        <Box width={{ xs: '80%', lg: 'auto' }} margin='auto' pl={{ xs: 0, lg: 3 }}>
          <Picture src={invoices} width={314} height={405} alt='invoices' />
        </Box>
      </Box>
    </div>
  )
}

export default Invoices
