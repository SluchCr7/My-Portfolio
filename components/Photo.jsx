'use client'
import React from 'react'
import Image from 'next/image'
import { motion , AnimatePresence} from 'framer-motion'
const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      <AnimatePresence>
        <motion.div
        initial={{ x: -100}}
        animate={{ x: 0 }}
        transition={{ duration: .6 , delay : 1.4 ,  ease: 'easeInOut'}}
        >
          {/* photo */}
          <motion.div className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]' initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: .6 , delay : 1.5 ,  ease: 'easeInOut'}}>
                <Image src="/photo.png" alt="hero" quality={100} fill className="object-contain"/>
          </motion.div>
          {/* Circle */}
          <motion.svg
            className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] absolute top-0 right-0'
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              initial={{ strokeDasharray : '24 10 0 0'}}
              animate={{
                strokeDasharray: ['25 120 25 25', '16 25 92 72', '4 250 22 22'],
                rotate: [120 , 360]
              }}
              transition={{ duration: 16 , delay : 1.5 ,  ease: 'easeInOut', repeat: Infinity , repeatType: 'reverse'}}
              cx="253"
              cy="253"
              r="250"
              stroke="#ee9b00"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Photo