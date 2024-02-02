import React from 'react'; // Import the 'React' module
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/header/layout';
import { AuthProvider } from '../context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </AuthProvider>
  );
}

