/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const PaymentFailed = () => {
  const [countdown, setCountdown] = useState<number>(3);
  const deepLinkURL = 'paymentFailed://payment/failed';
  const fallbackURL = 'https://www.dokterforyou.com/';
  const router = useRouter();

  // Inline styles (unchanged to preserve design)
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f8ff',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      margin: '0',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
 failure: {
      fontSize: '1.5rem',
      color: '#dc3545',
      marginBottom: '1rem',
    },
    button: {
      fontSize: '1rem',
      color: '#ffffff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '8px',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      marginBottom: '1rem',
    },
    timer: {
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#555',
    },
  };

  // Check if the environment is browser to avoid SSR issues
  const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); 

    const getPlatform = (): 'iOS' | 'Android' | 'unknown' => {
    if (typeof window === 'undefined') return 'unknown';
    const userAgent = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(userAgent)) return 'iOS';
    if (/Android/i.test(userAgent)) return 'Android';
    return 'unknown';
  };

  const platform = getPlatform();
  const isMobileVersion = platform === 'iOS' || platform === 'Android'; 
  console.log(isMobileVersion);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (isMobile) {
            openAppWithFallback();
          } else {
            router.push(fallbackURL);
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router, isMobile ]);

  const openAppWithFallback = () => {
    try {
      const start = Date.now();
      window.location.href = deepLinkURL;

      setTimeout(() => {
        if (Date.now() - start < 1500) {
          router.push(fallbackURL);
        }
      }, 1000);
    } catch (error) {
      console.error('Error opening app:', error);
      router.push(fallbackURL);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card as React.CSSProperties}>
        <div style={styles.failure}>❌ Payment Failed!</div>
        <button onClick={openAppWithFallback} style={styles.button}>
          Open in App
        </button>
        <div style={styles.timer}>
          Redirecting in <span>{countdown}</span> seconds...
        </div>
      </div>
    </div>
  );
};

// Dynamic import to ensure client-side rendering
export default PaymentFailed ;