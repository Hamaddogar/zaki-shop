import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import { downIcon, drawerLogo, facebookIcon, languageIcon, linkedinIcon, twitterIcon } from './reuse/icons';
import header from '@/app/styles/header.module.css';
import Picture from './reuse/Picture';

export default function MobileNav({ open, setOpen }) {
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Dialog
                fullScreen={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="mobile-navbar"
                scroll={'body'}
                sx={{
                    '& .MuiBackdrop-root': { backdropFilter: 'blur(14px) !important', backgroundColor: 'transparent' },
                    '& .MuiDialog-container': { padding: '20px', minHeight: 'calc(100vh - 40px)' },
                    '& .MuiPaper-root': { borderRadius: '40px', background: 'rgba(15, 21, 70, 0.38)', color: '#FFFFFF', padding: '40px 35px' },
                }}
            >
                <Stack direction='row' alignItems='center' justifyContent={'space-between'}>
                    <Box>{drawerLogo}</Box>
                    <Picture onClick={handleClose} center={false} src={'/close.svg'} width={48} height={48} alt={'logo'} periorty />
                </Stack>

                <Stack mt={'100px'} sx={{ position: 'relative', height: 'calc(100% - 150px)' }} justifyContent={'space-between'}>
                    <Box >
                        <Typography className={header['inner-nav-title']}>
                            Welcome to <br />  Over Zaki
                        </Typography>
                        <Stack spacing={'17px'} mt={'40px'}>
                            <ButtonBase color='secondary' className={header['inner-nav-login']} >Login</ButtonBase>
                            <ButtonBase color='primary' className={header['inner-nav-signup']} >Sign up</ButtonBase>
                            <Button
                                className={header['inner-nav-language']}
                                startIcon={languageIcon}
                                endIcon={downIcon}
                                color='info'
                                disableTouchRipple
                                disableRipple
                            // onClick={handleClick}
                            >
                                <span>English</span>
                            </Button>
                        </Stack>
                    </Box>

                    <Box >
                        <Typography className={header['inner-nav-footer']} >Follow us in social media</Typography>
                        <Stack direction='row' alignItems={'center'} spacing={2} >
                            <a
                                href="https://vercel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >{facebookIcon}</a>

                            <a
                                href="https://vercel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >{linkedinIcon}</a>

                            <a
                                href="https://vercel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >{twitterIcon}</a>
                        </Stack>
                    </Box>
                </Stack>
            </Dialog>
        </div>
    );
}