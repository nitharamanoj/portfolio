'use client'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = ({ isDarkMode }) => {
    return (
        <div
            id="top"
            className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24"
            style={{
                backgroundImage: isDarkMode ? '' : `url(${assets.header_bg_color.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Profile Image */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mb-6"
            >
                <Image
                    src={assets.profile_img}
                    alt="Profile"
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Greeting */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-2 text-lg font-Ovo mb-3"
            >
                <span className="text-gray-800 dark:text-white">Hi! I&apos;m Nithara Manoj</span>
                <Image src={assets.hand_icon} alt="wave" className="w-6 inline" />
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl sm:text-4xl lg:text-[40px] font-Ovo text-gray-800 dark:text-white leading-tight max-w-3xl mb-6"
            >
               BCA Student & Web Developer<br /> based in Kerala.
            </motion.h1>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-gray-600 dark:text-white/70 font-Ovo max-w-xl mx-auto text-base leading-relaxed mb-10"
            >
                I am a final-year BCA student passionate about web development. 
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 items-center"
            >
                <a
                    href="#contact"
                    className="flex items-center gap-3 px-8 py-3 bg-black text-white dark:bg-white/10 dark:border dark:border-white/30 rounded-full dark:text-white hover:bg-gray-800 dark:hover:bg-white dark:hover:text-[#11001F] transition-all duration-300 font-Ovo"
                >
                    contact me
                    <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </a>
                <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-3 px-8 py-3 bg-white text-black border border-gray-400 dark:bg-white/5 dark:border-white/20 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-300 font-Ovo"
                >
                    my resume
                    <Image src={isDarkMode ? assets.download_icon : assets.download_icon} alt="" className="w-4 opacity-70" />
                </a>
            </motion.div>
        </div>
    )
}

export default Hero
