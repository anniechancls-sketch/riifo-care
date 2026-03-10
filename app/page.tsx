import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Ideal Piping Solutions
            <span className="block text-red-500 mt-2">for Everyone</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            RIFENG Enterprise Group established in 1996. RIIFO — our wholly-owned brand for overseas markets, 
            providing powerful R&D and manufacturing capacity with localized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/company" className="px-8 py-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300">
              About Company
            </Link>
            <Link href="/products" className="px-8 py-4 bg-white text-red-600 font-semibold rounded hover:bg-gray-100 transition duration-300">
              Explore Products
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-gray-900 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hi! This is RIIFO</h2>
            <div className="w-20 h-1 bg-red-500 mb-6" />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in 2018, <strong>RIIFO Indonesia</strong> has cooperated with more than <span className="text-red-600 font-semibold">50 distributors</span>, 
              developed over <span className="text-red-600 font-semibold">3,000 retail stores</span> and entered about <span className="text-red-600 font-semibold">200 modern markets</span>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our goal is to break the industry status quo by providing better service and products at the right price 
              for clients who value quality and attentive service.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Indonesia&apos;s Market Coverage</h3>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-3xl font-bold text-red-600">21</p>
                <p className="text-sm text-gray-600 mt-1">Provinces</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-3xl font-bold text-red-600">100+</p>
                <p className="text-sm text-gray-600 mt-1">Cities</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-3xl font-bold text-red-600">50+</p>
                <p className="text-sm text-gray-600 mt-1">Distributors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Systems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Systems</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'PP-R Plumbing', desc: 'Tough But Not Rough' },
              { name: 'Multilayer Plumbing', desc: '5 Layers, 5x Healthier' },
              { name: 'PE-X Plumbing', desc: 'Ultra Flexible' },
              { name: 'Gas Piping', desc: 'Flexible yet Stable' },
              { name: 'PVC Drainage', desc: 'Rule the Quiet' },
              { name: 'PVC Conduit', desc: 'Electrical Safety' },
              { name: 'A/C Piping', desc: 'Safe & Durable' },
              { name: 'Underfloor Heating', desc: 'Energy-Efficient' },
              { name: 'Infrastructure', desc: 'Large Scale Solutions' },
            ].map((product) => (
              <div key={product.name} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-red-500 rounded-full" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 text-center">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logistics */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-red-600 text-white px-6 py-3">
              <h3 className="text-xl font-bold">Logistics</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Convenient pickup</strong> at RIIFO local warehouse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Door-to-door delivery</strong> within 72 hours</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Support */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-red-600 text-white px-6 py-3">
              <h3 className="text-xl font-bold">Technical Support</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Online resources & tutorial videos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Technical training courses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Face-to-face guidance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* After-Sales */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-red-600 text-white px-6 py-3">
              <h3 className="text-xl font-bold">After-Sales</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Up to 25-Year Warranty</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Product Liability Insurance (10M USD)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Card CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Register Your RIIFO Care Warranty Card</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Enjoy up to 25 years of product warranty protection for your piping systems.
          </p>
          <Link href="/warranty" className="inline-block px-8 py-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300">
            Bind Warranty Card
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-bold text-gray-900 mb-2">RIIFO</p>
          <p className="text-gray-600 mb-4">Ideal Piping Solutions for Everyone</p>
          <p className="text-sm text-gray-500">© 2024 RIIFO Indonesia. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
