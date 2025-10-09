import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import heroImage from '../assets/heroimage.jpg'

const About = () => {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        
        <section className="bg-gradient-to-r from-cyan-50 to-white">
          <div className="px-6 py-16 mx-auto max-w-7xl lg:py-24">
            <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl font-poppins">
                  Built for growing businesses
                </h1>
                <p className="max-w-2xl mt-4 text-lg text-gray-600">
                  BizOra helps teams make smarter, faster decisions by collecting
                  the right signals, surfacing meaningful insights, and enabling
                  action all in one streamlined workspace.
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-cyan-500">✓</span>
                    <span className="text-gray-700">Real-time analytics & live charts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-cyan-500">✓</span>
                    <span className="text-gray-700">Custom dashboards for every team</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href="/signup"
                    className="inline-flex items-center px-5 py-3 font-medium text-white rounded-md bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:opacity-90"
                  >
                    Get started
                  </a>
                  <a href="#contact" className="inline-flex items-center px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
                    Contact sales
                  </a>
                </div>
              </div>

              <div className="order-first lg:order-last">
                <img src={heroImage} alt="Team working" className="object-cover w-full rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

       
        <section className="px-6 py-16 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900">Our mission</h3>
              <p className="mt-3 text-gray-600">To empower teams with accessible insights so they can focus on growth instead of guesswork.</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900">Our values</h3>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>Customer-first decisions</li>
                <li>Data-driven simplicity</li>
                <li>Reliable & secure</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900">What we deliver</h3>
              <p className="mt-3 text-gray-600">Fast, reliable insights with tools that scale as your business grows.</p>
            </div>
          </div>
        </section>

        <section className="bg-cyan-50">
          <div className="px-6 py-12 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
              <div>
                <p className="text-3xl font-extrabold text-cyan-600">99.9%</p>
                <p className="mt-2 text-sm text-gray-600">Uptime</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-cyan-600">500+</p>
                <p className="mt-2 text-sm text-gray-600">Companies onboarded</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-cyan-600">1M+</p>
                <p className="mt-2 text-sm text-gray-600">Events processed / day</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Meet the team</h2>
            <p className="mt-3 text-gray-600">A small team focused on product and customer success.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 md:grid-cols-4">
            {['Ashan','Priya','Marcus','Lina'].map((name) => (
              <div key={name} className="p-6 text-center bg-white rounded-lg shadow">
                <div className="flex items-center justify-center w-20 h-20 mx-auto text-xl font-semibold text-white rounded-full bg-cyan-500">{name.charAt(0)}</div>
                <h4 className="mt-4 font-semibold text-gray-900">{name}</h4>
                <p className="mt-1 text-sm text-gray-600">Product & Engineering</p>
              </div>
            ))}
          </div>
        </section>

     
        <section className="mt-8 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600">
          <div className="px-6 py-12 mx-auto text-center text-white max-w-7xl">
            <h3 className="text-2xl font-bold">Ready to see BizOra in action?</h3>
            <p className="max-w-2xl mx-auto mt-3">Start a free trial or schedule a demo with our team — we'll help you get set up in minutes.</p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <a href="/signup" className="inline-flex items-center px-6 py-3 font-semibold bg-white rounded-md text-cyan-600">Get started</a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 text-white border rounded-md bg-cyan-700 bg-opacity-20 border-white/20">Contact sales</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default About
