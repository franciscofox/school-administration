import React from 'react'; // Import the 'React' module
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/header/layout';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []); 

  return (
  <Layout isLoggedIn={isLoggedIn}>
    <Component {...pageProps} />
  </Layout>
  );
}

