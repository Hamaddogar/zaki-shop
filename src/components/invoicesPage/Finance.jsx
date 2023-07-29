import React from 'react'
import invoices from '@/styles/Invoices.module.css'
import common from '@/styles/Common.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'
import finance from '@/components/images/finance.svg'

const Finance = ({ content, BTNS }) => {

  return (
    <div className={invoices.financeMain}>
      <Box className={invoices.titleContainer}>
        <Typography color='primary' className={invoices.subtitlemain}>
          {content.title[0]}  <br /> {content.title[1]}
        </Typography>
        <Typography mt={3} color='primary' textAlign='center' className={invoices.normal}>
          {content.subtitle}
        </Typography>
      </Box>

      <Box className={common.background} sx={{ backgroundPosition: { xs: 'bottom center', md: '80% center' } }} >
        <Grid container alignItems={'center'} justifyContent={'center'} rowGap={'40px'}>
          <Grid item xs={12} md={6} lg={5}>
            <Box textAlign={{ xs: 'center', md: 'left' }} >
              <Typography className={invoices.titleIntegration} color="primary" >
                {content.subtitle2[0]} <br />
                {content.subtitle2[1]}
              </Typography>
              <Typography className={invoices.normal} color="primary" mt={2}> {content.subtitle3} </Typography>
              <Box mt={"40px"} mb={'19px'} display={{ xs: 'inline-block', md: 'block' }} >

                {
                  content.data.map((item, indx) => <Stack key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={invoices.normal2}>{item}</Typography>
                  </Stack>)
                }


              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Box sx={{ position: 'relative', left: { xs: '0px', md: '-50px' } }} >
              <Picture src={finance} width={872} height={653} alt='' />
            </Box>
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}

export default Finance
