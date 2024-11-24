
import React from 'react'; 
import { Poppins } from 'next/font/google'; 
import Navbar from '@/components/shared/Navbar';
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const layout = ({children}: {children: React.ReactNode}) => { 
   
    
    return (
        <div className=' '> 
       <Navbar /> 
       <div className={` ${poppins.className}  h-full`}>
                {children}
       </div> 
    
    <div>

    </div>
          
        </div>
    );
};

export default layout;