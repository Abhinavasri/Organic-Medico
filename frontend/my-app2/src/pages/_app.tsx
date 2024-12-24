// _app.tsx
// /pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { CartProvider } from '@/contexts/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;



