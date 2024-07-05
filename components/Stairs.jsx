import React from 'react'
import { motion } from 'framer-motion'

const StairAnimate = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}
const Stairs = () => {
    const reverseStair = (index) => {
        let totalStairs = 6
        return totalStairs - index - 1
    }
  return (
    <>
        {
            [...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={StairAnimate}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: .8, delay: reverseStair(index) * 0.1, ease: "easeInOut" }}
                        className="h-screen w-screen  bg-white relative"
                    />
                )
            })
        }
    </>
  )
}

export default Stairs