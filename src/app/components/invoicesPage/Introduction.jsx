import React from 'react'
import Picture from '../reuse/Picture'
import common from '@/app/styles/common.module.css'
import invoices from '@/app/styles/invoices.module.css'
import { Box, Button, Typography } from '@mui/material'
import { arrowForward } from '../reuse/icons'

const Introduction = ({ children, hgap }) => {

  return (
    <div className={common.BGIN}>
      <div className={invoices.main} sx={{ backgroundSize: { xs: '80%', md: '70%', lg: 'auto' } }}>
        <Box pt={{ xs: '20px', md: '65px' }} >{children}</Box>
        <Box pt={hgap} pb={{ xs: '80px', md: '100px', lg: '120px' }}>
          <Box sx={{ color: '#FFFFFF' }} textAlign={'center'} width={{ xs: '80%', md: '100%' }} margin='auto'>
            <Typography
              fontWeight={{ xs: 800 }}
              fontSize={{ xs: '23px', md: '50px', lg: '50px' }}
              lineHeight={{ xs: '29px', md: '49px', lg: '49px' }}
            >
              Create, Send, Receive <br />
              your invoices
            </Typography>
          </Box>
          <Box my="40px" textAlign='center'>
            <Button color='primary' className={invoices.primaryBtn} endIcon={arrowForward} >
              Start Now
            </Button>
          </Box>
          <Box>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }, position: 'relative' }} margin='auto'>
              <Picture src={'/invoicelg.svg'} width={980} height={581} alt=''  />
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' }, position: 'relative' }} margin='auto'>
              <Picture src={'/invoicexs.svg'} width={360} height={376} alt=''  />
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Introduction
