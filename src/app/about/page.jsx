import React from 'react'
import styles from './about.module.css';
import design from '@/app/about/about.module.css'
import Image from 'next/image';


const About = () => {
  return (
    <div>
      <h1 className={styles['main-about']}>About</h1>
      <p className={design.mainContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos vero sapiente reiciendis quia aperiam autem pariatur facilis possimus esse eveniet voluptates, atque, obcaecati, at deleniti non vitae cum commodi!</p>
      <div style={{ backgroundColor: 'red', textAlign: 'center' }}>
        <Image
          layout="intrinsic"
          src={'/test.png'}
          alt={'testimage'}
          width={1080}
          height={1080}
          
        />
      </div>
    </div>
  )
}

export default About