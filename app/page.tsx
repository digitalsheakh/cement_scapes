'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const services = [
    "Extensions & Renovations",
    "Interior & Exterior Painting", 
    "Block Paving & Driveways",
    "Flooring, Tiling & Carpeting",
    "Loft Conversions",
    "General Building & Household Repairs",
    "And Much More"
  ]

  const portfolioImages = [
    "WhatsApp Image 2025-11-23 at 00.07.41 (1).jpeg",
    "WhatsApp Image 2025-11-23 at 00.07.41.jpeg",
    "WhatsApp Image 2025-11-23 at 00.07.42 (1).jpeg",
    "WhatsApp Image 2025-11-23 at 00.07.42 (2).jpeg",
    "WhatsApp Image 2025-11-23 at 00.07.42.jpeg",
    "WhatsApp Image 2025-11-23 at 00.16.39.jpeg",
    "WhatsApp Image 2025-11-23 at 00.16.40.jpeg",
    "WhatsApp Image 2025-11-23 at 00.16.41 (1).jpeg",
    "WhatsApp Image 2025-11-23 at 00.16.41.jpeg",
    "WhatsApp Image 2025-11-23 at 00.18.04 (1).jpeg",
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

      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <img 
                src="/images/logo/Simple Modern Black Blue Yellow Handyman House Tools Business Card.png" 
                alt="Cement Scapes - Builder in Bedford Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-brand-dark">Cement Scapes</h1>
                <p className="text-xs sm:text-sm text-gray-600">Mohammed Miah - Your Local Builder in Bedford</p>
              </div>
            </div>
            <a 
              href="tel:07469719389" 
              className="bg-brand-blue text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-brand-blue/90 transition-colors shadow-md text-sm sm:text-base"
            >
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20 pb-20">
        
        {/* Hero */}
        <section className="text-center mb-16 sm:mb-24 max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4 sm:mb-6 leading-tight">
            Your Local Builder in Bedford
            <span className="block text-brand-blue mt-2">Mohammed Miah</span>
          </h2>
          
          <div className="bg-brand-gold text-brand-dark px-4 sm:px-6 py-2 rounded-lg font-bold text-base sm:text-lg mb-6 sm:mb-8 inline-block">
            NO CALL OUT CHARGE
          </div>
          
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Professional builder in Bedford and surrounding areas offering reliable building and home improvement services. 
              From extensions and renovations to painting, flooring, tiling, block paving, 
              loft conversions and general repairs.
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Serving Bedford and surrounding areas. 
              Always delivering quality results on every job with competitive prices and excellent customer service.
            </p>
          </div>
          
          <div className="bg-brand-blue text-white p-6 sm:p-8 rounded-2xl inline-block shadow-lg">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">07469 719389</div>
            <a 
              href="tel:07469719389"
              className="bg-brand-gold text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors inline-block"
            >
              Call for FREE estimate - Builder in Bedford
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16 sm:mb-24 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-3 sm:mb-4">Building Services in Bedford</h3>
            <p className="text-base sm:text-lg text-gray-600">Professional building solutions across Bedford and surrounding areas</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-1 h-6 sm:h-8 bg-brand-gold rounded-full flex-shrink-0"></div>
                  <span className="text-base sm:text-lg text-gray-800">{service} in Bedford</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section className="mb-16 sm:mb-24 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-3 sm:mb-4">Recent Building Projects in Bedford</h3>
            <p className="text-base sm:text-lg text-gray-600">Quality craftsmanship from your trusted Bedford builder</p>
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
        </section>

        {/* Google Reviews Promotion */}
        <section className="mb-16 sm:mb-24 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-12 text-center shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4 sm:mb-6">Trusted Bedford Builder</h3>
            
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-2xl sm:text-3xl">★</span>
                ))}
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-800">5.0</span>
            </div>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Rated 5 stars on Google by satisfied customers across Bedford. 
              See what our customers say about our professional building services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
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
        </section>

        {/* Business Cards */}
        <section className="mb-16 sm:mb-24 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-3 sm:mb-4">Contact Information</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {visitingCardImages.map((image, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={`/images/visitingcard/${image}`}
                  alt={`Mohammed Miah Business Card ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Map */}
        <section className="mb-16 sm:mb-24 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-3 sm:mb-4">Find Us</h3>
            <p className="text-base sm:text-lg text-gray-600">Located in Bedford</p>
          </div>
          
          <div className="bg-gray-100 h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.123456789!2d-0.4567890!3d52.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s67%20Gloucester%20Rd%2C%20Bedford%20MK42%209TP%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cement Scapes Location - 67 Gloucester Road, Bedford"
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <a 
              href="https://maps.app.goo.gl/sGcGesXXWqeSHU2j9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-blue hover:text-brand-blue/80 font-medium transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-brand-blue text-white mx-4 sm:mx-6 p-6 sm:p-12 rounded-lg shadow-lg mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Contact Your Bedford Builder</h3>
            <p className="text-base sm:text-lg mb-8 sm:mb-12">Ready to start your building project in Bedford? Contact Mohammed Miah today for a FREE quote</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="font-semibold mb-2">Phone</div>
                <a href="tel:07469719389" className="text-brand-gold hover:text-yellow-300 text-xl font-bold transition-colors">
                  07469 719389
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="font-semibold mb-2">Email</div>
                <a href="mailto:cementscapes19@outlook.com" className="text-brand-gold hover:text-yellow-300 transition-colors">
                  cementscapes19@outlook.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="font-semibold mb-2">Address</div>
                <div>67 Gloucester Road<br />Bedford MK42 9TP</div>
              </div>
            </div>
            
            <a 
              href="tel:07469719389" 
              className="bg-brand-gold text-brand-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
            >
              Call Now for Free Quote
            </a>
          </div>
        </section>

      </div>

    </main>
  )
}
