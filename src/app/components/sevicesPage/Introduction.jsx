'use client'
import React from 'react'
import services from '@/app/styles/services.module.css'
import Picture from './reuse/Picture'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { arrowForward } from './reuse/icons'
import { WritingAnimation } from './reuse/Animation'

const Introduction = () => {
  const [playing] = React.useState(false)

  return (
    <div className={services.main}>
      <Box pt={{ xs: '150px', sm: '290px', md:'265' }} pb={10}
        width={{ xs: '90%', md: '80%' }}
        margin={'auto'}
      >
        <Grid container alignItems={'center'} rowGap={6} justifyContent={'space-between'}>
          <Grid item xs={12} lg={6}>
            <Box textAlign={{ xs: 'center', lg: 'left' }} width={{ xs: '80%', md: '100%' }} margin='auto'>
              <Typography color='primary' className={services.title}>
                <WritingAnimation text='What i do !' />
              </Typography>
              <Typography color='primary' className={services.subtitle}>
                i can do websites, Mobile App, Marketing & Invoices
              </Typography>
            </Box>

            <Box mt={{ xs: 5 }} textAlign={{ xs: 'center', lg: 'left' }}>
              <Button color='primary' className={services.primaryBtn} endIcon={arrowForward} >
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
