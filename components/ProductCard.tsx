'use client';

import React from 'react';
import type { Product } from '@/data/products';
import { getWhatsAppUrl } from '@/lib/constants';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const getMachineIcon = (machineType: string) => {
    switch (machineType) {
      case 'offset': return '🖨️';
      case 'giling': return '⚙️';
      case 'open': return '🔧';
      default: return '🏭';
    }
  };

  return (
    <div className="card group">
      {/* Card Header with Gradient */}
      <div className="bg-gradient-to-br from-accent to-accent-dark p-6 text-white">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <span className="badge-jis bg-white text-accent">
            {product.hardness}
          </span>
        </div>
        <p className="text-accent-light text-sm font-medium">{product.usage}</p>
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Material */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Material
          </h4>
          <p className="text-gray-900 font-medium">{product.material}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {product.materialDetails.map((detail, idx) => (
              <span 
                key={idx}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {detail}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        {product.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Machine Types */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Jenis Mesin
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.machineTypes.map((machine) => (
              <span 
                key={machine}
                className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent font-medium px-3 py-1 rounded-full"
              >
                <span>{getMachineIcon(machine)}</span>
                <span className="capitalize">{machine}</span>
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={getWhatsAppUrl(`Halo, saya tertarik dengan produk ${product.name} (${product.hardness})`)}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
        >
          Tanya Spesifikasi
        </a>
      </div>
    </div>
  );
}
