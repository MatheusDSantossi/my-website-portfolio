import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export const Logo = () => {
  return (
    <div className='flex items-center 
    justify-center mt-2'>
        <MotionLink href="/" className='w-16 h-16 bg-dark text-light 
        flex items-center justify-center rounded-full text-2xl font-bold
        border border-solid border-transparent dark:border-light dark:bg-light dark:text-dark'
        whileHover={{
            backgroundColor: [
                "#1b1b1b",
                "#f5f5f5",
                "#B63E96", // 240,86,199
                "#58E6D9", // 80,230,217
            ],
            transition:{duration: 1, repeat: Infinity},
        }}
        animate={{
          backgroundColor: "#1b1b1b",
          color: "#F5F5F5",
        }}
        >
            MS
        </MotionLink>
    </div>
  )
}

export default Logo;
