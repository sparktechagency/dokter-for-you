"use client"
import React from 'react';
import Banner from './Banner';
import BannerCards from './BannerCards';
import WhenTo from './WhenTo';
import LatestArticals from './LatestArticals';
import PopularFAQ from './PopularFAQ';
import PatientsReview from './PatientsReview';
import AffiliatedDoctors from './AffiliatedDoctors';
import { useCountry } from '@/app/(website)/CountryContext';



const HomePage = () => { 
 const { country } = useCountry(); 
    return (
        <div>
            <Banner />
            <BannerCards />
            <WhenTo />   
            {
                country !== "Netherlands" ?   <AffiliatedDoctors /> : ""
            }
          
            <LatestArticals />
            <PopularFAQ />
            <PatientsReview />

        </div>
    );
};

export default HomePage;