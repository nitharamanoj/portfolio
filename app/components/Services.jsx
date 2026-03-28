'use client'
import { assets, serviceData } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Services = ({ isDarkMode }) => {
    return (
        <motion.section
            id="services"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full px-6 sm:px-[8%] py-20"
        >
           
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-gray-800 dark:text-white text-4xl sm:text-5xl font-Ovo mb-12"
            >
                What I Do
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {serviceData.map(({ icon, title, description, link }, i) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        key={i}
                        className="group border border-gray-400 dark:border-white/20 bg-white dark:bg-white/5 rounded-2xl px-6 py-8 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 shadow-sm dark:shadow-none"
                    >
                        <Image src={icon} alt={title} className="w-10 mb-5" />
                        <h3 className="text-gray-800 dark:text-white font-semibold text-lg mb-3">{title}</h3>
                        <p className="text-gray-600 dark:text-white/60 text-sm font-Ovo leading-relaxed mb-5">{description}</p>
                        <a
                            href={link || '#'}
                            className="flex items-center gap-2 text-sm text-gray-800 dark:text-white/80 dark:group-hover:text-white transition-colors font-Ovo"
                        >
                            Read more
                            <Image
                                src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow}
                                alt=""
                                className="w-4 group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Services
