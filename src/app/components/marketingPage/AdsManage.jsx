import React from 'react'
import common from '@/app/styles/common.module.css'
import marketing from '@/app/styles/marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'

const AdsManage = () => {

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
            <Typography className={marketing.titleIntegration} color="primary" >Turn and manage 🤑 <br />
              your ads easily with me </Typography>
            <Typography className={marketing.normal} color="primary" mt={2}> Many advantages to suit your business </Typography>
            <Box mt={"70px"} mb={'19px'} display={{ xs: 'inline-block', md: 'block' }} >

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={marketing.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={marketing.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={marketing.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowIcon}</span>
                <Typography className={marketing.normal2}>Many advantages to suit your business</Typography>
              </Stack>
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
          <Box width={{xs:'85%', md:'auto'}} marginX='auto' >
          <Picture src={'/addmanage.svg'} width={2123} height={2161} alt='' periorty />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default AdsManage
