'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    province: '',
    city: '',
    interests: [] as string[],
    description: '',
    agent: '',
  })

  const [submitted, setSubmitted] = useState(false)

  // 印尼省份数据（示例）
  const provinces = [
    'DKI Jakarta',
    'Jawa Barat',
    'Jawa Tengah',
    'Jawa Timur',
    'Banten',
    'DI Yogyakarta',
    'Sumatera Utara',
    'Sumatera Barat',
    'Sulawesi Selatan',
    'Kalimantan Timur',
  ]

  // 城市数据（示例，实际应根据省份联动）
  const cities: Record<string, string[]> = {
    'DKI Jakarta': ['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Utara'],
    'Jawa Barat': ['Bandung', 'Bekasi', 'Bogor', 'Depok', 'Cimahi'],
    'Jawa Tengah': ['Semarang', 'Surakarta', 'Magelang', 'Pekalongan', 'Tegal'],
    'Jawa Timur': ['Surabaya', 'Malang', 'Mojokerto', 'Madiun', 'Kediri'],
    'Banten': ['Tangerang', 'Serang', 'Cilegon', 'Tangerang Selatan'],
    'DI Yogyakarta': ['Yogyakarta', 'Sleman', 'Bantul', 'Gunungkidul'],
    'Sumatera Utara': ['Medan', 'Binjai', 'Pematangsiantar', 'Tebing Tinggi'],
    'Sumatera Barat': ['Padang', 'Bukittinggi', 'Payakumbuh', 'Solok'],
    'Sulawesi Selatan': ['Makassar', 'Palopo', 'Parepare'],
    'Kalimantan Timur': ['Samarinda', 'Balikpapan', 'Bontang'],
  }

  // 代理商数据
  const agents = [
    'PT. Sejahtera Abadi',
    'PT. Maju Jaya',
    'PT. Sumber Rezeki',
    'PT. Delta Mandiri',
    'PT. Nusa Indah',
    'No Agent (Direct Customer)',
  ]

  // 感兴趣选项
  const interestOptions = [
    { id: 'product', label: 'Product Consultation / 产品咨询' },
    { id: 'care', label: 'RIIFO Care Warranty / RIIFO Care 质保服务' },
    { id: 'partnership', label: 'Distributor Partnership / 代理合作' },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const province = e.target.value
    setFormData(prev => ({ ...prev, province, city: '' }))
  }

  const handleInterestChange = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(i => i !== interestId)
        : [...prev.interests, interestId]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 模拟提交成功
    setSubmitted(true)
    // 模拟 WhatsApp 通知弹窗（Demo 效果）
    setTimeout(() => {
      alert('✅ Inquiry Submitted Successfully!\n\nSimulated WhatsApp notification will be sent to your number.\n\nOur team will contact you within 24 hours.')
    }, 500)
  }

  const validateWhatsapp = (number: string) => {
    // 印尼号码格式：+62 或 62 开头，后面 9-12 位数字
    const cleanNumber = number.replace(/\s/g, '').replace(/^0/, '62')
    return /^62[0-9]{9,12}$/.test(cleanNumber)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your inquiry has been submitted successfully. Our team will contact you via WhatsApp within 24 hours.
          </p>
          <Link href="/" className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition">
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            RIIFO<span className="text-red-600">-INDONESIA</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-red-600 transition">Home</Link>
            <Link href="/products" className="text-gray-600 hover:text-red-600 transition">Products</Link>
            <Link href="/contact" className="text-red-600 font-semibold">Contact Us</Link>
          </nav>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us / 联系我们</h1>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-4" />
            <p className="text-gray-600">
              Fill out the form below and we&apos;ll get back to you via WhatsApp within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nama Lengkap / 姓名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                placeholder="Enter your full name"
              />
            </div>

            {/* WhatsApp Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nomor WhatsApp / WhatsApp号码 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-gray-500 font-medium">+62</span>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                  placeholder="81234567890"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Format: +62 followed by your number (without leading 0)</p>
            </div>

            {/* Province & City */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Provinsi / 省份 <span className="text-red-500">*</span>
                </label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleProvinceChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="">Select Province</option>
                  {provinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Kota / 城市 <span className="text-red-500">*</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  disabled={!formData.province}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition bg-white disabled:bg-gray-100"
                >
                  <option value="">Select City</option>
                  {formData.province && cities[formData.province]?.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Interested In - Multi Select */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tertarik Dengan / 感兴趣内容 <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {interestOptions.map(option => (
                  <label key={option.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(option.id)}
                      onChange={() => handleInterestChange(option.id)}
                      className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span className="ml-3 text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Agent Association */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Agen Terkait / 关联代理商 <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <select
                name="agent"
                value={formData.agent}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition bg-white"
              >
                <option value="">Select Agent (if any)</option>
                {agents.map(agent => (
                  <option key={agent} value={agent}>{agent}</option>
                ))}
              </select>
            </div>

            {/* Demand Description */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Deskripsi Kebutuhan / 需求描述 <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Please describe your needs or questions..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
            >
              Submit Inquiry / 提交咨询
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              We will contact you via WhatsApp within 24 hours.
            </p>
          </form>
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
