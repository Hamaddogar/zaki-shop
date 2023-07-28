import Image from 'next/image'
import React from 'react'
import common from '@/styles/Common.module.css'

const Picture = ({ src, alt, center = true, priority = false, ...rest }) => {
    return (center ?
        <div className={common['img-center-container']}  >
            <Image priority={priority} layout="intrinsic" src={src} alt={alt} {...rest} />
        </div>
        :
        <Image priority={priority} layout="intrinsic" src={src} alt={alt} {...rest} />
    )
}

export default Picture