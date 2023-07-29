import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
// import
import DC from '@/components/images/dc.png'


const WithBackground = ({ children, URL = DC, BGStyle = {}, layout = "fill", objectFit = "cover" }) => {
    return (
        <Box sx={{ position: 'relative', backgroundColor: 'transparent' }}>
            <Image priority src={URL} alt="" layout={layout} objectFit={objectFit} style={{ zIndex: -1, ...BGStyle }} />
            {children}
        </Box>
    )
}

export default WithBackground