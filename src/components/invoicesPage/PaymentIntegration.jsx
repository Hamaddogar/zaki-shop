import React from 'react'
import common from '@/styles/Common.module.css'
import invoices from '@/styles/Invoices.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'
import { PrimaryBtn } from '../reuse/Buttons'

const PaymentIntegration = ({ content, BTNS }) => {

  return (
    <div className={invoices.paymentMain}>
      <Box className={common.background} sx={{ backgroundPosition: { xs: 'bottom center', md: '20% center' } }} >
        <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} justifyContent={'center'} rowGap={'40px'} spacing={'3px'}>
          <Grid item xs={12} md={6} pr={{ xs: 0, md: 5 }}>
            <Picture src={'/integrationP.svg'} width={888} height={692} alt='' />
          </Grid>

          <Grid item xs={12} md={5} lg={4} >
            <Box textAlign={{ xs: 'center', md: 'left' }}>
              <Typography className={invoices.titleIntegration} color="primary" maxWidth={{ xs: '600px' }} > {content.title} </Typography>
              <Typography className={invoices.normal} color="primary" mt={2}> {content.subtitle} </Typography>
              <Box mt={"50px"} mb={'19px'} display={{ xs: 'inline-block', md: 'block' }} >
                {
                  content.data.map((item, indx) => <Stack key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                    <span>{listArrowIcon}</span>
                    <Typography className={invoices.normal2}>{item}</Typography>
                  </Stack>)
                }
              </Box>
              <br />
              <Box>
                <PrimaryBtn />
              </Box>
            </Box>

          </Grid>

        </Grid>
      </Box>
    </div>
  )
}

export default PaymentIntegration
