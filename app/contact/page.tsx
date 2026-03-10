'use client'

import { useState, FormEvent, useEffect } from 'react'
import Link from 'next/link'

// 印尼电话号码格式验证函数
const validateIndonesianPhone = (phone: string): { valid: boolean; message: string } => {
  // 移除所有空格和特殊字符
  const cleanPhone = phone.replace(/\s/g, '').replace(/-/g, '')
  
  // 检查是否为空
  if (!cleanPhone) {
    return { valid: false, message: 'Phone number is required' }
  }
  
  // 检查是否只包含数字
  if (!/^\d+$/.test(cleanPhone)) {
    return { valid: false, message: 'Only numbers allowed' }
  }
  
  // 检查长度（印尼手机号通常是10-12位，去掉前面的0）
  if (cleanPhone.length < 10 || cleanPhone.length > 12) {
    return { valid: false, message: 'Invalid length (10-12 digits)' }
  }
  
  // 检查印尼手机号前缀
  // 印尼主要运营商前缀：8xx, 9xx
  const validPrefixes = ['8', '9']
  const firstDigit = cleanPhone.charAt(0)
  
  if (!validPrefixes.includes(firstDigit)) {
    return { valid: false, message: 'Invalid Indonesian number prefix' }
  }
  
  // 检查具体运营商前缀
  const prefix2 = cleanPhone.substring(0, 2)
  const validOperatorPrefixes = [
    // Telkomsel
    '81', '82', '85', '38',
    // Indosat
    '81', '85',
    // XL
    '87', '88', '83',
    // Tri (3)
    '89', '95', '96', '97', '98', '99',
    // Smartfren
    '81', '82', '85', '88', '89',
    // Axis
    '83', '88',
  ]
  
  if (!validOperatorPrefixes.includes(prefix2)) {
    return { valid: false, message: 'Unknown operator prefix' }
  }
  
  return { valid: true, message: '✓ Valid Indonesian number' }
}

