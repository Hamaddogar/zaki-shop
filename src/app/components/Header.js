'use client'
import { Box, Stack } from '@mui/material'
import React from 'react'
import header from '@/app/styles/header.module.css'
import Picture from './reuse/Picture'
import dynamic from 'next/dynamic'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { languageIcon, marker } from './reuse/icons';
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav';
import MiniNav from './MiniNav'
// const MobileNav = dynamic(() => import('./MobileNav'), { ssr: true, });
// const MiniNav = dynamic(() => import('./MiniNav'), { ssr: true, });
import { LanguageBtn, LoginBtn } from './reuse/Buttons'

const Header = ({ mainStyle }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [miniMenu, setminiMenu] = React.useState("none");
  const [selectedLanguage, setselectedLanguage] = React.useState("English");
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = (value) => e => {
    console.log('value',value);
    if (value) setselectedLanguage(value)
    setAnchorEl(null);
  }

  const handleMiniNav = (pv, setter) => e => {
    if (pv === "none") setter('open')
    else if (pv === "open") setter('close')
    else if (pv === "close") setter('open')
  }

  return (
    <Box>
      <Box>
        <MiniNav alignItems='flex-end' openST={miniMenu} closeST={handleMiniNav(miniMenu, setminiMenu)} >
          <Stack justifyContent={'flex-start'} mt='35px' rowGap={'10px'} >
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
          <Stack my='30px' direction='row' alignItems={'center'} spacing={2} >
            <Image src='/facebook.svg' width={16} height={16} alt='' />
            <Image src='/insta.svg' width={16} height={16} alt='' />
            <Image src='/tiktok.svg' width={16} height={16} alt='' />
            <Image src='/linkedin.svg' width={16} height={16} alt='' />
          </Stack>
        </MiniNav>



        <Stack width={{ xs: '95%', md: '85%' }} sx={{ margin: 'auto' }} direction='row' alignItems='center' justifyContent={'space-between'} className={mainStyle}>
          <Link href={'/'}>
            <Picture priority={true} center={false} src={'/logo-md.svg'} width={300} height={47} alt={'logo'} className={header.logomd} />
          </Link>
          <Stack direction={'row'} alignItems={'center'} spacing={3}>
            <LoginBtn />
            <LanguageBtn onClick={handleClick} text={selectedLanguage} />
            <Picture priority={true} style={{ cursor: 'pointer' }} center={false} onClick={handleMiniNav(miniMenu, setminiMenu)} src={'/menu.svg'} width={48} height={48} alt={'logo'} />
          </Stack>
        </Stack>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          // onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              background: 'rgba(20, 24, 58, 0.54)',
              backdropFilter: 'blur(27px)',
              color: '#FFFFFF',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                background: 'rgba(20, 24, 58, 0.54)',
                backdropFilter: 'blur(27px)',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose(selectedLanguage === "Arabic" ? "English" : "Arabic")}>
            <ListItemIcon> {languageIcon}   </ListItemIcon>  <span>{selectedLanguage === "Arabic" ? "English" : "Arabic"}</span>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}

export default Header;