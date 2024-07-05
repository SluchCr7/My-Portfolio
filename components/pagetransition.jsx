'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
const Pagetransition = ({ children }) => {
    const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        transition={{ duration: 0.4 ,  delay : 1.8 , ease: "easeInOut"}}
        className="h-screen w-[100%] z-40 absolute top-0 bottom-0 bg-primary"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Pagetransition