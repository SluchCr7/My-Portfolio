'use client'
import { useState } from 'react'
import { motion , AnimatePresence } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import {Swiper , SwiperSlide} from 'swiper/react'
import "swiper/css"
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image'
const projects = [
  {
    id : 1,
    num: "01",
    title: "Project 1",
    text: "We build websites that are fast, easy to use, and built with best practices. we build websites that are fast, easy to use, and built with best practices.",
    category: "Frontend Development",
    stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'Tailwind css' } , { name: 'JavaScript' }],
    img: "/desktop-preview.jpg",
    link: "",
    github: ""
  },
  {
    id : 2,
    num: "02",
    title: "Project 2",
    text: "We build websites that are fast, easy to use, and built with best practices. we build websites that are fast, easy to use, and built with best practices.",
    category: "Frontend Development",
    stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript' } , { name: 'Tailwind css' } , { name: 'React' }],
    img: "/desktop-preview2.jpg",
    link: "https://ecommerce-product-sell.netlify.app/",
    github: "https://github.com/SluchCr7/ecommerce-Product"
  },
  {
    id : 3,
    num: "03",
    title: "Project 3",
    text: "We build websites that are fast, easy to use, and built with best practices. we build websites that are fast, easy to use, and built with best practices.",
    category: "Frontend development",
    stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript' } , { name: 'Bootstrap' } , { name: 'React' }],
    img: "/desktop-preview4.jpg",
    link: "",
    github: ""
  },
  {
    id : 4,
    num: "04",
    title: "Project 4", 
    text: "We build websites that are fast, easy to use, and built with best practices. we build websites that are fast, easy to use, and built with best practices.",  
    category: "Full Stack Development",
    stack: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript' } , { name: 'PHP' } , { name: 'React' } , { name: 'Laravel' }],
    img: "/desktop-preview3.jpg",
    link: "https://country-search-program-api.netlify.app/",
    github: "https://github.com/SluchCr7/Country-Search-Api"
  },
] 
const Page = () => {
  const [proj, setProj] = useState(projects[0])

  const handleprev = () => {
    if (proj.id === 1) {
      setProj(projects[projects.length - 1])
    } else {
      setProj(projects[proj.id - 2])
    }
  }

  const handleNext = () => {  
    if (proj.id === projects.length) {
      setProj(projects[0])  
    }
    else {
      setProj(projects[proj.id])
    }
  }
  return (
    <motion.section
      className='w-full px-5 py-10 lg:py-20'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: .6 }}
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row items-center w-full xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] flex flex-col gap-[30px] xl:justify-between'>
            <div className='num text-7xl text_outline font-bold text-transparent'>
              <span>{proj.num}</span>
            </div>
            <div className='title text-3xl font-bold text-accent tracking-[4px]'>{proj.category}</div>
            <div className='text w-[80%] tracking-[2px] text-white/60'>{proj.text}</div>
            <div className='skill flex items-center gap-4'>
              {proj.stack.map((ele) => 
                <div className='text-accent' key={ele}>{ele.name}</div>
                )}
            </div> 
            <hr />
            <div className='links flex items-center gap-7'>
              <Link href={proj.link}><BsArrowUpRight className='text-white text-3xl' /></Link>
              <Link href={proj.github}><BsGithub className='text-white text-3xl' /></Link>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <div className='image flex items-center justify-center w-full'>
              <Image src={proj.img} className='w-full' alt="image" quality={100} width={500} height={500}/>
            </div>
            <div className='arrows flex items-center justify-between w-full mt-4'>
              <div className='prevArrow btnArrow'>
                <button onClick={handleprev}><ArrowBackIcon/></button>
              </div>
              <div className='nextArrow btnArrow'>
                <button onClick={handleNext}><ArrowForwardIcon/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Page