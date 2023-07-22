import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import { downIcon, drawerLogo, facebookIcon, languageIcon, linkedinIcon, marker, twitterIcon } from './reuse/icons';
import header from '@/app/styles/header.module.css';
import Picture from './reuse/Picture';
import Link from 'next/link';

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

                <Stack mt={'83px'} sx={{ position: 'relative', }} justifyContent={'space-between'}>
                    {/* <Box > */}
                    <Typography className={header['inner-nav-title']}>
                        Welcome to <br />  Over Zaki
                    </Typography>

                    <Stack justifyContent={'flex-start'} mt='53px' rowGap={'10px'} >
                        <Stack direction='row' rowGap='15px' alignItems='center' justifyContent='flex-start' >
                            <span>{marker}</span>
                            <Link href='/' className={header['inner-nav-routes']} >Home</Link>
                        </Stack>
                        <Stack direction='row' rowGap='25px' alignItems='center' justifyContent='flex-start' >
                            <span>{marker}</span>
                            <Link href='/services' className={header['inner-nav-routes']} >Website</Link>
                        </Stack>
                        <Stack direction='row' rowGap='15px' alignItems='center' justifyContent='flex-start' >
                            <span>{marker}</span>
                            <Link href='/mobileapp' className={header['inner-nav-routes']} >Mobile Apps</Link>
                        </Stack>
                        <Stack direction='row' rowGap='15px' alignItems='center' justifyContent='flex-start' >
                            <span>{marker}</span>
                            <Link href='/marketing' className={header['inner-nav-routes']} >Marketing</Link>
                        </Stack>
                        <Stack direction='row' rowGap='15px' alignItems='center' justifyContent='flex-start' >
                            <span>{marker}</span>
                            <Link href='/invoices' className={header['inner-nav-routes']} >Invoices</Link>
                        </Stack>
                    </Stack>

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
                    {/* </Box> */}

                    <Box my='44px'>
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