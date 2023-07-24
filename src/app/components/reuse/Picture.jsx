import Image from 'next/image'
import React from 'react'
import common from '@/app/styles/common.module.css'

const Picture = ({ src, alt, center = true, ...rest }) => {
    return (center ?
        <div className={common['img-center-container']}  >
            <Image quality={100} layout="intrinsic" src={src} alt={alt} {...rest} />
        </div>
        :
        <Image quality={100}  layout="intrinsic" src={src} alt={alt} {...rest} />
    )
}

export default Picture