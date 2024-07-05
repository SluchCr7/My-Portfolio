'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Stairs from './Stairs'
const StairTransition = () => {
  const pathname = usePathname()
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className='flex w-screen h-screen fixed top-0 right-0 left-0'>
            <Stairs />
          </div>
          <motion.div
            key={pathname}
            initial={{ opacity: 1 , top: "100%"}}
            animate={{ opacity: 0 , top: "0%"}}
            transition={{ duration: 0.5 , delay : 1}}
            className="h-screen w-screen fixed top-0 bg-primary"
          />
        </div>
      </AnimatePresence>
    </>
  )
}

export default StairTransition