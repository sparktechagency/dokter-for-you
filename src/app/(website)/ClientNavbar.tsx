"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import Cookies from "js-cookie";
import Navbar from '@/components/shared/Navbar';
import { Poppins } from 'next/font/google';
import Footer from '@/components/shared/Footer';
import Subscribe from '@/components/ui/Website/home/Subscribar';
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

export   const country = Cookies.get("country"); 

const ClientNavbar = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
  

    return (
        <div  >
            {
                pathname !== "/" && (
                    <Navbar />
                )
            }

            <div className={`font-sans  ${poppins.className}`}>
                {children}
            </div>

            {
                pathname !== "/" && (<div>
                    <Subscribe />
                    <Footer />
                </div>)
            }

        </div>
    );
};

export default ClientNavbar;