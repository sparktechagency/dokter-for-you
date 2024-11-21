
import Navbar from '@/components/shared/Navbar';
import React from 'react'; 
import { Poppins } from 'next/font/google'; 
import Footer from '@/components/shared/Footer';
import Subscribe from '@/components/ui/Website/home/Subscribar';
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const layout = ({children}: {children: React.ReactNode}) => { 
   
    
    return (
        <div className=' '> 
       <Navbar /> 
       <div className={` ${poppins.className} `}>
                {children}
       </div> 
    
    <div>
<Subscribe />
      <Footer/>
    </div>
          
        </div>
    );
};

export default layout;