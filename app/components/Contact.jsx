'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Contact = ({ isDarkMode }) => {
    const contactLinks = [
        { label: 'EMAIL', href: 'mailto:nitharamanoj@gmail.com' },
        { label: 'GITHUB', href: 'https://github.com/nitharamanoj' },
        { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/nithara-manoj-097606385' }
    ]

    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full px-6 sm:px-[8%] py-20"
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-gray-600 dark:text-white/60 font-Ovo mb-2 text-lg"
            >
                Connect with me
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-gray-800 dark:text-white text-4xl sm:text-5xl font-Ovo mb-12"
            >
                Get in touch
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="max-w-4xl mx-auto w-full border border-gray-800 dark:border-white/20 flex flex-col sm:flex-row"
            >
                {contactLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex justify-between items-center px-8 py-6 group hover:bg-gray-100 dark:hover:bg-white/5 transition-colors border-b sm:border-b-0 sm:border-r border-gray-800 dark:border-white/20 last:border-0`}
                    >
                        <span className="text-sm font-semibold tracking-widest text-gray-800 dark:text-white/80 group-hover:text-black dark:group-hover:text-white font-mono transition-colors">
                            {link.label}
                        </span>
                        <svg className="w-3.5 h-3.5 text-gray-500 dark:text-white/40 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Contact
