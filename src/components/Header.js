'use client'
import { Box, Stack } from '@mui/material'
import React from 'react'
import header from '@/styles/Header.module.css'
import Picture from './reuse/Picture'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { languageIcon } from './reuse/icons';
import Link from 'next/link'
import Image from 'next/image'
import MiniNav from './MiniNav'
import { LanguageBtn, LoginBtn } from './reuse/Buttons'
import LinksLister from './reuse/LinksLister'
import { AppContext } from '@/AppContext'

const Header = ({ mainStyle }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [miniMenu, setminiMenu] = React.useState("none");
  const open = Boolean(anchorEl);
  const { language, setlanguage, content } = React.useContext(AppContext);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = (value) => e => {
    if (value) setlanguage(value)
    setAnchorEl(null);
  }
  const handleMiniNav = (pv, setter) => e => {
    if (pv === "none") setter('open')
    else if (pv === "open") setter('close')
    else if (pv === "close") setter('open')
  }
  const iconStyle = {
    width: '48px',
    height: '48px',
    cursor: 'pointer',
    opacity: miniMenu ? '1' : '0', // Set the opacity based on the miniMenu state
    transition: 'opacity 0.5s ease-in-out', // Define the transition property and timing
  };

  return (
    <Box>
      <Box>


        <Stack width={{ xs: '95%', md: '85%' }} sx={{ margin: 'auto',   }} direction='row' alignItems='center' justifyContent={'space-between'} className={mainStyle}>
          <Link href={'/'}>
            <Picture priority={true} center={false} src={'/logo-md.svg'} width={300} height={47} alt={'logo'} className={header.logomd} />
          </Link>
          <Stack direction={'row'} alignItems={'center'} spacing={3}>
            <LoginBtn text={content.buttons.login} />
            <LanguageBtn onClick={handleClick} text={language} />
            {
              miniMenu === "open" ?
                <Picture onClick={handleMiniNav(miniMenu, setminiMenu)} center={false} src={'/close.svg'} width={48} height={48} alt={'logo'} style={{ cursor: 'pointer', ...iconStyle }} />
                :
                <Picture priority={true} style={{ cursor: 'pointer', ...iconStyle }} center={false} onClick={handleMiniNav(miniMenu, setminiMenu)} src={'/menu.svg'} width={48} height={48} alt={'logo'} />
            }
          </Stack>
          <Box sx={{ position: 'absolute', right: '15px', top: '-5px', zIndex: -1 }}>
            <MiniNav alignItems='flex-end' openST={miniMenu} >
              <LinksLister mt='35px' />
              <Stack my='30px' direction='row' alignItems={'center'} spacing={2} >
                <Image src='/facebook.svg' width={16} height={16} alt='' />
                <Image src='/insta.svg' width={16} height={16} alt='' />
                <Image src='/tiktok.svg' width={16} height={16} alt='' />
                <Image src='/linkedin.svg' width={16} height={16} alt='' />
              </Stack>
            </MiniNav>
          </Box>
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
          <MenuItem onClick={handleClose(language === "عربي" ? "English" : "عربي")}>
            <ListItemIcon> {languageIcon}   </ListItemIcon>  <span>{language === "عربي" ? "English" : "عربي"}</span>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}

export default Header;