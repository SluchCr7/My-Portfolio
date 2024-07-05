'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import {Select , SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem} from '@/components/ui/select'
import { motion } from 'framer-motion'
import ContactInput from '@/components/ContactInput'
import ContactWays from '@/components/ContactWays'
const page = () => {
  return (
    <motion.section className="text-gray-600 body-font"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: .6 }}>

      <div className="container px-5 py-18 mx-auto">
        <div className="flex flex-col xl:flex-row items-center w-full mb-12 xl:gap-[4rem]">
          <div className='w-full xl:w-[50%] bg-[#232329] flex-col items-start p-6'>
            <h1 className="text-2xl font-bold mb-4 text-accent tracking-widest">Let's Work Together</h1>
            <p className='w-[100%] text-xs text-white/60 tracking-[2px] leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10 mb-4'>
              <ContactInput label="First name"/>
              <ContactInput label="Last name" />
              <ContactInput label="Email" />
              <ContactInput label="Phone" />
            </div>
            <Select className="flex flex-col items-start gap-3">
              <label className='text-white/60 text-sm'>Services</label>
              <SelectTrigger className='w-full my-3 bg-[#232329] border border-gray-300 text-white/60 rounded-lg focus:ring-blue-500 focus:border-blue-500 flex items-start p-2.5 '>
                <SelectValue placeholder="Select an Service" />
                {/* <SelectIcon className="w-4 h-4 ml-2" /> */}
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </SelectTrigger>
            </Select>
            <div className='input w-full flex flex-col items-start gap-3'>
              <label className='text-white/60 text-sm'>Message</label>
              <textarea className='w-full bg-[#232329] border border-gray-300 text-white/60 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 h-[200px]'></textarea>
            </div>
            <button className="btn w-[200px] my-[20px] border-accent border-[1px] p-3 bg-transparent text-accent hover:bg-accent hover:text-white transition-[1s] duration-1000">Submit</button>
          </div>
          <div className='w-full xl:w-[50%] '>
              <ContactWays/>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default page