"use client"
import React from 'react';
import Banner from './Banner';
import BannerCards from './BannerCards';
import WhenTo from './WhenTo';
import LatestArticals from './LatestArticals';
import PopularFAQ from './PopularFAQ';
import AffiliatedDoctors from './AffiliatedDoctors';
import { useCountry } from '@/app/(website)/CountryContext';
import PatientsReview from './PatientsReview';
import AppBanner from './AppBanner';



const HomePage = () => {
    const { country } = useCountry();

    return (
        <div>
            <Banner />
            <BannerCards />
            <WhenTo />
            {
                country !== "Netherlands" ? <AffiliatedDoctors /> : ""
            }
            <AppBanner />
            <LatestArticals />
            <PopularFAQ />

            <PatientsReview />

        </div>
    );
};

export default HomePage;