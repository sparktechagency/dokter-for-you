import React from 'react'; 
import { Poppins } from 'next/font/google'; 
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] }); 

interface IButtonProps {
  name?: React.ReactNode;
  children?: React.ReactNode;
  className: string;
}

const Title: React.FC<IButtonProps> = ({ children, className }) => {
  return <div  className={` text-primary  font-[500] lg:text-[32px] text-[24px] ${poppins.className} ${className}`} >
    {children}
  </div>

};

export default Title;