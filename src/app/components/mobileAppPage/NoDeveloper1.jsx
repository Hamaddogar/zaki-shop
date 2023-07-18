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
      <Grid container alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={6}>
          <Picture src={'/nodev1.png'} width={538} height={496} alt='' />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box pr={{ xs: 0, lg: 4 }} pl={{ xs: 4, lg: 4 }} >
            <Typography className={mobileapp.title} color="primary" mb={1} > We have power <br /> and fast technology</Typography>
            <Typography className={mobileapp.normal} color="primary" mt={2} maxWidth='400px'> Easy to create fast and helpful app
              with me 😍, just get started and
              watch some magic 😎 </Typography>
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
