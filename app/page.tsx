'use client';

import React, { useState } from 'react';
import Head from 'next/head';

const BirthdayPage = () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowButton(false);
    setShowMessage(true);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      backgroundColor: '#fce4ec',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <Head>
        <title>Happy Birthday!</title>
        <meta name="description" content="A special birthday wish for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '100%'
      }}>
        {showButton && (
          <div>
            <h1 style={{ color: '#d81b60', fontSize: '3em', marginBottom: '10px' }}>
              Happy Birthday! 🎉
            </h1>
            <p style={{ color: '#4a4a4a', fontSize: '1.5em', marginBottom: '30px' }}>
              mett ulang tahunn galangg, ini ada pesan spesial untukmu!
            </p>
            <button
              onClick={handleButtonClick}
              style={{
                backgroundColor: '#ff8a80',
                color: 'white',
                padding: '15px 30px',
                fontSize: '1.2em',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e57373'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff8a80'}
            >
              Lihat Pesan
            </button>
          </div>
        )}

        {showMessage && (
          <div>
            <h1 style={{ color: '#d81b60', fontSize: '3em', marginBottom: '10px' }}>
              Selamat Ulang Tahun! 🎂
            </h1>
            <p style={{ color: '#4a4a4a', fontSize: '1.2em', lineHeight: '1.6' }}>
            
Semoga di tahun ini kamu menemukan seseorang yang bisa membuatmu tersenyum setiap hari, yang bisa melengkapi hidupmu, dan yang tidak akan pernah menyakitimu. Kamu pantas mendapatkan kebahagiaan yang tulus.

Terima kasih untuk semuanya."

</p>
            <p style={{ color: '#888', marginTop: '30px' }}>
              - [vidicanss]
            </p>
            <p style={{ fontSize: '3em', margin: '20px' }}>
                ❤️
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BirthdayPage;