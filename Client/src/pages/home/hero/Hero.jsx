import React from 'react'
import { motion } from 'framer-motion'
import RootLayout from '../../../layout/RootLayout'
import Search from './search/Search'
const Hero = () => {
  const variants = {
    hidden: { Opacity: 0, y: -800 },
    visible: { Opacity: 1, y: 0 }
  }
  return (
    <motion.div
      className="w-full flex-1 h-screen bg-[url('./assets/herobg.png')] bg-cover bg-no-repeat bg-top relative  "
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.85, ease: "easeInOut" }}
    >
      <RootLayout className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-neutral-50/70 via-neutral-50/15 to-neutral-50/5 flex items-center justify-center text-center flex-col gap-9">
        <div className="space-y-2 ">
          <motion.div
            variants={variants}
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 1.85, ease: "easeOut" }}
            className="text-lg text-neutral-500 font-medium"
          >
            Get your bus tickets
          </motion.div>
          <motion.h1
            variants={variants}
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 1.85, ease: "easeOut" }}
            className="text-5xl text-neutral-800 font-bold capitalize"
          >
            Find the Best Bus For You!
          </motion.h1>
        </div>
        <Search />
      </RootLayout>
    </motion.div>


  )
}

export default Hero;