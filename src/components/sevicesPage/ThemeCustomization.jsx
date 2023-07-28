import React from 'react'
import services from '@/styles/Services.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'
import { SecondaryBtn } from '../reuse/Buttons'

const ThemeCustomization = ({ content, BTNS }) => {

  return (
    <div className={services.themeMain}>
      <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} justifyContent={'space-between'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={6} pr={{ xs: 0, md: 6 }}>
          <Picture src={'/themeCus.svg'} width={840} height={563} alt='' />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            <Typography className={services.titleIntegration} color="secondary" > {content.title} </Typography>
            <Typography className={services.normal} sx={{ color: '#FFF' }} mt={2}> {content.subtitle} </Typography>
            <Box mt={"50px"} mb={'19px'} display={{ xs: 'inline-block', md: 'block' }}>
              {content.points.map((item, indx) => <Stack key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={services.normal2} sx={{ color: '#FFF' }}>{item}</Typography>
              </Stack>)}
            </Box>
            <Box>
              <SecondaryBtn text={BTNS.start} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default ThemeCustomization
