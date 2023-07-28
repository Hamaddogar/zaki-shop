import React from 'react'
import common from '@/styles/Common.module.css'
import marketing from '@/styles/Marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'

const AdsManage = ({ content }) => {

  return (
    <div className={marketing.adsManageMain}>
      <Grid container className={common.background}
        alignItems={'center'}
        px={{ xs: 0, md: 6, lg: 10 }}
        justifyContent={'center'}
        rowGap={'40px'}
        spacing={'3px'}
        sx={{ backgroundPosition: { xs: 'bottom center', md: '80% center' } }}
      >
        <Grid item xs={12} md={6} lg={5}>
          <Box textAlign={{ xs: 'center', md: 'left' }}>
            <Typography className={marketing.titleIntegration} color="primary" >
              {content.title[0]} <br /> {content.title[1]}
            </Typography>
            <Typography className={marketing.normal} color="primary" mt={2}> {content.subtitle} </Typography>
            <Box mt={"50px"} mb={'19px'} display={{ xs: 'inline-block', md: 'block' }} >
              {
                content.points.map((item, indx) => <Stack key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                  <span>{listArrowIcon}</span>
                  <Typography className={marketing.normal2}>{item}</Typography>
                </Stack>)
              }
            </Box>
            <br />

            <Stack direction={'row'} alignItems='center' justifyContent={{ xs: 'center', md: 'flex-start' }} spacing={'10px'} mt='30px' >
              <Picture src={'/soc1.png'} width={30} height={30} alt='' />
              <Picture src={'/soc2.png'} width={30} height={30} alt='' />
              <Picture src={'/soc3.png'} width={30} height={30} alt='' />
              <Picture src={'/soc4.png'} width={30} height={30} alt='' />
              <Picture src={'/soc5.png'} width={30} height={30} alt='' />
              <Picture src={'/soc6.png'} width={30} height={30} alt='' />
              <Picture src={'/soc7.png'} width={30} height={30} alt='' />
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Box width={{ xs: '85%', md: 'auto' }} marginX='auto' >
            <Picture src={'/addmanage.svg'} width={2123} height={2161} alt='' />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default AdsManage
