'use client'
import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <h1 className="text-4xl font-extrabold text-blue-900">Contact Me</h1>
      {status === 'success' && (
        <p className="p-5 bg-green-100 text-green-800 rounded-lg shadow-sm">
          Thank you for your message! I will get back to you soon.
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
