import React from 'react'
import common from '@/styles/common.module.css'
import mobileapp from '@/styles/Mobileapp.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'

const Conversion = ({ content }) => {

  return (
    <div className={mobileapp.conversionMain}>
      <Box className={common.background} sx={{ backgroundPosition: { xs: 'bottom center', md: '80% center' } }} >
        <Grid container alignItems={'center'} px={{ xs: 0, md: 7, lg: 12 }} justifyContent={'center'} rowGap={'40px'} spacing={'3px'}>
          <Grid item xs={12} md={5}>
            <Box textAlign={{ xs: 'center', md: 'left' }} >
              <Typography
                color='primary'
                fontWeight={{ xs: 800 }}
                fontSize={{ xs: '23px', md: '27px', lg: '40px' }}
                lineHeight={{ xs: '28px', md: '28px', lg: '45px' }}
                maxWidth={{ xs: '300px', md: '600px', lg: '600px' }}
                margin={{ xs: 'auto', md: '0px' }}
              >
                {content.title}
              </Typography>
              <Typography className={mobileapp.normal} color="primary" mt={2}> {content.subtitle} </Typography>
              <Box mt={"50px"} mb={'19px'} display={{ xs: 'inline-block', md: 'block' }}>
                {
                  content.points.map((item, indx) => <Stack key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={mobileapp.normal2}>{item}</Typography>
                  </Stack>)
                }
              </Box>
              <Stack direction={'row'} alignItems='center' justifyContent={{ xs: 'center', md: 'flex-start' }} spacing={'20px'} mt='30px' >
                <Picture src={'/andStore.png'} width={60} height={60} alt='' />
                <Picture src={'/playStore.png'} width={50} height={50} alt='' />
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box>
              <Picture src={'/conversion.svg'} width={884} height={710} alt='' />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Conversion
