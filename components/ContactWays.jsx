'use client'
import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from 'framer-motion'
const ContactWays = () => {
    const details = [
        {
            id : 1,
            name:'Phone',
            icon: <LocalPhoneIcon className='text-2xl' />,
            value: '+20 111 111 111'
        },
        {
            id : 2,
            name:'Email',
            icon: <EmailIcon className='text-2xl' />,
            value: '8z5kA@example.com'
        },
        {
            id : 3,
            name:'Location',
            icon: <LocationOnIcon className='text-2xl' />,
            value: 'Cairo, Egypt'
        }
    ]
  return (
    <div className='flex flex-col items-start gap-6'>
        {
            details.map((ele) => {
                return (
                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.7,
                        delay: ele.id * 1.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}  
                        key={ele.id}
                        className='flex flex-row items-center gap-6'
                    >
                        <div className='w-[60px] h-[60px] flex items-center justify-center text-accent bg-[#232329] rounded-full'>
                            {ele.icon}
                        </div>
                        <div className='flex flex-col items-start gap-1'>
                            <p className='font-bold text-xs'>{ele.name}</p>
                            <p className='text-white tracking-[2px]'>{ele.value}</p>
                        </div>
                    </motion.div>
                )
            })
        }
    </div>
  )
}

export default ContactWays