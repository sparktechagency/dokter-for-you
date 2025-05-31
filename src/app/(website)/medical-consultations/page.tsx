import MedicalConsultations from '@/components/europe/MedicalConsultations/MedicalConsultations';
import React, { Suspense } from 'react';

const MedicalConsultationsPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <MedicalConsultations />
            </Suspense>
        </div>
    );
};

export default MedicalConsultationsPage;