
import React from 'react';
import ClientNavbar from './ClientNavbar';
import { Toaster } from 'sonner';


const layout = ({ children }: { children: React.ReactNode }) => {


    return (
        <div className=' '>
            <Toaster toastOptions={{
                style: {
                    color: 'green',
                },
                className: 'class',
            }} position="top-center" />
            <ClientNavbar >
                {children}
            </ClientNavbar>

        </div>
    );
};

export default layout;