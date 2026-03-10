'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function WarrantyPage() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    installDate: '',
    customerName: '',
    phone: '',
    email: '',
  })

  const [certificate, setCertificate] = useState<{
    show: boolean
    cardNumber: string
    warrantyStart: string
    warrantyEnd: string
    customerName: string
  } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 生成虚拟的 25 年质保期
    const installDate = new Date(formData.installDate)
    const warrantyStart = installDate.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    
    const warrantyEndDate = new Date(installDate)
    warrantyEndDate.setFullYear(warrantyEndDate.getFullYear() + 25)
    const warrantyEnd = warrantyEndDate.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    setCertificate({
      show: true,
      cardNumber: formData.cardNumber,
      warrantyStart,
      warrantyEnd,
      customerName: formData.customerName,
    })
  }

  const closeCertificate = () => {
    setCertificate(null)
    setFormData({
      cardNumber: '',
      installDate: '',
      customerName: '',
      phone: '',
      email: '',
    })
  }

  // 生成证书编号
  const generateCertNumber = () => {
    return `RIIFO-${Date.now().toString(36).toUpperCase()}`
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
            <Link href="/contact" className="text-gray-600 hover:text-red-600 transition">Contact</Link>
            <Link href="/warranty" className="text-red-600 font-semibold">Warranty</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            RIIFO Care Warranty Card
          </h1>
          <p className="text-xl text-gray-300 mb-2">绑定质保卡 / Bind Your Warranty Card</p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6" />
        </div>
      </section>

      {/* Warranty Benefits */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Up to 25 Years</h3>
              <p className="text-gray-600">Extended warranty coverage for your piping systems</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">$10M Insurance</h3>
              <p className="text-gray-600">Product liability insurance by Allianz</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Professional technical support anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Register Your Warranty
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Enter your warranty card details to activate your coverage
            </p>

            <form onSubmit={handleSubmit}>
              {/* Card Number */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nomor Kartu Garansi / Warranty Card Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="RIIFO-XXXX-XXXX-XXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition uppercase"
                />
                <p className="text-xs text-gray-500 mt-1">Find this number on your warranty card</p>
              </div>

              {/* Installation Date */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tanggal Instalasi / Installation Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="installDate"
                  value={formData.installDate}
                  onChange={handleInputChange}
                  required
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                />
                <p className="text-xs text-gray-500 mt-1">Approximate installation date is acceptable</p>
              </div>

              {/* Customer Info */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap / Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor Telepon / Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    placeholder="+62..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
              >
                Activate Warranty / Aktifkan Garansi
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {certificate?.show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Certificate Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-2">RIIFO Care</h2>
              <p className="text-red-100">Warranty Certificate / Sertifikat Garansi</p>
            </div>

            {/* Certificate Body */}
            <div className="p-8">
              <div className="border-2 border-red-100 rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Certificate Number</p>
                    <p className="text-lg font-bold text-gray-900">{generateCertNumber()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Warranty Card Number</p>
                    <p className="text-lg font-bold text-gray-900">{certificate.cardNumber}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <p className="text-sm text-gray-500 mb-1">Registered To</p>
                  <p className="text-2xl font-bold text-gray-900">{certificate.customerName}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Warranty Start</p>
                    <p className="text-lg font-bold text-green-700">{certificate.warrantyStart}</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Warranty End</p>
                    <p className="text-lg font-bold text-red-700">{certificate.warrantyEnd}</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-4xl font-bold text-red-600">25 Years</p>
                  <p className="text-gray-600">of Warranty Protection</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  Your warranty has been successfully activated! A confirmation will be sent to your registered contact.
                </p>
                <button
                  onClick={closeCertificate}
                  className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                >
                  Close / Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
