'use client'
import { Box, Stack } from '@mui/material'
import React from 'react'
import header from '@/styles/Header.module.css'
import Picture from './reuse/Picture'
import Link from 'next/link'
import MobileNav from './MobileNav';
import menuIcon from '@/components/images/menu.svg'
import logomd from '@/components/images/logo-md.svg'
import logodark from '@/components/images/logo-dark.svg'
// import useDetectDevice from './reuse/hooks'

const HeaderMobile = ({ menu = 'dark' }) => {
  const [openNav, setOpenNav] = React.useState(false);
  const handleMenu = () => setOpenNav(true);
  // const condition = useDetectDevice();

  return (
    <Box>
      <Box className={header['main-mobile']}>
        {menu === 'light' &&
          <Stack direction='row' alignItems='center' justifyContent={'space-between'} >
            <Link href={'/'}>
              <Picture priority={true} center={false} src={logomd} width={169} height={37} alt={'logo'} className={header.logomd} />
            </Link>
            <Picture priority={true} onClick={handleMenu} center={false} src={menuIcon} width={48} height={48} alt={'logo'} />
          </Stack>}

        {menu === 'dark' &&
          <Stack direction='row' alignItems='center' justifyContent={'space-between'} >
            <Link href={'/'}>
              <Picture priority={true} center={false} src={logodark} width={169} height={37} alt={'logo'} className={header.logomd} />
            </Link>
            <Picture priority={true} onClick={handleMenu} center={false} src={menuIcon} width={48} height={48} alt={'logo'} />
          </Stack>}
        <MobileNav open={openNav} setOpen={setOpenNav} menu={menu} />
      </Box>

    </Box>
  )
}

export default HeaderMobile;