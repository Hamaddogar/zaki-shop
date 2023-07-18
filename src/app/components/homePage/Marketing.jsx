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
      <Grid className={home.ac} direction={{ xs: 'column-reverse', lg: 'row' }} container alignItems={'center'} justifyContent={'space-between'} p={{ xs: '50px 0px 50px 0px', lg: '110px 0px 110px 0px' }}>
        <Grid item xs={12} lg={6}>
          <Box pt={{ xs: 8, lg: 0 }}>
            <Picture src={'/marketinng.png'} width={550} height={437} alt='marketing' />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box className={home.ac} textAlign={{ xs: 'center', lg: 'left' }}>
            <Typography className={home['title-moon']} mb={4}><WritingAnimation text='Marketing' /> </Typography>
            <Typography mb={{ xs: 5 }} className={home['text-moon']}>
              Our IA can generate and create a beautiful website whatever your field of activity
            </Typography>
            <Link href={'/marketing'}>
              <Button color='secondary' className={home.secondaryBtn} endIcon={arrowForwardSecond} >
                Start Now
              </Button>
            </Link>
          </Box>

        </Grid>
      </Grid>
    </div>
  )
}

export default Marketing
