'use client'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = ({ isDarkMode }) => {
    const [result, setResult] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        setResult('Sending...')
        const formData = new FormData(e.target)
        formData.append('access_key', 'YOUR_ACCESS_KEY')
        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })
        const data = await res.json()
        if (data.success) {
            setResult('Message sent successfully!')
            e.target.reset()
        } else {
            setResult(data.message)
        }
    }

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
                className="text-center text-gray-800 dark:text-white text-4xl sm:text-5xl font-Ovo mb-4"
            >
                Get in touch
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center text-gray-600 dark:text-white/60 font-Ovo max-w-xl mx-auto mb-12"
            >
                I&apos;d love to hear from you! If you have any questions, projects, or just want to say hi, feel free to reach out.
            </motion.p>

            <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                onSubmit={onSubmit}
                className="max-w-2xl mx-auto"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="w-full bg-white dark:bg-white/5 border border-gray-400 dark:border-white/20 rounded-xl px-5 py-4 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 font-Ovo outline-none focus:border-gray-600 dark:focus:border-white/60 transition-all shadow-sm dark:shadow-none"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full bg-white dark:bg-white/5 border border-gray-400 dark:border-white/20 rounded-xl px-5 py-4 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 font-Ovo outline-none focus:border-gray-600 dark:focus:border-white/60 transition-all shadow-sm dark:shadow-none"
                    />
                </div>
                <textarea
                    name="message"
                    rows={6}
                    placeholder="Enter your message"
                    required
                    className="w-full bg-white dark:bg-white/5 border border-gray-400 dark:border-white/20 rounded-xl px-5 py-4 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 font-Ovo outline-none focus:border-gray-600 dark:focus:border-white/60 transition-all resize-none mb-5 shadow-sm dark:shadow-none"
                />
                <div className="text-center">
                    <button
                        type="submit"
                        className="inline-flex items-center gap-3 px-10 py-4 border border-gray-800 dark:border-white bg-black dark:bg-transparent text-white dark:text-white rounded-full font-Ovo hover:bg-gray-800 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Submit now
                        <Image src={assets.right_arrow_white} alt="" className="w-4" />
                    </button>
                </div>
                {result && (
                    <p className="text-center mt-5 text-gray-600 dark:text-white/70 font-Ovo">{result}</p>
                )}
            </motion.form>
        </motion.section>
    )
}

export default Contact
