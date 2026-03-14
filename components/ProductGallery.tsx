'use client';

import React from 'react';
import Image from 'next/image';
import { getWhatsAppUrl } from '@/lib/constants';

export default function ProductGallery() {
  const images = [
    {
      src: '/products/product-1.jpg',
      alt: 'Roll Karet Janti Jaya',
      title: 'Handmade Quality',
    },
    {
      src: '/products/product-2.jpg',
      alt: 'Roll Karet Janti Jaya',
      title: 'Precision Craftsmanship',
    },
    {
      src: '/products/product-3.jpg',
      alt: 'Roll Karet Janti Jaya',
      title: 'Premium Materials',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-accent font-semibold text-sm">Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Produk <span className="text-accent">Kami</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Lihat hasil karya handmade kami dengan presisi tinggi dan material berkualitas premium
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-2xl hover:shadow-accent/20 transition-all duration-500"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                    <div className="flex items-center gap-2 text-accent text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>100% Handmade</span>
                    </div>
                  </div>
                </div>

                {/* Border Accent */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 transition-all duration-500 rounded-xl"></div>
              </div>

              {/* Number Badge */}
              <div className="absolute top-4 right-4 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Tertarik dengan produk kami? Konsultasikan kebutuhan Anda
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/50"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
