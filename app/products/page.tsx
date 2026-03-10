'use client'

import Link from 'next/link'

export default function ProductsPage() {
  const products = [
    {
      name: 'PP-R Plumbing System',
      tagline: 'Tough But Not Rough',
      desc: 'Polypropylene Random Copolymer pipes for hot and cold water systems. Excellent heat resistance, corrosion resistance, and long service life. Ideal for residential and commercial plumbing.',
      applications: ['Hot & Cold Water', 'Residential Plumbing', 'Commercial Buildings'],
      specs: { temp: 'Max 95°C', pressure: 'PN20', lifespan: '50+ Years' },
    },
    {
      name: 'Multilayer Plumbing System',
      tagline: '5 Layers, 5x Healthier',
      desc: 'Five-layer composite pipes combining plastic and aluminum. Oxygen-tight barrier prevents corrosion and ensures superior durability for heating systems.',
      applications: ['Radiant Heating', 'Underfloor Heating', 'High-temp Systems'],
      specs: { temp: 'Max 95°C', pressure: 'PN25', lifespan: '50+ Years' },
    },
    {
      name: 'PE-X Plumbing System',
      tagline: 'Ultra Flexible',
      desc: 'Cross-linked polyethylene with exceptional flexibility and memory shape. Ideal for underfloor heating and complex installations with tight spaces.',
      applications: ['Underfloor Heating', 'Renovation Projects', 'Tight Spaces'],
      specs: { temp: 'Max 95°C', pressure: 'PN16', lifespan: '50+ Years' },
    },
    {
      name: 'Gas Piping System',
      tagline: 'Flexible yet Stable',
      desc: 'Corrugated stainless steel gas pipes with PVC coating. Perfect for natural gas and LPG systems with flexibility and safety.',
      applications: ['Natural Gas', 'LPG Systems', 'Residential & Commercial'],
      specs: { temp: 'Ambient', pressure: '50kPa', lifespan: '30+ Years' },
    },
    {
      name: 'PVC Drainage System',
      tagline: 'Rule the Quiet',
      desc: 'High-quality PVC pipes and fittings for wastewater drainage. Superior sound insulation performance and excellent flow characteristics.',
      applications: ['Wastewater Drainage', 'Storm Water', 'Soil Stacks'],
      specs: { temp: 'Ambient', pressure: 'Gravity', lifespan: '50+ Years' },
    },
    {
      name: 'PVC Conduit System',
      tagline: 'Electrical Safety',
      desc: 'Electrical conduit systems for wire protection. Fire-resistant, impact-resistant design ensuring electrical safety in all installations.',
      applications: ['Electrical Wiring', 'Data Cables', 'Fire Protection'],
      specs: { temp: 'Ambient', pressure: 'Heavy Duty', lifespan: '50+ Years' },
    },
    {
      name: 'A/C Piping System',
      tagline: 'Safe & Durable',
      desc: 'Insulated copper and composite pipes for air conditioning systems. Pre-insulated for easy installation and optimal performance.',
      applications: ['VRF Systems', 'Split AC', 'Central HVAC'],
      specs: { temp: '-40°C~+120°C', pressure: '45bar', lifespan: '30+ Years' },
    },
    {
      name: 'Underfloor Heating',
      tagline: 'Energy-Efficient Comfort',
      desc: 'Complete underfloor heating systems including manifolds, pipes, and controls. Even heat distribution for maximum comfort and efficiency.',
      applications: ['Residential', 'Commercial', 'Industrial Spaces'],
      specs: { temp: 'Up to 60°C', pressure: '6bar', lifespan: '50+ Years' },
    },
    {
      name: 'Infrastructure Piping',
      tagline: 'Large Scale Solutions',
      desc: 'HDPE and large-diameter pipes for municipal water supply, drainage, and major infrastructure projects. Built for durability and performance.',
      applications: ['Water Supply', 'Drainage', 'Irrigation', 'Mining'],
      specs: { temp: 'Various', pressure: 'PN6-PN25', lifespan: '50+ Years' },
    },
  ]

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
            <Link href="/company" className="text-gray-600 hover:text-red-600 transition">Company</Link>
            <Link href="/products" className="text-red-600 font-semibold">Products</Link>
            <Link href="/contact" className="text-gray-600 hover:text-red-600 transition">Contact</Link>
            <Link href="/warranty" className="text-gray-600 hover:text-red-600 transition">Warranty</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-300 mb-2">Products / 产品系列</p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            9 Major Piping Systems for Every Application — From residential plumbing to large-scale infrastructure projects.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={product.name} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              {/* Product Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    System {index + 1}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
                <p className="text-red-100 italic">"{product.tagline}"</p>
              </div>

              {/* Product Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{product.desc}</p>

                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span key={app} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specs */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Temperature</p>
                      <p className="font-semibold text-gray-900">{product.specs.temp}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Pressure</p>
                      <p className="font-semibold text-gray-900">{product.specs.pressure}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Lifespan</p>
                      <p className="font-semibold text-gray-900">{product.specs.lifespan}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <Link 
                  href="/contact" 
                  className="block w-full text-center py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
                >
                  Inquire Now / 立即咨询
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose RIIFO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RIIFO Products?</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto" />
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Quality', desc: 'Made with virgin raw materials', icon: '✓' },
              { title: 'Certified', desc: 'NSF, DVGW, WRAS approved', icon: '🏆' },
              { title: 'Warranty', desc: 'Up to 25 years coverage', icon: '🛡️' },
              { title: 'Support', desc: '24/7 technical assistance', icon: '🔧' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Product Specifications?</h2>
          <p className="text-red-100 mb-8 text-lg">
            Contact us for detailed technical data sheets, installation guides, and pricing information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition">
              Contact Sales
            </Link>
            <Link href="/warranty" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition">
              Register Warranty
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl font-bold text-white mb-2">RIIFO</p>
          <p className="mb-2">Ideal Piping Solutions for Everyone</p>
          <p className="text-sm">© 2024 RIIFO Indonesia. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
