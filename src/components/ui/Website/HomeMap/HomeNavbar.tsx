import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeNavbar = () => {
    return (
        <>
        {/* Navbar */}
        <div className="fixed top-0 w-full bg-white  z-50">
          <div className="container mx-auto flex items-center justify-between h-[96px]">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  height={100}
                  width={200}
                  className="mr-2"
                />
              </Link>
            </div>
  
        
          </div>
        </div>
  
       
        <div className="pt-[96px]">
         
        </div>
      </>
    );
};

export default HomeNavbar;