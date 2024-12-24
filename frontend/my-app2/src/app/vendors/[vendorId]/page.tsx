// src/app/vendors/[vendorId]/page.tsx
"use client";
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import VendorComponent from '../components/VendorComp';
import { Vendor } from '@/contexts/CartContext';

const VendorsPage: React.FC = () => {
  const { cart } = useCart();

  const vendorsMap: Record<string, Vendor> = {};

  cart.forEach(item => {
    if (item.vendor && item.vendor.id) {
      if (!vendorsMap[item.vendor.id]) {
        vendorsMap[item.vendor.id] = item.vendor;
      }
    }
  });

  const vendors = Object.values(vendorsMap);

  return (
    <div>
      <h1>Vendors</h1>
      {vendors.length > 0 ? (
        vendors.map((vendor) => (
          <VendorComponent key={vendor.id} vendor={vendor} />
        ))
      ) : (
        <p>No vendors available.</p>
      )}
    </div>
  );
};

export default VendorsPage;

