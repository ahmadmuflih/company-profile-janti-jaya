'use client';

import React, { useState } from 'react';
import { products, type MachineType } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductCategory() {
  const [selectedMachine, setSelectedMachine] = useState<MachineType | 'all'>('all');

  const filteredProducts = selectedMachine === 'all' 
    ? products 
    : products.filter(p => p.machineTypes.includes(selectedMachine));

  const machineTypes = [
    { value: 'all' as const, label: 'Semua Mesin', icon: '🏭' },
    { value: 'offset' as MachineType, label: 'Mesin Offset', icon: '🖨️' },
    { value: 'giling' as MachineType, label: 'Mesin Giling', icon: '⚙️' },
    { value: 'open' as MachineType, label: 'Mesin Open', icon: '🔧' },
  ];

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Katalog <span className="text-accent">Produk</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pilih berdasarkan jenis mesin yang Anda gunakan
          </p>
        </div>

        {/* Machine Type Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {machineTypes.map((machine) => (
            <button
              key={machine.value}
              onClick={() => setSelectedMachine(machine.value)}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                flex items-center gap-2 shadow-md hover:shadow-lg
                ${selectedMachine === machine.value 
                  ? 'bg-accent text-white scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              <span className="text-xl">{machine.icon}</span>
              <span>{machine.label}</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Result count */}
        <div className="text-center text-gray-600">
          Menampilkan <span className="font-bold text-accent">{filteredProducts.length}</span> produk
        </div>
      </div>
    </section>
  );
}
