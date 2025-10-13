import React, { useState } from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      
      await new Promise((r) => setTimeout(r, 800))
      alert('Message sent — we will get back to you shortly.')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      alert('Something went wrong. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    
    <>
    <Navbar/>
    <main className="max-w-6xl px-6 py-12 mx-auto">
      <section className="grid items-start grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900">Get in touch</h1>
          <p className="mb-6 text-gray-600">
            Have a question, feedback or want a demo? Fill the form and our
            team will reach out within one business day.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p className="mt-1 text-gray-900">support@bizora.com</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Phone</h3>
              <p className="mt-1 text-gray-900">(+94) 123-4567</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Address</h3>
              <p className="mt-1 text-gray-900">123 BizOra Ave, Suite 100</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-white rounded-lg shadow lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="block w-full mt-1 border-gray-200 rounded-md shadow-sm focus:border-cyan-400 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
                  placeholder="Your full name"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="block w-full mt-1 border-gray-200 rounded-md shadow-sm focus:border-cyan-400 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                required
                className="block w-full mt-1 border-gray-200 rounded-md shadow-sm focus:border-cyan-400 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
                placeholder="Tell us about your project or question"
              />
            </label>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white rounded-md bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:opacity-95 disabled:opacity-60"
              >
                {submitting ? 'Sending...' : 'Send message'}
              </button>

              <p className="text-sm text-gray-500">Or email us at support@bizora.com</p>
            </div>
          </form>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default Contact
