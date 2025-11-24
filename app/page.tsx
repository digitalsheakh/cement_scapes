'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const services = [
    {
      title: "Extensions & Renovations",
      description: "Transform your Bedford home with quality extensions and complete renovations"
    },
    {
      title: "Interior & Exterior Painting",
      description: "Expert decorating services to refresh and protect your property"
    },
    {
      title: "Block Paving & Driveways",
      description: "Durable driveways and patios that enhance your home's curb appeal"
    },
    {
      title: "Flooring, Tiling & Carpeting",
      description: "Quality floor installations from tiles to carpets and laminate"
    },
    {
      title: "Loft Conversions",
      description: "Create extra living space with professional loft conversion services"
    },
    {
      title: "General Building & Household Repairs",
      description: "Reliable maintenance and repair work to keep your home in perfect condition"
    },
    {
      title: "Bespoke Building Solutions",
      description: "Custom building projects tailored to your specific needs and vision"
    }
  ]

  const portfolioImages = [
    "WhatsApp Image 2025-11-23 at 00.07.41 (1).jpeg",
    "WhatsApp Image 2025-11-23 at 00.07.42 (1).jpeg",
    "WhatsApp Image 2025-11-23 at 00.07.42 (2).jpeg",
    "WhatsApp Image 2025-11-23 at 00.16.39.jpeg",
    "WhatsApp Image 2025-11-23 at 00.16.40.jpeg",
    "WhatsApp Image 2025-11-23 at 00.16.41 (1).jpeg",
    "WhatsApp Image 2025-11-23 at 00.16.41.jpeg",
    "WhatsApp Image 2025-11-23 at 00.18.04 (2).jpeg",
    "WhatsApp Image 2025-11-23 at 00.18.04.jpeg"
  ]

  const visitingCardImages = [
    "1.png",
    "2.png"
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length)
    }, 2500) // Change image every 2.5 seconds (faster on mobile)

    return () => clearInterval(interval)
  }, [portfolioImages.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Top Call Bar */}
      <div className="bg-brand-gold text-brand-dark py-3 px-4 text-center font-bold text-xs sm:text-sm">
        <a href="tel:07469719389" className="hover:underline">
          <span className="hidden sm:inline">📞 CALL NOW: 07469 719389 - NO CALL OUT CHARGE - Your Local Builder in Bedford</span>
          <span className="sm:hidden">📞 CALL: 07469 719389 - NO CALL OUT CHARGE</span>
        </a>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b-2 border-gray-100 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-18 sm:h-24">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                <img 
                  src="/images/logo/logo.png" 
                  alt="Cement Scapes Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-xl sm:text-2xl text-gray-900">Cement Scapes</div>
                <div className="text-sm sm:text-base text-gray-700 font-medium">Mohammed Miah - Your Local Builder</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 sm:space-x-6">
              <Link 
                href="/gallery" 
                className="text-gray-700 hover:text-brand-blue px-4 py-2 text-base sm:text-lg font-semibold transition-colors rounded-lg hover:bg-gray-50"
              >
                Gallery
              </Link>
              <a 
                href="tel:07469719389" 
                className="bg-brand-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-brand-blue/90 transition-all duration-300 hover:shadow-lg"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-20">
        
        {/* Hero */}
        <section className="text-center mb-20 sm:mb-32 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Your Local Builder in
                <span className="block text-brand-blue mt-2">Bedford</span>
              </h2>
              
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="h-px bg-gray-400 w-12"></div>
                <p className="text-xl sm:text-2xl font-medium text-gray-800">Mohammed Miah</p>
                <div className="h-px bg-gray-400 w-12"></div>
              </div>
            </div>
            
            <div className="bg-brand-gold text-brand-dark px-6 sm:px-8 py-3 rounded-2xl font-bold text-lg sm:text-xl inline-block shadow-lg border-2 border-yellow-300">
              ✓ NO CALL OUT CHARGE
            </div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed font-medium">
                Professional building and home improvement services across Bedford and surrounding areas
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Extensions • Renovations • Painting • Flooring • Tiling • Block Paving • Loft Conversions • General Repairs
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-100 p-8 sm:p-10 rounded-3xl shadow-xl inline-block max-w-md mx-auto">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                07469 719389
              </div>
              <a 
                href="tel:07469719389"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block w-full"
              >
                Call for FREE Estimate
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-20 sm:mb-32 bg-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
                Building Services in Bedford
              </h3>
              <p className="text-xl sm:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
                Professional building solutions across Bedford and surrounding areas
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 sm:p-10 hover:shadow-lg hover:border-brand-blue transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <img 
                        src="/images/logo/logo.png" 
                        alt="Cement Scapes Logo" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="mb-20 sm:mb-32 bg-gray-50 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 sm:p-12 shadow-lg">
              <div className="text-center mb-12 sm:mb-16">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
                  Recent Building Projects
                </h3>
                <p className="text-xl sm:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
                  Quality craftsmanship from your trusted Bedford builder
                </p>
              </div>
          
          {isMobile ? (
            /* Mobile Auto-Slider */
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative aspect-square bg-gray-100">
                  <img 
                    src={`/images/portfolio/${portfolioImages[currentImageIndex]}`}
                    alt={`Project ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-md flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {portfolioImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-brand-blue w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              {/* View All Gallery Link */}
              <div className="text-center mt-6">
                <Link 
                  href="/gallery"
                  className="text-brand-blue hover:text-brand-blue/80 font-medium"
                >
                  View All Photos →
                </Link>
              </div>
            </div>
          ) : (
            /* Desktop Grid with Gallery Link */
            <div>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {portfolioImages.slice(0, 8).map((image, index) => (
                  <div key={index} className="aspect-square bg-gray-100 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src={`/images/portfolio/${image}`}
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link 
                  href="/gallery"
                  className="bg-brand-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-blue/90 transition-colors"
                >
                  View All Photos
                </Link>
              </div>
            </div>
          )}
            </div>
          </div>
        </section>

        {/* Google Reviews Promotion */}
        <section className="mb-20 sm:mb-32 bg-gradient-to-br from-blue-50 to-indigo-50 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 sm:p-12 text-center shadow-xl">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight">
                Trusted Bedford Builder
              </h3>
              
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-3xl sm:text-4xl">★</span>
                  ))}
                </div>
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">5.0</span>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-800 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Rated 5 stars on Google by satisfied customers across Bedford. 
                See what our customers say about our professional building services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto">
                <a 
                  href="https://maps.app.goo.gl/sGcGesXXWqeSHU2j9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center space-x-3"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Read Google Reviews</span>
                </a>
                
                <a 
                  href="https://maps.app.goo.gl/sGcGesXXWqeSHU2j9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-brand-blue/90 transition-colors"
                >
                  Leave a Review
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Business Cards */}
        <section className="mb-20 sm:mb-32 bg-white py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 shadow-lg border-2 border-gray-200">
              <div className="text-center mb-12 sm:mb-16">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">Contact Information</h3>
                <p className="text-xl sm:text-2xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
                  Professional credentials and contact details for your trusted Bedford builder
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {visitingCardImages.map((image, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <img 
                      src={`/images/visitingcard/${image}`}
                      alt={`Mohammed Miah Business Card ${index + 1}`}
                      className="w-full h-auto rounded-xl shadow-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Contact */}
        <section className="bg-brand-blue text-white mx-4 sm:mx-6 p-8 sm:p-16 rounded-3xl shadow-2xl mb-20 sm:mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-tight text-white">Contact Your Bedford Builder</h3>
            <p className="text-xl sm:text-2xl mb-12 sm:mb-16 leading-relaxed text-white font-medium">Ready to start your building project in Bedford? Contact Mohammed Miah today for a FREE quote</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="font-bold text-lg mb-3">Call Now</div>
                <a href="tel:07469719389" className="text-brand-gold hover:text-yellow-300 text-2xl font-bold transition-colors block">
                  07469 719389
                </a>
                <div className="text-white/90 mt-2 font-medium">No call out charge</div>
                <div className="text-sm text-white/70 mt-1">Available 7 days a week</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="font-bold text-lg mb-3">Email Us</div>
                <a href="mailto:cementscapes19@outlook.com" className="text-brand-gold hover:text-yellow-300 transition-colors text-lg block">
                  cementscapes19@outlook.com
                </a>
                <div className="text-white/90 mt-2 font-medium">Quick response guaranteed</div>
                <div className="text-sm text-white/70 mt-1">Professional estimates</div>
              </div>
            </div>
            
            <a 
              href="tel:07469719389" 
              className="bg-brand-gold hover:bg-yellow-400 text-brand-dark px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-block"
            >
              Call Now for Free Quote
            </a>
          </div>
        </section>

      </div>

    </main>
  )
}
