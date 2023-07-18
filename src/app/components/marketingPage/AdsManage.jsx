import React from 'react'
import marketing from '@/app/styles/marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'

const AdsManage = () => {

  return (
    <div className={marketing.adsManageMain}>
      <Grid container alignItems={'center'} justifyContent={'center'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={6} lg={5}>
          <Box pl={2} >
            <Typography className={marketing.titleIntegration} color="primary" >Turn and manage 🤑 <br />
              your ads easily with me </Typography>
            <Typography className={marketing.normal} color="primary" mt={2}> Many advantages to suit your business </Typography>
            <Box mt={"70px"} mb={'19px'}>

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

            <Stack direction={'row'} alignItems='center' spacing={'10px'} mt='30px'>
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

        <Grid item xs={12} md={6} lg={7}>
          <Picture src={'/addmanage.png'} width={2123} height={2161} alt='' periorty />
        </Grid>
      </Grid>
    </div>
  )
}

export default AdsManage
