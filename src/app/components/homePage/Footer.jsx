import React from 'react'
import Picture from '../reuse/Picture'
import { Box, ButtonBase, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { arrowForwardEmail, footerfacebook, footerinstagram, footerlinkedin, footertiktok } from '../reuse/icons'
import home from '@/app/styles/home.module.css'
import { MUIDesign } from '../reuse/Design'

const Footer = () => {
    return (
        <div>
            <Grid container spacing={2} alignItems={'center'} justifyContent={'space-between'} py={'40px'} px={{ xs: '40px' }}>
                <Grid item xs={12} sm={6} md='auto'>
                    <Picture center={false} src={'/footer-logo.png'} width={180} height={80} alt='' />
                </Grid>

                <Grid item xs={6} sm={6} md='auto'>
                    <Stack direction='row' alignItems='center' justifyContent='center' spacing={1}>
                        <Box>{footerfacebook}</Box>
                        <Box>{footerinstagram}</Box>
                        <Box>{footertiktok}</Box>
                        <Box>{footerlinkedin}</Box>
                    </Stack>
                </Grid>

                <Grid item xs={6} sm={6} md='auto'>
                    <Typography sx={{ color: '#000', fontWeight: 500 }} fontSize={{ xs: '14px', sm: '16px' }}>
                        ©2023 Over Zaki
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md='auto'>
                    <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' justifyContent='center' spacing={1}>
                        <Typography sx={{ color: '#000', fontSize: '13px', fontWeight: 500 }}>Subscribe to our newsletter today!</Typography>
                        <Box>
                            <TextField
                                sx={MUIDesign.textField}
                                color='primary'
                                placeholder='Your E-mail'
                                name='email'
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <ButtonBase className={home.emailBtn} >{arrowForwardEmail}</ButtonBase>
                                    </InputAdornment>,
                                }}
                            />
                        </Box>
                    </Stack>
                </Grid>


            </Grid>
        </div>
    )
}

export default Footer