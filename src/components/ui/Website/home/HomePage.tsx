import React from 'react';
import Banner from './Banner';
import BannerCards from './BannerCards';
import WhenTo from './WhenTo';
import LatestArticals from './LatestArticals';
import PopularFAQ from './PopularFAQ';
import PatientsReview from './PatientsReview';



const HomePage = () => {
    return (
        <div>
             <Banner /> 
             <BannerCards />  
            
             <WhenTo />
    <LatestArticals/>   
    <PopularFAQ /> 
    <PatientsReview /> 
   
        </div>
    );
};

export default HomePage;