'use client';

import React from 'react';
import { materialInfo } from '@/data/products';

export default function QualityAssurance() {
  const features = [
    {
      icon: '🛠️',
      title: '100% Handmade',
      description: 'Setiap roll dikerjakan dengan tangan oleh craftsman berpengalaman untuk menjamin akurasi yang tidak bisa dicapai mesin otomatis massal.',
      highlight: 'Presisi Tanpa Kompromi'
    },
    {
      icon: '🌍',
      title: 'Material Import Premium',
      description: 'Menggunakan karet berkualitas tinggi dari Jepang dan Korea yang terbukti tahan hingga bertahun-tahun penggunaan.',
      highlight: 'JSR, KUMHO, Premium Grade'
    },
    {
      icon: '⚡',
      title: 'Durabilitas Terbukti',
      description: 'Dengan pengalaman 23+ tahun, produk kami telah dipercaya oleh ratusan perusahaan percetakan di seluruh Indonesia.',
      highlight: 'Awet & Tahan Lama'
    },
    {
      icon: '🎯',
      title: 'Custom Specification',
      description: 'Kami dapat menyesuaikan spesifikasi roll sesuai kebutuhan mesin dan aplikasi spesifik Anda.',
      highlight: 'Solusi Tepat Sasaran'
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Mengapa <span className="text-accent">Janti Jaya</span>?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Kualitas authentic yang membedakan kami dari kompetitor
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <div className="inline-block bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {feature.highlight}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Material Details */}
        <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 sm:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Material Import <span className="text-accent">Premium</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(materialInfo).map(([key, info]) => (
              <div key={key} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3 text-accent">{info.name}</h4>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Variants:</p>
                  <div className="flex flex-wrap gap-2">
                    {info.variants.map((variant, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-accent/20 text-accent px-2 py-1 rounded"
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-2">Benefits:</p>
                  <ul className="space-y-2">
                    {info.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
