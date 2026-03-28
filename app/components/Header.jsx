import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = ({ isDarkMode }) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-20'>

      {/* Profile image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
        className='w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gray-200 dark:border-white/20 shadow-xl'
      >
        <Image
          src={assets.profile_img}
          alt='Nithara Manoj'
          width={160}
          height={160}
          className='w-full h-full object-cover'
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-center gap-2 text-xl md:text-2xl mb-1 font-Ovo text-gray-700 dark:text-white'
      >
        Hi! I&apos;m Nithara{' '}
        <motion.span
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
          className='inline-block'
        >
          <Image src={assets.hand_icon} alt='wave' className='w-6' />
        </motion.span>
      </motion.h3>

      {/* Headline */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-5xl lg:text-[60px] font-Ovo leading-tight text-gray-900 dark:text-white'
      >
        BCA Student &amp; Web Developer
      </motion.h1>

      {/* Sub-bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base'
      >
        I am a final-year BCA student with a strong foundation in programming and web development.
        Passionate about building responsive and user-friendly web applications.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className='flex flex-col sm:flex-row items-center gap-4 mt-4'
      >
        <a
          href='#contact'
          className='px-10 py-3 border border-gray-800 rounded-full bg-gray-900 text-white flex items-center gap-2 hover:bg-gray-700 transition-all duration-300 dark:bg-white dark:text-black dark:border-white dark:hover:bg-gray-200 shadow-md'
        >
          Contact me{' '}
          <Image src={assets.right_arrow_white} alt='' className='w-4 dark:invert' />
        </a>
        <a
          href='/sample-resume.pdf'
          download
          className='px-10 py-3 border rounded-full border-gray-400 flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 transition-all duration-300 dark:bg-transparent dark:text-white dark:border-white/60 dark:hover:bg-white/10 shadow-sm'
        >
          My Resume{' '}
          <Image src={assets.download_icon} alt='' className='w-4 dark:invert' />
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className='mt-8 flex flex-col items-center gap-1'
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className='w-5 h-8 border-2 border-gray-300 dark:border-gray-500 rounded-full flex items-start justify-center pt-1'
        >
          <div className='w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full' />
        </motion.div>
        <span className='text-xs text-gray-400 tracking-widest uppercase'>Scroll</span>
      </motion.div>
    </div>
  )
}

export default Header
