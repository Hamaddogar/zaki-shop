import React from 'react'
import mobileapp from '@/app/styles/mobileapp.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Typography } from '@mui/material'
import { arrowForward, } from '../reuse/icons'

const NoDeveloper1 = () => {

  return (
    <div className={mobileapp.noDeveloper1Main}>
      <Box className={mobileapp.titleContainer}>
        <Typography color='primary' className={mobileapp.subtitlemain}>Build your app, <br /> without a developer 😉</Typography>
      </Box>
      <Grid container direction={{ xs: 'column-reverse', md: 'row' }} px={{ xs: 0, md: 7, lg: 12 }} alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={6}>
          <Box pr={{ xs: 0, md: 4 }}>
            <Picture src={'/nodev1.svg'} width={538} height={496} alt='' />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>

          <Box textAlign={{ xs: 'center', md: 'left' }}>
            <Picture center={false} src={'/IAsol.svg'} width={212} height={55} alt='' />
          </Box>
          <Box textAlign={{ xs: 'center', md: 'left' }}>
            <Typography
              color='primary'
              fontWeight={{ xs: 800 }}
              fontSize={{ xs: '22px', md: '33px', lg: '65px' }}
              lineHeight={{ xs: '26px', md: '35px', lg: '65px' }}
              maxWidth={{ xs: '250px', md: '550px', lg: '900px' }}
              margin={{ xs: 'auto', md: '0px' }}
            >
              We have power
              and fast technology
            </Typography>
            <Box mt={'30px'}></Box>
            <Typography
              color='primary'
              fontWeight={{ xs: 500 }}
              fontSize={{ xs: '17px', md: '23px', lg: '28px' }}
              lineHeight={{ xs: '23px', md: '27px', lg: '34px' }}
              maxWidth={{ xs: '300px', md: '350px', lg: '500px' }}
              margin={{ xs: 'auto', md: '0px' }}
            >
              Easy to create fast and helpful app
              with me 😍, just get started and
              watch some magic 😎
            </Typography>
            <Box mt={5}>
              <Button color='primary' className={mobileapp.primaryBtn} endIcon={arrowForward} >
                Start Now
              </Button>
            </Box>
          </Box>

        </Grid>
      </Grid>
    </div>
  )
}

export default NoDeveloper1
