import Link from 'next/link';
import React from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Layout({children}) {
  const { isSignedIn } = useAuth();

  return (
    <div>
      <Header isSignedIn={isSignedIn} />
      <main style={{ marginTop: '6rem'}}>
        {children}
      </main>
    </div>
  )
}

function Header({isSignedIn}) {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem',
        background: '#1e3a8a',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <Link href="/">
            <div
              style={{
                backgroundColor: '#3f51b5',
                color: '#fff', 
                padding: '0.5rem 2rem',
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
              backgroundColor: '#3f51b5', 
              color: '#fff', 
              padding: '0.5rem 2rem',
              marginRight: '1rem',
              width: '200px', 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center', 
            }}
          >
            Rooms
          </div>
        </Link>
        <Link href="/students">
          <div
            style={{
              backgroundColor: '#3f51b5',
              color: '#fff', 
              padding: '0.5rem 2rem',
              width: '200px', 
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center', 
            }}
          >
            Students
          </div>
        </Link>
      </div>
      <div>
        <Link href={isSignedIn ? "/logout" : "/login"}>
          <div
            style={{
              backgroundColor: '#3f51b5', 
              color: '#fff', 
              padding: '0.5rem 1rem',
              marginRight: '1rem',
            }}
          >
            {isSignedIn ? 'Log Out' : 'Log In'}
          </div>
        </Link>
      </div>
    </header>
  );
}
