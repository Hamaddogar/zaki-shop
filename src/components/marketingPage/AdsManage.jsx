import React from 'react'
import common from '@/styles/Common.module.css'
import marketing from '@/styles/Marketing.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'
import addmanage from '@/components/images/addmanage.svg'
import soc1 from '@/components/images/soc1.png'
import soc2 from '@/components/images/soc2.png'
import soc3 from '@/components/images/soc3.png'
import soc4 from '@/components/images/soc4.png'
import soc5 from '@/components/images/soc5.png'
import soc6 from '@/components/images/soc6.png'
import soc7 from '@/components/images/soc7.png'


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
              <Picture src={soc1} width={30} height={30} alt='' />
              <Picture src={soc2} width={30} height={30} alt='' />
              <Picture src={soc3} width={30} height={30} alt='' />
              <Picture src={soc4} width={30} height={30} alt='' />
              <Picture src={soc5} width={30} height={30} alt='' />
              <Picture src={soc6} width={30} height={30} alt='' />
              <Picture src={soc7} width={30} height={30} alt='' />
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Box width={{ xs: '85%', md: 'auto' }} marginX='auto' >
            <Picture src={addmanage} width={2123} height={2161} alt='' />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default AdsManage
