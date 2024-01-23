import Link from 'next/link';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      <main style={{ marginTop: '6rem'}}>
        {children}
      </main>
    </div>
  )
}

function Header() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem',
        background: '#1e3a8a', // Dark blue background color
        color: '#fff', // White text color
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <Link href="/">
            <div
              style={{
                backgroundColor: '#3f51b5', // Blue box background color
                color: '#fff', // White text color
                padding: '0.5rem 2rem', // Bigger width
              }}
            >
              Home
            </div>
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link href="/rooms">
          <div
            style={{
              backgroundColor: '#3f51b5', // Blue box background color
              color: '#fff', // White text color
              padding: '0.5rem 2rem', // Bigger width
              marginRight: '1rem',
              width: '200px', // Increase width
              display: 'flex', // Add this
              justifyContent: 'center', // Add this
              alignItems: 'center', // Add this
            }}
          >
            Rooms
          </div>
        </Link>
        <Link href="/students">
          <div
            style={{
              backgroundColor: '#3f51b5', // Blue box background color
              color: '#fff', // White text color
              padding: '0.5rem 2rem', // Bigger width
              width: '200px', // Increase width
              display: 'flex', // Add this
              justifyContent: 'center', // Add this
              alignItems: 'center', // Add this
            }}
          >
            Students
          </div>
        </Link>
      </div>
      <div>
        <div
          style={{
            backgroundColor: '#3f51b5', // Blue login box background color
            color: '#fff', // White text color
            padding: '0.5rem 1rem',
            marginRight: '1rem',
          }}
        >
          Log In
        </div>
      </div>
    </header>
  );
}
