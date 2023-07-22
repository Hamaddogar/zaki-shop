import React from 'react'
import invoices from '@/app/styles/invoices.module.css'
import Picture from '../reuse/Picture'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { listArrowWhiteIcon, } from '../reuse/icons'

const CreateManage = () => {

  return (
    <div className={invoices.createManageMain}>
      <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems={'center'} justifyContent={'center'} rowGap={'40px'} spacing={'3px'}>
        <Grid item xs={12} md={5} lg={6}>
          <Picture src={'/createmanage.svg'} width={742} height={748} alt='' />
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Box pr={1} pl={2} >
            <Typography className={invoices.titleIntegration} color="primary" >
              Create and manage all <br />
              your invoices in one place
            </Typography>
            <Typography className={invoices.normal} color="primary" mt={2}> Many advantages to suit your business </Typography>
            <Box mt={"50px"} mb={'19px'}>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowWhiteIcon}</span>
                <Typography className={invoices.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowWhiteIcon}</span>
                <Typography className={invoices.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowWhiteIcon}</span>
                <Typography className={invoices.normal2}>Many advantages to suit your business</Typography>
              </Stack>

              <Stack direction='row' alignItems='center' justifyContent={'flex-start'} spacing={2}>
                <span>{listArrowWhiteIcon}</span>
                <Typography className={invoices.normal2}>Many advantages to suit your business</Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreateManage
