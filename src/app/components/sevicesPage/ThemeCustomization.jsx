import React from 'react'
import services from '@/app/styles/services.module.css'
import Picture from '../reuse/Picture'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { arrowForwardSecond, listArrowIcon, } from '../reuse/icons'

const ThemeCustomization = () => {

  return (
    <div className={services.themeMain}>
      <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={6}>
          <Picture src={'/themeCus.png'} width={840} height={563} alt='' />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box pr={{ xs: 0, lg: 8 }} pl={{ xs: 4, lg: 8 }}>

            <Typography className={services.titleIntegration} color="secondary" > Unlimited themes  and customisations Design</Typography>
            <Typography className={services.normal} sx={{ color: '#FFF' }} mt={2}> Many advantages to suit your business </Typography>
            <Box mt={"70px"} mb={'19px'}>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={services.normal2} sx={{ color: '#FFF' }}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={services.normal2} sx={{ color: '#FFF' }}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={services.normal2} sx={{ color: '#FFF' }}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={services.normal2} sx={{ color: '#FFF' }}>Many advantages to suit your business</Typography>
              </Stack>
            </Box>

            <Button color='secondary' className={services.secondaryBtn} endIcon={arrowForwardSecond} >
              Start Now
            </Button>
          </Box>

        </Grid>

      </Grid>
    </div>
  )
}

export default ThemeCustomization
