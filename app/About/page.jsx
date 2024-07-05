'use client'
import { motion } from 'framer-motion'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const page = () => {
  const services = [
    {
      id: 1,
      "num" : "01",
      title: "Web Development",
      text: "We build websites that are fast, easy to use, and built with best practices. we build websites that are fast, easy to use, and built with best practices."
    },
    {
      id: 2,
      "num" : "02",
      title: "Mobile Development",
      text: "We build websites that are fast, easy to use, and built with best practices. we build websites that are fast, easy to use, and built with best practices."
    },
    {
      id: 3,
      "num" : "03",
      title: "Design",
      text: "We build websites that are fast, easy to use, and built with best practices. we build websites that are fast, easy to use, and built with best practices."
    },
    {
      id: 4,
      "num" : "04",
      title: "SEO",
      text: "We build websites that are fast, easy to use, and built with best practices. we build websites that are fast, easy to use, and built with best practices."
    }
  ]
  return (
    <>
      <section className="text-gray-600 body-font" >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Services</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
            {services.map((service) => (
              <motion.div className='service flex flex-col items-center gap-2 hover:text-accent duration-1000 transition-all'
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: service.id * 1.2, ease: 'easeInOut' }}>
                <span className='text-3xl text-accent text_outline text-transparent group-hover:text-outline-accent'>{service.num}</span>
                <h1 className='text-xl font-bold'>{service.title}</h1>
                <p className='w-[90%] text-center'>{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </>
  )
}

export default page