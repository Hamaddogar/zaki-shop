import React from 'react'
import invoices from '@/app/styles/invoices.module.css'
import Picture from '../reuse/Picture'
import { Box, Typography } from '@mui/material'

const PrintShare = () => {

  return (
    <div className={invoices.printShareMain}>
      <Typography className={invoices.titleIntegration} sx={{ color: '#FFFFFF' }} textAlign={'center'}  >
        Print & Share <br />
        Invoices with Ease🤯
      </Typography>
      <Box mt={'50px'} width={{ xs: '90%', md: '80%' }} marginLeft='auto' marginRight='auto'>
        <Picture src={'/print.png'} width={3407} height={1419} alt='' />
      </Box>
    </div>
  )
}

export default PrintShare
