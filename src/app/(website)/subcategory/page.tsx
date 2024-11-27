import SubCategory from '@/components/ui/Website/SubCategory/SubCategory';
import React, { Suspense } from 'react';

const SubCategoryPage = () => {
    return (
        <div> 
                          <Suspense fallback={<div>Loading...</div>}>
                          <SubCategory />
    </Suspense>
           
        </div>
    );
};

export default SubCategoryPage;