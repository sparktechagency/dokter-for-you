import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaApple } from "react-icons/fa";

const AppBanner = () => {
    return (
        <div className=' relative my-20'>
            <div className="w-full container mx-auto md:pb-12 md:pt-8">
                <div className="bg-[#EBF7F8] md:rounded-[2.5rem] rounded-[1rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20  relative">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col md:gap-6 gap-3 z-10">
                        <h2 className="text-2xl md:text-[30px] md:max-w-md  font-semibold text-primary leading-relaxed">
                            Dokter For You App: Organize your health anywhere.
                        </h2>
                        <p className="text-gray-600 text-sm md:text-[16px]  leading-relaxed">
                            The dokter for you app is now available for android and iOS. Thanks to its new, clear, and user-friendly layout, you can navigate effortlessly and find what you're looking for faster.Discreet service, no waiting times and delivery directly to your home. All within 24 hours! Try now.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link href={"https://apps.apple.com/us/app/dokter-for-you/id6749060064"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#1E1E1E] text-white px-5 py-3 rounded-xl hover:bg-black transition-colors min-w-[200px] justify-center sm:justify-start">
                                <FaApple className="text-3xl" />
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-xs font-light">Download on the</span>
                                    <span className="text-xl font-semibold">App Store</span>
                                </div>
                            </Link>

                            <Link href={"https://play.google.com/store/apps/details?id=com.imaginingsDirectSolutions.dokterForYou&pcampaignid=web_share"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#1E1E1E] text-white px-5 py-3 rounded-xl hover:bg-black transition-colors min-w-[200px] justify-center sm:justify-start">
                                <Image src="/playStore.png" alt="Google Play" width={25} height={25} />
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-xs font-light">Download on the</span>
                                    <span className="text-xl font-semibold">Google Play</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Image / Phone Placeholder */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end md:absolute -top-11 right-0 min-h-[300px] lg:min-h-[550px] items-end">
                        <Image src="/mockup.png" alt="App Banner" width={650} height={550} className='w-full h-[350px] md:h-[550px] object-contain ' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppBanner;


