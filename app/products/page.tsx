'use client'

import Link from 'next/link'

export default function ProductsPage() {
  const products = [
    {
      name: 'PP-R Plumbing',
      tagline: 'Tough But Not Rough',
      desc: 'Polypropylene pipes for hot and cold water systems',
      specs: 'Max 95°C | PN20',
    },
    {
      name: 'Multilayer',
      tagline: '5 Layers, 5x Healthier',
      desc: 'Composite pipes with aluminum barrier',
      specs: 'Max 95°C | PN25',
    },
    {
      name: 'PE-X',
      tagline: 'Ultra Flexible',
      desc: 'Cross-linked polyethylene for underfloor heating',
      specs: 'Max 95°C | PN16',
    },
    {
      name: 'Gas Piping',
      tagline: 'Flexible yet Stable',
      desc: 'Stainless steel for natural gas & LPG',
      specs: '50kPa | Flexible',
    },
    {
      name: 'PVC Drainage',
      tagline: 'Rule the Quiet',
      desc: 'High-quality wastewater drainage',
      specs: 'Gravity | Silent',
    },
    {
      name: 'PVC Conduit',
      tagline: 'Electrical Safety',
      desc: 'Electrical conduit systems',
      specs: 'Heavy Duty | Fire Resistant',
    },
    {
      name: 'A/C Piping',
      tagline: 'Safe & Durable',
      desc: 'Insulated pipes for HVAC systems',
      specs: '-40°C~+120°C | 45bar',
    },
    {
      name: 'Underfloor Heating',
      tagline: 'Energy-Efficient',
      desc: 'Complete heating system solutions',
      specs: 'Up to 60°C | 6bar',
    },
    {
      name: 'Infrastructure',
      tagline: 'Large Scale',
      desc: 'HDPE for municipal projects',
      specs: 'PN6-PN25 | Various',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6" />
          <p className="mt-6 text-gray-400">9 Major Piping Systems for Every Application</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={product.name} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">System {index + 1}</span>
                <h2 className="text-xl font-bold mt-3">{product.name}</h2>
                <p className="text-red-100 text-sm italic">"{product.tagline}"</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{product.desc}</p>
                <p className="text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded">{product.specs}</p>
                <Link href="/contact" className="block mt-4 text-center py-2 border-2 border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition">
                  Inquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl font-bold text-white mb-2">RIIFO</p>
          <p className="text-sm">© 2024 RIIFO Indonesia</p>
        </div>
      </footer>
    </main>
  )
}
