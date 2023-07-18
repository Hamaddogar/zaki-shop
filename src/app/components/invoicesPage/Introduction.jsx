import React from 'react'
import Picture from '../reuse/Picture'
import invoices from '@/app/styles/invoices.module.css'
import { Box, Button, Typography } from '@mui/material'
import { arrowForward } from '../reuse/icons'

const Introduction = () => {

  return (
    <div className={invoices.main}>
      <Box pt={{ xs: '150px', sm: '290px', md: '300px' }} pb={10}
        width={{ xs: '90%', }}
        margin={'auto'}
      >
        <Box width={{ xs: '80%', md: '740px' }} margin='auto' mb={2}>
          <Typography sx={{ color: '#FFFFFF' }} className={invoices.subtitle}>
            Create, Send, Receive <br />
            your invoices
          </Typography>
        </Box>
        <Box my={{ xs: 5 }} textAlign='center'>
          <Button color='primary' className={invoices.primaryBtn} endIcon={arrowForward} >
            Start Now
          </Button>
        </Box>
        <Box width={{ xs: '90%', }} margin='auto'>
          <Picture src={'/invoicemain.png'} width={2692} height={1228} alt='' periorty />
        </Box>
      </Box>
    </div>
  )
}

export default Introduction
