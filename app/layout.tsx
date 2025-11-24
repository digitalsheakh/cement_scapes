import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://cement-scapes-gabm-g6mmrqhk6-sheakhs-projects-69ea6534.vercel.app'),
  title: 'Your Local Builder In Bedford & Surrounding Areas | Mohammed Miah | Cement Scapes',
  description: 'Professional builder in Bedford offering extensions, renovations, painting, block paving, flooring & more. NO CALL OUT CHARGE. Call Mohammed Miah: 07469 719389',
  keywords: 'builder bedford, builder near me, local builder bedford, building services bedford, extensions bedford, renovations bedford, painter bedford, block paving bedford, flooring bedford, loft conversions bedford, mohammed miah builder, cement scapes bedford, bedford builder, building contractor bedford, home improvements bedford, handyman bedford, builder kempston, builder ampthill, builder flitwick, builder biggleswade, builder sandy, builder luton, builder dunstable',
  authors: [{ name: 'Mohammed Miah - Cement Scapes' }],
  creator: 'Mohammed Miah',
  publisher: 'Cement Scapes',
  robots: 'index, follow',
  openGraph: {
    title: 'Your Local Builder In Bedford & Surrounding Areas | Mohammed Miah',
    description: 'Professional builder in Bedford offering extensions, renovations, painting, block paving, flooring & more. NO CALL OUT CHARGE. Call: 07469 719389',
    url: 'https://cement-scapes-gabm-g6mmrqhk6-sheakhs-projects-69ea6534.vercel.app',
    siteName: 'Cement Scapes',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://cement-scapes-gabm-g6mmrqhk6-sheakhs-projects-69ea6534.vercel.app/images/logo/Simple Modern Black Blue Yellow Handyman House Tools Business Card.png',
        width: 1200,
        height: 630,
        alt: 'Cement Scapes - Your Local Builder in Bedford',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Local Builder In Bedford & Surrounding Areas | Mohammed Miah',
    description: 'Professional builder in Bedford offering extensions, renovations, painting, block paving, flooring & more. NO CALL OUT CHARGE.',
    images: ['https://cement-scapes-gabm-g6mmrqhk6-sheakhs-projects-69ea6534.vercel.app/images/logo/Simple Modern Black Blue Yellow Handyman House Tools Business Card.png'],
  },
  alternates: {
    canonical: 'https://cement-scapes-gabm-g6mmrqhk6-sheakhs-projects-69ea6534.vercel.app',
  },
  other: {
    'geo.region': 'GB-BDF',
    'geo.placename': 'Bedford',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.cementscapes.com",
    "name": "Cement Scapes",
    "alternateName": "Mohammed Miah Builder",
    "description": "Professional builder in Bedford offering extensions, renovations, painting, block paving, flooring & more. NO CALL OUT CHARGE.",
    "url": "https://www.cementscapes.com",
    "telephone": "+447469719389",
    "email": "cementscapes19@outlook.com",
    "founder": {
      "@type": "Person",
      "name": "Mohammed Miah"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bedford",
      "addressCountry": "GB"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bedford"
      },
      {
        "@type": "State", 
        "name": "Bedfordshire"
      }
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Bedford and surrounding areas"
    },
    "priceRange": "££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": "Cash, Bank Transfer",
    "openingHours": "Mo-Su 08:00-18:00",
    "image": "https://www.cementscapes.com/images/logo/Simple Modern Black Blue Yellow Handyman House Tools Business Card.png",
    "logo": "https://www.cementscapes.com/images/logo/Simple Modern Black Blue Yellow Handyman House Tools Business Card.png",
    "sameAs": [
      "https://maps.app.goo.gl/sGcGesXXWqeSHU2j9"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Building Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Extensions & Renovations",
            "description": "Professional home extensions and complete renovations in Bedford"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Interior & Exterior Painting",
            "description": "Professional painting services for homes and businesses in Bedford"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Block Paving & Driveways",
            "description": "Quality block paving and driveway installation in Bedford"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flooring, Tiling & Carpeting", 
            "description": "Professional flooring, tiling and carpeting services in Bedford"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Loft Conversions",
            "description": "Expert loft conversion services to maximize your living space in Bedford"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "15",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
