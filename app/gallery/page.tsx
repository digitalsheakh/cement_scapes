'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-24">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-4 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm">
                <img 
                  src="/images/logo/logo.png" 
                  alt="Cement Scapes Logo" 
                  className="w-6 h-6 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-base sm:text-2xl text-gray-900 leading-tight">Cement Scapes</div>
                <div className="text-xs sm:text-base text-gray-700 font-medium leading-tight">
                  <span className="sm:hidden">Your Local Builder</span>
                  <span className="hidden sm:inline">Mohammed Miah - Your Local Builder</span>
                </div>
              </div>
            </Link>
            
            <div className="flex items-center space-x-2 sm:space-x-6 flex-shrink-0">
              <Link 
                href="/" 
                className="hidden sm:block text-gray-700 hover:text-brand-blue px-2 sm:px-4 py-2 text-sm sm:text-lg font-semibold transition-colors rounded-lg hover:bg-gray-50"
              >
                Home
              </Link>
              <a 
                href="tel:07469719389" 
                className="bg-brand-blue text-white px-3 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-lg font-bold hover:bg-brand-blue/90 transition-all duration-300 hover:shadow-lg"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Project Gallery</h2>
          <p className="text-xl text-gray-600">Explore our completed building projects</p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square bg-gray-100 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={`/images/portfolio/${image}`}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 bg-gray-50 p-6 sm:p-12 rounded-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-3 sm:mb-4">Got Your Next Job for Me?</h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">I'm ready to bring the same quality to your project. Call Mohammed Miah today!</p>
          <a 
            href="tel:07469719389" 
            className="bg-brand-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-brand-blue/90 transition-colors"
          >
            Call Now: 07469 719389
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={`/images/portfolio/${selectedImage}`}
              alt="Project Detail"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