// 邮箱格式验证
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    whatsapp: '',
    province: '',
    city: '',
    interests: [] as string[],
    description: '',
    agent: '',
  })

  const [errors, setErrors] = useState<{
    email?: string
    whatsapp?: string
    name?: string
    province?: string
    city?: string
  }>({})

  const [touched, setTouched] = useState<{
    email?: boolean
    whatsapp?: boolean
    name?: boolean
  }>({})

  const [phoneValidation, setPhoneValidation] = useState<{ valid: boolean; message: string } | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const provinces = [
    'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Banten',
    'DI Yogyakarta', 'Sumatera Utara', 'Sumatera Barat', 'Sulawesi Selatan', 'Kalimantan Timur',
  ]

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

  const agents = [
    'PT. Sejahtera Abadi', 'PT. Maju Jaya', 'PT. Sumber Rezeki',
    'PT. Delta Mandiri', 'PT. Nusa Indah', 'No Agent (Direct Customer)',
  ]

  const interestOptions = [
    { id: 'product', label: 'Product Consultation / 产品咨询' },
    { id: 'care', label: 'RIIFO Care Warranty / RIIFO Care 质保服务' },
    { id: 'partnership', label: 'Distributor Partnership / 代理合作' },
  ]

  // 实时验证 WhatsApp 号码
  useEffect(() => {
    if (formData.whatsapp && touched.whatsapp) {
      const result = validateIndonesianPhone(formData.whatsapp)
      setPhoneValidation(result)
      if (!result.valid) {
        setErrors(prev => ({ ...prev, whatsapp: result.message }))
      } else {
        setErrors(prev => ({ ...prev, whatsapp: undefined }))
      }
    }
  }, [formData.whatsapp, touched.whatsapp])

  // 实时验证邮箱
  useEffect(() => {
    if (formData.email && touched.email) {
      if (!validateEmail(formData.email)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }))
      } else {
        setErrors(prev => ({ ...prev, email: undefined }))
      }
    }
  }, [formData.email, touched.email])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }))
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

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {}
    
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.name) {
      newErrors.name = 'Name is required'
    }
    
    const phoneCheck = validateIndonesianPhone(formData.whatsapp)
    if (!phoneCheck.valid) {
      newErrors.whatsapp = phoneCheck.message
    }
    
    if (!formData.province) {
      newErrors.province = 'Please select a province'
    }
    
    if (!formData.city) {
      newErrors.city = 'Please select a city'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // 标记所有字段为已触碰
    setTouched({ email: true, whatsapp: true, name: true })
    
    if (!validateForm()) {
      return
    }
    
    // 通过隐藏的 iframe 提交到 Pardot
    const form = e.target as HTMLFormElement
    form.submit()
    setSubmitted(true)
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
          <p className="text-gray-600 mb-4">Your inquiry has been submitted successfully.</p>
          <p className="text-sm text-gray-500 mb-6">We'll contact you via WhatsApp within 24 hours.</p>
          <Link href="/" className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">Back to Home</Link>
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
          </div>

          <form 
            onSubmit={handleSubmit}
            action="https://go.riifo.com/l/900071/2026-03-10/3t7vt1" 
            method="post"
            target="pardot-iframe"
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <iframe name="pardot-iframe" style={{ display: 'none' }} title="Pardot Form Handler" />

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={() => handleBlur('email')}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition ${
                  errors.email && touched.email
                    ? 'border-red-500 focus:ring-red-200' 
                    : formData.email && !errors.email && touched.email
                    ? 'border-green-500 focus:ring-green-200'
                    : 'border-gray-300 focus:ring-red-500'
                }`}
                placeholder="your@email.com"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nama Lengkap / 姓名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={() => handleBlur('name')}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* WhatsApp with Validation */}
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
                  onBlur={() => handleBlur('whatsapp')}
                  required
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition ${
                    errors.whatsapp && touched.whatsapp
                      ? 'border-red-500 focus:ring-red-200'
                      : phoneValidation?.valid && touched.whatsapp
                      ? 'border-green-500 focus:ring-green-200'
                      : 'border-gray-300 focus:ring-red-500'
                  }`}
                  placeholder="81234567890 (without 0)"
                />
                {phoneValidation?.valid && touched.whatsapp && (
                  <span className="absolute right-3 top-3.5 text-green-500">✓</span>
                )}
              </div>
              
              {/* Validation Message */}
              {formData.whatsapp && (
                <p className={`text-sm mt-1 ${phoneValidation?.valid ? 'text-green-600' : 'text-red-500'}`}>
                  {phoneValidation?.message}
                </p>
              )}
              
              {!touched.whatsapp && (
                <p className="text-xs text-gray-500 mt-1">
                  Format: +62 followed by 10-12 digits (without leading 0)
                </p>
              )}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition bg-white ${
                    errors.province ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Province</option>
                  {provinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
                {errors.province && <p className="text-red-500 text-sm mt-1">{errors.province}</p>}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition bg-white disabled:bg-gray-100 ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select City</option>
                  {formData.province && cities[formData.province]?.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
            </div>

            {/* Interests */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tertarik Dengan / 感兴趣内容 <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {interestOptions.map(option => (
                  <label key={option.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                    <input
                      type="checkbox"
                      name="interests"
                      value={option.id}
                      checked={formData.interests.includes(option.id)}
                      onChange={() => handleInterestChange(option.id)}
                      className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <span className="ml-3 text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Agent */}
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

            {/* Description */}
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
                placeholder="Please describe your needs..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Submit Inquiry / 提交咨询
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl font-bold text-gray-900 mb-2">RIIFO</p>
          <p className="text-gray-600 mb-2">Ideal Piping Solutions for Everyone</p>
          <p className="text-sm text-gray-500">© 2024 RIIFO Indonesia</p>
        </div>
      </footer>
    </main>
  )
}
