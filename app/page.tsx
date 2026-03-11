'use client'

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'

// 图片对比滑块组件
function ImageComparisonSlider({ 
  beforeImage, 
  afterImage
}: { 
  beforeImage: string
  afterImage: string
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = () => setIsDragging(true)
  
  const handleMouseUp = () => setIsDragging(false)
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* 底层图片 (After) */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt="Factory Production" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 上层图片 (Before) - 通过 clip-path 控制显示区域 */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Factory Exterior" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 拖动滑块 */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* 滑块按钮 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
          </svg>
        </div>
      </div>

      {/* 提示文字 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded text-sm">
        Drag to compare / 拖动对比
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Image Comparison Slider */}
      <section className="relative">
        {/* 图片对比滑块 Banner - RIIFO真实工厂 */}
        <ImageComparisonSlider
          beforeImage="/factory-exterior.jpg"
          afterImage="/factory-production.jpg"
        />

        {/* 文字覆盖层 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              Ideal Piping Solutions
              <span className="block text-red-500 mt-2">for Everyone</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Drag the slider to see the difference. RIFENG Enterprise Group — providing powerful R&D and manufacturing capacity with localized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
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
              { name: 'PP-R Plumbing', desc: 'Tough But Not Rough', image: null },
              { name: 'Multilayer Plumbing', desc: '5 Layers, 5x Healthier', image: null },
              { name: 'PE-X Plumbing', desc: 'Ultra Flexible', image: '/pex-plumbing.png' },
              { name: 'Gas Piping', desc: 'Flexible yet Stable', image: null },
              { name: 'PVC Drainage', desc: 'Rule the Quiet', image: null },
              { name: 'PVC Conduit', desc: 'Electrical Safety', image: null },
              { name: 'A/C Piping', desc: 'Safe & Durable', image: null },
              { name: 'Underfloor Heating', desc: 'Energy-Efficient', image: null },
              { name: 'Infrastructure', desc: 'Large Scale Solutions', image: null },
            ].map((product) => (
              <div key={product.name} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-10 h-10 border-4 border-red-500 rounded-full" />
                  )}
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
