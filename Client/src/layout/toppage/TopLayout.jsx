import React from 'react'
import { motion } from 'framer-motion'
import RootLayout from '../RootLayout'
const TopLayout = ({bgImg, title, className}) => {
    const variants={
        hidden:{Opacity: 0,y:-800},
        visible:{Opacity :1,y:0}
    }
  return (
    <motion.div
    className={`w-full h-[30vh] bg-cover bg-no-repeat bg-center relative ${className}`}
    style={{background:`url(${bgImg})`}}
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="hidden"
    transition={{ duration: 0.85, ease: "easeInOut" }}
    >
        <RootLayout className='absolute top-0 left-0 w-full h-full pb-10 pt-[9ch] bg-gradient-to-b from-neutral-200/90 via-neutral-500/60
        to-neutral-900/70 flex items-center justify-end flex-col gap-3'>
            <motion.h1
               variants={variants}
               initial={{ opacity: 0, y: -800 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -800 }}
               transition={{ duration: 1.85, ease: "easeOut" }}
               className="text-5xl text-neutral-50 font-bold capitalize"
             >
               {title}
             </motion.h1>
        </RootLayout>
    </motion.div>
  )
}

export default TopLayout