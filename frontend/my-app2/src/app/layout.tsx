"use client";

import React from 'react';
import { CartProvider } from '@/contexts/CartContext';  // Import your CartProvider

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
+    <body>
    <CartProvider>
      <main>{children}</main>
    </CartProvider>
    </body>
    </html>
  );
};

export default RootLayout;

