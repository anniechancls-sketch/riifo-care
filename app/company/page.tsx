'use client'

import Link from 'next/link'

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            RIIFO<span className="text-red-600">-INDONESIA</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-red-600 transition">Home</Link>
            <Link href="/company" className="text-red-600 font-semibold">Company</Link>
            <Link href="/contact" className="text-gray-600 hover:text-red-600 transition">Contact</Link>
            <Link href="/warranty" className="text-gray-600 hover:text-red-600 transition">Warranty</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About RIIFO
          </h1>
          <p className="text-xl text-gray-300">Company Profile & Products / 公司简介与产品</p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6" />
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">RIIFO Manufacturing</h2>
            <p className="text-gray-400">See our world-class production facilities in action</p>
          </div>
          <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="/factory-exterior.jpg"
            >
              <source src="/company-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            RIIFO Advanced Production Line / RIIFO 先进生产线
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">RIFENG Enterprise Group</h2>
            <div className="w-16 h-1 bg-red-500 mb-6" />
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Founded in 1996</strong>, RIFENG Enterprise is a leading manufacturer of plastic piping systems in China. 
              Our wholly-owned export brand <strong>RIIFO</strong> serves overseas markets with the same quality standards.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With decades of experience in piping solutions, we have established a strong presence across 
              <strong> 100+ countries and regions</strong>, providing professional-grade products for residential, commercial, 
              and industrial applications.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-red-600">28+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-red-600">100+</p>
                <p className="text-sm text-gray-600">Countries</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-red-600">1000+</p>
                <p className="text-sm text-gray-600">Global Partners</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Global Presence</h3>
            <div className="space-y-4">
              {[
                { region: 'Southeast Asia', status: 'Strong Presence' },
                { region: 'Middle East', status: 'Established' },
                { region: 'Africa', status: 'Growing Market' },
                { region: 'Latin America', status: 'Expanding' },
                { region: 'Europe', status: 'Selective Markets' },
              ].map((market) => (
                <div key={market.region} className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                  <span className="font-medium text-gray-900">{market.region}</span>
                  <span className="text-sm text-red-600 font-medium">{market.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Indonesia Market */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">RIIFO Indonesia</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mb-4" />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Established in 2018, we have built a comprehensive distribution network 
              serving residential and commercial customers across the archipelago.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '50+', label: 'Distributors', desc: 'Authorized partners' },
              { number: '3,000+', label: 'Retail Stores', desc: 'Nationwide coverage' },
              { number: '200+', label: 'Modern Markets', desc: 'Major retail chains' },
              { number: '21', label: 'Provinces', desc: 'Full archipelago reach' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <p className="text-4xl font-bold text-red-600 mb-2">{stat.number}</p>
                <p className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Systems */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Product Systems</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-4" />
          <p className="text-gray-600">9 Major Piping Solutions for Every Application</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'PP-R Plumbing',
              tagline: 'Tough But Not Rough',
              desc: 'Polypropylene Random Copolymer pipes for hot and cold water systems. Excellent heat resistance and long service life.',
              temp: 'Max 95°C',
              pressure: 'PN20',
            },
            {
              name: 'Multilayer Plumbing',
              tagline: '5 Layers, 5x Healthier',
              desc: 'Five-layer composite pipes combining plastic and aluminum. Oxygen-tight barrier prevents corrosion.',
              temp: 'Max 95°C',
              pressure: 'PN25',
            },
            {
              name: 'PE-X Plumbing',
              tagline: 'Ultra Flexible',
              desc: 'Cross-linked polyethylene with exceptional flexibility. Ideal for underfloor heating and complex installations.',
              temp: 'Max 95°C',
              pressure: 'PN16',
            },
            {
              name: 'Gas Piping',
              tagline: 'Flexible yet Stable',
              desc: 'Corrugated stainless steel gas pipes with PVC coating. Perfect for natural gas and LPG systems.',
              temp: 'Ambient',
              pressure: '50kPa',
            },
            {
              name: 'PVC Drainage',
              tagline: 'Rule the Quiet',
              desc: 'High-quality PVC pipes and fittings for wastewater drainage. Superior sound insulation performance.',
              temp: 'Ambient',
              pressure: 'Gravity',
            },
            {
              name: 'PVC Conduit',
              tagline: 'Electrical Safety',
              desc: 'Electrical conduit systems for wire protection. Fire-resistant and impact-resistant design.',
              temp: 'Ambient',
              pressure: 'Heavy Duty',
            },
            {
              name: 'A/C Piping',
              tagline: 'Safe & Durable',
              desc: 'Insulated copper and composite pipes for air conditioning systems. Pre-insulated for easy installation.',
              temp: '-40°C ~ +120°C',
              pressure: '45bar',
            },
            {
              name: 'Underfloor Heating',
              tagline: 'Energy-Efficient',
              desc: 'Complete underfloor heating systems with manifolds, pipes, and controls. Even heat distribution.',
              temp: 'Up to 60°C',
              pressure: '6bar',
            },
            {
              name: 'Infrastructure',
              tagline: 'Large Scale Solutions',
              desc: 'HDPE and large-diameter pipes for municipal water supply, drainage, and infrastructure projects.',
              temp: 'Various',
              pressure: 'PN6-PN25',
            },
          ].map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-red-100 text-sm">{product.tagline}</p>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.desc}</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">{product.temp}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">{product.pressure}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mb-4" />
            <p className="text-gray-400">Three Simple Steps to Complete Service</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Register */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Register / 登记</h3>
              <p className="text-gray-400 mb-4">
                Contact our authorized distributors or submit inquiry online. 
                Our team will respond within 24 hours via WhatsApp.
              </p>
              <ul className="text-left text-sm text-gray-500 space-y-2 max-w-xs mx-auto">
                <li>• Online inquiry submission</li>
                <li>• WhatsApp consultation</li>
                <li>• Visit authorized stores</li>
              </ul>
            </div>

            {/* Step 2: Service */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Service / 服务</h3>
              <p className="text-gray-400 mb-4">
                Professional installation guidance, technical training, and 
                after-sales support throughout your project.
              </p>
              <ul className="text-left text-sm text-gray-500 space-y-2 max-w-xs mx-auto">
                <li>• Installation guidance</li>
                <li>• Technical training</li>
                <li>• Product delivery</li>
              </ul>
            </div>

            {/* Step 3: Follow-up */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Follow-up / 回访</h3>
              <p className="text-gray-400 mb-4">
                Up to 25-year warranty protection with regular follow-ups 
                and dedicated customer service.
              </p>
              <ul className="text-left text-sm text-gray-500 space-y-2 max-w-xs mx-auto">
                <li>• Warranty card binding</li>
                <li>• Regular maintenance</li>
                <li>• 24/7 support hotline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
          <div className="w-16 h-1 bg-red-500 mx-auto" />
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: 'ISO 9001', desc: 'Quality Management' },
            { title: 'ISO 14001', desc: 'Environmental Management' },
            { title: 'SKZ', desc: 'German Certification' },
            { title: 'NSF', desc: 'Drinking Water Safety' },
            { title: 'DVGW', desc: 'German Gas & Water' },
            { title: 'WRAS', desc: 'UK Water Regulation' },
            { title: 'SII', desc: 'Indonesian Standards' },
            { title: 'SIRIM', desc: 'Malaysian Standards' },
          ].map((cert) => (
            <div key={cert.title} className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-500">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with RIIFO?</h2>
          <p className="text-red-100 mb-8 text-lg">
            Contact us today for product consultation, pricing, or partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition">
              Contact Us
            </Link>
            <Link href="/warranty" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition">
              Register Warranty
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl font-bold text-gray-900 mb-2">RIIFO</p>
          <p className="text-gray-600 mb-2">Ideal Piping Solutions for Everyone</p>
          <p className="text-sm text-gray-500">© 2024 RIIFO Indonesia. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
