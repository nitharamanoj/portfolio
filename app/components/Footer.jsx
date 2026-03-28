'use client'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = ({ isDarkMode }) => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="border-t border-gray-300 dark:border-white/10 px-6 sm:px-[8%] py-8 mt-10"
        >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <a href="#top" className="flex items-center">
                    <span className="text-xl font-bold font-Ovo text-gray-900 dark:text-white tracking-tight">
                        Nithara<span className="text-[#E84393]">.</span>
                    </span>
                </a>
                <p className="text-gray-600 dark:text-white/40 text-sm font-Ovo text-center">
                    © 2026 Nithara Manoj . All rights reserved.
                </p>
                <div className="flex gap-5">
                    <a href="mailto:william@example.com" className="hover:opacity-70 transition-opacity">
                        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="mail" className="w-6" />
                    </a>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer
