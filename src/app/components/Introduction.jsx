'use client'
import React from 'react'
import home from '@/app/styles/home.module.css'
import Picture from './reuse/Picture'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { arrowForward } from './reuse/icons'

const Introduction = () => {
  const [playing, setPlaying] = React.useState(true)



  return (
    <div className={home.main}>
      <Box pt={{ xs: 20, sm: 40 }} pb={10}
        width={{ xs: '90%', md: '80%' }}
        margin={'auto'}
      >
        <Grid container alignItems={'center'} rowGap={6} justifyContent={'space-between'}>
          <Grid item xs={12} lg={6}>
            <Box textAlign={{xs:'center',lg:'left'}}>
            <Typography className={home.title}>What i do !</Typography>
            <Typography className={home.subtitle}>i can do websites, Mobile App, Marketing & Invoices</Typography>
            </Box>

            <Box mt={{ xs: 5 }} textAlign={{xs:'center',lg:'left'}}>
              <Button variant='outlined' color='primary' className={home.startBtn} endIcon={arrowForward} >
                Start Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box p={4}>
              <Picture src={'/face.png'} width={600} height={460} alt='' periorty />
            </Box>
            <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}>
              {!playing && <Picture center={false} src={'/playIcon.png'} alt='' width={58} height={58} />}
              {!playing && <Picture center={false} src={'/muteIcon.png'} alt='' width={58} height={58} />}
              {playing && <Picture center={false} src={'/stopIcon.png'} alt='' width={58} height={58} />}
              {playing && <Picture center={false} src={'/unmuteIcon.png'} alt='' width={58} height={58} />}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Introduction
