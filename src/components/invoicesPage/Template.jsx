import React from 'react'
import invoices from '@/styles/Invoices.module.css'
import common from '@/styles/Common.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowIcon, } from '../reuse/icons'
import { PrimaryBtn } from '../reuse/Buttons'
import templates from '@/components/images/templates.svg'

const Template = ({ content, BTNS }) => {

  return (
    <div className={invoices.templateMain}>
      <Box className={common.background} sx={{ backgroundPosition: { xs: 'bottom center', md: '80% center' } }} >
        <Grid container alignItems={'center'} justifyContent={'center'} rowGap={'40px'}>
          <Grid item xs={12} md={5.2} >
            <Box textAlign={{ xs: 'center', md: 'left' }}>
              <Typography className={invoices.titleIntegration} color="primary" >
                {content.title}
              </Typography>
              <Typography className={invoices.normal} color="primary" mt={2}> {content.subtitle} </Typography>
              <Box mt={"50px"} mb={'19px'}>
                {content.data.map((item, indx) => <Stack key={indx} direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                  <span>{listArrowIcon}</span>
                  <Typography className={invoices.normal2}>{item}</Typography>
                </Stack>)}
              </Box>
              <PrimaryBtn text={BTNS.start} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Picture src={templates} width={1016} height={667} alt='' />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Template
