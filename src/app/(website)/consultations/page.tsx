import AllConsultations from '@/components/ui/Website/AllConsultations/AllConsultations';
import React, { Suspense } from 'react';

const ConsultationsPage = () => {
    return (
        <div> 
             <Suspense fallback={<div>Loading...</div>}> 
         <AllConsultations />   
             </Suspense>
        </div>
    );
};

export default ConsultationsPage;