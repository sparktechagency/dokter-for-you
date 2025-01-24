import ProfileHome from '@/components/ui/UserProfile/ProfileHome/ProfileHome';
import React, { Suspense } from 'react';

const ProfilePage = () => {
    return (
        <div>
             <Suspense fallback={<div>Loading...</div>}>
                <ProfileHome />
            </Suspense>
        </div>
    );
};

export default ProfilePage;