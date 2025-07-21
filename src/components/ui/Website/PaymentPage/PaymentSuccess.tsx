/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const PaymentSuccess = () => {
  const [countdown, setCountdown] = useState<number>(5);
  const deepLinkURL = 'paymentSuccess://payment/success';
  const fallbackURL = 'https://yourwebsite.com/download-app';
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
      width: "80vh"
    },
    success: {
      fontSize: '1.5rem',
      color: '#28a745',
      marginBottom: '1rem',
    },
    button: {
      fontSize: '1rem',
      color: '#ffffff',
      backgroundColor: '#0A2369',
      border: 'none',
      borderRadius: '8px',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      marginBottom: '1rem',
    },
    timer: {
      marginTop: '0.5rem',
      fontSize: '1.1rem',
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
    <div style={styles.container} >
      <div style={styles.card as React.CSSProperties}>
        <div style={styles.success}>✅ Payment Successful!</div>  
        <div className='w-full flex items-center justify-center pb-6'> 

        <div className='text-[16px] text-gray-500  text-center'>Dear customer, we thank you very much for your trust and payment. Your answers are sent to the doctor. Based on this, the doctor will decide what the best treatment is for you. If this results in a prescription, you will receive a message from the pharmacy that a prescription is ready for you with the next steps. If you have any questions in the meantime, please do not hesitate to ask us (support@dokterforyou.com). Kind regards, team Doctor For You </div>
        </div>
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
export default PaymentSuccess ;