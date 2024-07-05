'use client'
import { useState } from "react"
import CountUp from "react-countup"
import {motion} from 'framer-motion'
const Stats = () => {
    const stats = [
        { num: 12, text: "Years of Experience" },
        { num: 25, text: "Project Completed" },
        { num: 10, text: "Technologies Managed" },
        { num: 200, text: "Code Committed" },
    ]
  return (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .6, staggerChildren: 0.5 }}>
        <div className="container mx-auto">
            <div className="grid grid-cols-2 xl:flex xl:flex-row xl:items-center xl:justify-center w-full gap-4">
                {
                    stats.map((ele , index) => {
                        return (
                            <div key={index} className="flex flex-row items-center justify-center gap-3">
                                <CountUp
                                    end={ele.num} 
                                    duration={6}
                                    className="text-4xl xl:text-6xl font-bold"
                                    delay={2}
                                />
                                <p className="text-white w-[50%]">{ele.text}</p>
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    </motion.section>
  )
}

export default Stats