
import React from 'react'; 
import ClientNavbar from './ClientNavbar';

const layout = ({children}: {children: React.ReactNode}) => { 
   
    
    return (
        <div className=' '> 
        <ClientNavbar >
               {children}
        </ClientNavbar>
         
       </div>
    );
};

export default layout;