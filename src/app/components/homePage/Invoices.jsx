import React from 'react'
import home from '@/app/styles/home.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForward } from '../reuse/icons'
import { WritingAnimation } from '../reuse/Animation'
import Link from 'next/link'

const Invoices = () => {

  return (
    <div className={home.Invoices}>
      <Grid className={home.ac} container alignItems={'center'} rowGap={6} justifyContent={'space-between'} p={{ xs: '50px 0px 50px 0px', lg: '110px 0px 110px 0px' }}>
        <Grid item xs={12} lg={6}>
          <Box textAlign={{ xs: 'center', lg: 'left' }}>
            <Typography className={home['title-primary']} mb={4}><WritingAnimation text='Invoices' /></Typography>
            <Typography mb={{ xs: 5 }} className={home['text-primary']}>
              Our IA can generate and create a beautiful website whatever your field of activity
            </Typography>
            <Link href={'/invoices'}>
              <Button color='primary' className={home.primaryBtn} endIcon={arrowForward} >
                Start Now
              </Button>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Box >
            <Picture src={'/invoices.png'} width={314} height={405} alt='invoices' />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Invoices
