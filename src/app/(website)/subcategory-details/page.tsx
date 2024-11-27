import SubCategoryDetails from '@/components/ui/Website/SubCategoryDetails/SubCategoryDetails';
import React, { Suspense } from 'react';

const SubCategoryDetailsPage = () => {
    return (
        <div> 
              <Suspense fallback={<div>Loading...</div>}>
            <SubCategoryDetails />
    </Suspense>
        </div>
    );
};

export default SubCategoryDetailsPage;