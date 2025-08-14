'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { theme } = useTheme()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_name: 'Ario Bwidagdo',
          to_email: 'ariobwidagdo@gmail.com',
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Error sending email:', err)
      setError('Failed to send message. Please try again later.')
      setStatus('error')
    }
  }

  return (
    <>
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className={`rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'} shadow-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} p-8 sm:p-10`}>
        <h1 className={`text-5xl font-extrabold text-center mb-10 ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'}`}>
          Contact Me
        </h1>
        {status === 'success' && (
          <p className={`p-5 rounded-lg shadow-sm mb-6 ${theme === 'dark' ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'}`}>
            Thank you for your message! I will get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className={`p-5 rounded-lg shadow-sm mb-6 ${theme === 'dark' ? 'bg-red-900/50 text-red-300' : 'bg-red-100 text-red-800'}`}>
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <label 
                htmlFor="name" 
                className={`block mb-3 text-lg font-semibold flex items-center gap-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
              >
                <FiUser className="w-5 h-5" />
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                required
                className={`w-full rounded-lg px-5 py-4 transition-colors duration-200 ease-in-out ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white focus:ring-cyan-500 focus:border-cyan-500' : 'bg-white border-gray-300 focus:ring-blue-600 focus:border-blue-600'} border focus:outline-none focus:ring-2`}
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <label 
                htmlFor="email" 
                className={`block mb-3 text-lg font-semibold flex items-center gap-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
              >
                <FiMail className="w-5 h-5" />
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                className={`w-full rounded-lg px-5 py-4 transition-colors duration-200 ease-in-out ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white focus:ring-cyan-500 focus:border-cyan-500' : 'bg-white border-gray-300 focus:ring-blue-600 focus:border-blue-600'} border focus:outline-none focus:ring-2`}
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <label 
                htmlFor="message" 
                className={`block mb-3 text-lg font-semibold flex items-center gap-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
              >
                <FiMessageSquare className="w-5 h-5" />
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full rounded-lg px-5 py-4 transition-colors duration-200 ease-in-out ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white focus:ring-cyan-500 focus:border-cyan-500' : 'bg-white border-gray-300 focus:ring-blue-600 focus:border-blue-600'} border focus:outline-none focus:ring-2`}
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-60 ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'}`}
          >
            <span className="flex items-center justify-center gap-2">
              <FiSend className="w-5 h-5" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </span>
          </button>
        </form>
      </div>
    </div>
    </>
  )
}
