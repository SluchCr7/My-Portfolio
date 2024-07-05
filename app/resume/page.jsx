'use client'
import React from 'react'

import { FaCss3, FaHtml5, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

import { motion , AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {ScrollArea} from "@/components/ui/scroll-area" 


const page = () => {

  const About = {
    title: "About", 
    descip : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,",
    items :[
    {
      id: 1,
      fieldName: "Name",
      fieldValue: "Ahmed Abobakr"
    },
    {
      id: 2,
      fieldName: "Age",
      fieldValue: "22"
    },
    {
      id: 3,
      fieldName: "Nationality",
      fieldValue: "Egyptian"
    },
    {
      id: 4,
      fieldName: "Experiance",
      fieldValue: "12+ Years"
    },
    {
      id: 5,
      fieldName: "Languages",
      fieldValue: "Arabic, English , German"
    },
    {
      id: 6,
      fieldName: "Email",
      fieldValue: "AhmedSluch@gmail.com"
    },
    {
      id: 7,
      fieldName: "Phone",
      fieldValue: "+201005577786"
    },
    {
      id: 8,
      fieldName: "Freelancer",
      fieldValue: "Available"
    }
    ]
  }
  const experiance = {
    title: "Experiance",
    descip : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,",
    itmes: [
    {
      id: 1,
      jobTitle: "Front-End Developer",
      company: "Google",
      date: "2022 - Present",
    },
    {
      id: 2,
      jobTitle: "Front-End Developer",
      company: "Facebook",
      date: "2020 - 2022",
    },
    {
      id: 3,
      jobTitle: "Front-End Developer",
      company: "Italy National Company",
      date: "2018 - 2019",
    },
    {
      id: 4,
      jobTitle: "Teaching Assistant",
      company: "Mansoura University",
      date: "2016 - 2020",
    },
    {
      id: 5,
      jobTitle: "Front-End Developer",
      company: "Freelancer",
      date: "2018 - present",  
    }
  ]
  }
  const Skills = {
    title: "Skills",
    descip : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,",
    items: [
    {icon : <FaHtml5/>, name : "HTML"},
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    ]
  }
  const Education = {
    title: "Education",
    descip : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,",
    items: [
    {
      id: 1,
      name: "Ramon High School",
      date: "2010 - 2013",
      descip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,",
    },
    {
      id: 2,
      name: "Mansoura University",
      date: "2013 - 2017",
      descip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,",
    },
    {
      id: 3,
      name: "Front End Bootcamp",
      date: "2016 - 2017",
      descip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,",  
    },
    {
      id: 4,
      name: "Cairo University (Master Degree)",
      date: "2020 - 2024",
      descip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,",
      },
      {
        id: 5,
        name: "Certificate of Web Development",
        date: "2018 - 2019",
        descip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,",
      }
  ]
  }

  return (
    <motion.div
      className='w-full h-full min-h-[80vh] relative flex items-start justify-center py-12 xl:px-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}>
      
        <div className='container mx-auto'>
        <Tabs defaultValue="experiance" className='flex flex-col items-start xl:flex-row gap-[60px]'>
          <TabsList className='w-full h-full bg-transparent flex flex-col gap-[30px] max-w-[370px] items-center mx-auto xl:w-[40%] mb-8 xl:mx-0'>
              <div className='w-full text-left flex flex-col items-start gap-4'>
              <h1 className='text-3xl font-bold text-accent'>Why Choose Me ?</h1>
              <p className='w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <TabsTrigger value="experiance" className='w-full h-full p-3 rounded-lg  bg-gray-800'>Experiance</TabsTrigger>
              <TabsTrigger value="education" className='w-full h-full p-3 rounded-lg bg-gray-800'>Education</TabsTrigger>
              <TabsTrigger value="Skills" className='w-full h-full p-3 rounded-lg  bg-gray-800'>Skills</TabsTrigger>
              <TabsTrigger value="About" className='w-full h-full p-3 rounded-lg  bg-gray-800'>About Me</TabsTrigger>
            </TabsList>
          <div className='w-full min-h-[70vh]'>
            <TabsContent value="experiance" className='w-full'>
              <div>
                <h1 className='text-3xl font-bold'>{experiance.title}</h1>
                <p className='text-lg leading-8 w-[70%] my-5'>{experiance.descip}</p>
                <ScrollArea className='w-[100%] h-[400px]'>
                  <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                    {experiance.itmes.map((item) => (
                      <div key={item.id} className='w-full flex items-start gap-5 h-[180px] bg-[#232329] p-7 rounded-lg'>
                        <span className='text-accent text-2xl'>{item.id}</span> 
                        <div className='flex flex-col items-start gap-4'>
                          <p className='text-sm'>{item.date}</p>
                          <h1 className='text-xl font-bold text-accent'>{item.jobTitle}</h1>
                          <h1 className='text-lg font-bold'>{item.company}</h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className='w-full'>
              <div>
                <h1 className='text-3xl font-bold'>{Education.title}</h1>
                <p className='text-lg leading-8 w-[70%] my-5'>{Education.descip}</p>
                <ScrollArea className='w-[100%] h-[400px]'>
                  <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                    {Education.items.map((item) => (
                      <div key={item.id} className='w-full flex items-start gap-5 h-[180px] bg-[#232329] p-7 rounded-lg'>
                        <span className='text-accent text-2xl'>{item.id}</span> 
                        <div className='flex flex-col items-start gap-4'>
                          <p className='text-sm'>{item.date}</p>
                          <h1 className='text-xl font-bold text-accent'>{item.name}</h1>
                          <h1 className='text-sm font-medium'>{item.descip}</h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>  
            </TabsContent>
            <TabsContent value="Skills" className='w-full'>
              <div>
                <h1 className='text-3xl font-bold'>{Skills.title}</h1>
                <p className='text-lg leading-8 w-[70%] my-5'>{Skills.descip}</p>
                <ScrollArea className='w-[100%] h-[400px]'>
                  <div className='grid grid-cols-2 xl:grid-cols-4 gap-6'>
                    {Skills.items.map((item) => (
                      <div key={item.id} className='w-full flex items-center justify-center gap-5 h-[180px] bg-[#232329] p-7 rounded-lg'>
                        <span className='text-accent text-6xl'>{item.icon}</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="About" className='w-full'>
              <div>
                <h1 className='text-3xl font-bold'>{About.title}</h1>
                <p className='text-lg leading-8 w-[70%] my-5'>{About.descip}</p>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-[3rem] w-full pt-[2rem]'>
                  {
                    About.items.map((ele) => {
                      return (
                        <div key={ele.id} className='flex items-center gap-4'>
                          <h1 className='text-lg font-bold text-accent'>{ele.fieldName}</h1>
                          <h1 className='text-lg'>{ele.fieldValue}</h1>
                        </div>
                      ) 
                    })
                  }
                </div>
              </div>
            </TabsContent>
          </div>
          </Tabs>
        </div>
    </motion.div>
  )
}

export default page