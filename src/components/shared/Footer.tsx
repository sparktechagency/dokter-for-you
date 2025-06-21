/* eslint-disable @next/next/no-img-element */
import React from 'react';
import fb from "@/assests/fb.png"
import insta from "@/assests/insta.png"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => { 
  const imagePath = [ "/visa.png", "/mastercard.png", "/pay.png", "/ideal.png"];
  return (
    <footer className="mt-auto">
      <div className="container mx-auto  py-[49px]">

        <Link href="/home" className="flex items-center gap-2 mb-4">
          <img src="/logo.png" alt="Dokter For You" className="h-[69px]" />

        </Link>
        <div className=" flex lg:flex-row flex-col  items-center gap-3  w-full ">

          <div className="lg:w-1/3 w-full">

            <p className="text-[#999999] lg:w-[450px] w-full">
              When it comes to your health, we believe you have the right to decide what to do with your body. That’s why we offer you the opportunity to consult a licensed and registered physician and receive your prescribed medication at home without leaving your home. All within 24 hours.
            </p>

          </div>


          <div className="lg:w-1/4 w-full lg:ms-48 flex flex-col lg:gap-[30px] gap-3">
            <Link href="/about" className="text-[#6B6B6B] text-[16px] hover:underline">
              About
            </Link>
            <Link href="/blogs" className="text-[#6B6B6B] text-[16px] hover:underline">
              Blogs
            </Link>
            <Link href="/support" className="text-[#6B6B6B] text-[16px] hover:underline">
              Support
            </Link>
          </div>



          <div className="lg:w-1/4 w-full flex flex-col lg:gap-[30px] gap-3">
            <Link href="/faq" className="text-[#6B6B6B] text-[16px] hover:underline">
              FAQ
            </Link>

            <Link href="/user-agreement" className="text-[#6B6B6B] text-[16px] hover:underline">
              User Agreement
            </Link>

            <Link href="/terms" className="text-[#6B6B6B] text-[16px] hover:underline">
              Terms & Conditions
            </Link>

          </div>


          <div className="lg:w-1/4 w-full">
            <p className="mb-4 text-[#6B6B6B] text-[16px] font-semibold">Follow Us</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/DokterForYou" target="_blank" className="text-blue-600 hover:text-blue-700">
                <Image src={fb} alt="Facebook" width={40} height={40} />
              </a>
              <a href="https://www.instagram.com/dokterforyou?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-pink-600 hover:text-pink-700">
                <Image src={insta} alt="Instagram" width={40} height={40} />
              </a>

            </div> 

            <div className='flex gap-4 mt-4'> 
{
  imagePath.map((image, index) => (
    <img key={index} src={image} alt={`Image ${index}`} className="h-12 w-12 object-contain" />
  ))
}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900 text-white py-4 text-center text-sm">
        <p>© Copyright  {new Date().getFullYear()}  Dokter For You</p>
      </div>
    </footer>
  );
};

export default Footer;