import { useGetProfileQuery } from '@/redux/features/profile/getProfileSlice';
import React from 'react';

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow = ({ label, value }: InfoRowProps) => { 


  return (
    <div className="flex items-center gap-2 py-1">
      <div className=" text-gray-600 flex items-center gap-1 text-[16px]">
        <span>{label}</span>
        <span>:</span>
      </div>
      <div className="flex-1">
        <span>{value}</span>
      </div>
    </div>
  );
}



const AccountDetails = ({setUserId}: {setUserId: React.Dispatch<React.SetStateAction<string|null>>}) => { 
  const {data} = useGetProfileQuery(undefined) 
  const profileData = data?.data     

  setUserId(profileData?._id)

  const userData = {
    firstName: profileData?.firstName,
    lastName: profileData?.lastName ,
    dateOfBirth: profileData?.dateOfBirth ? profileData?.dateOfBirth : <p className='text-red-700'>Kindly update your date of birth in your profile.</p>,
    gender: profileData?.gender,
    email: profileData?.email,
    contactNumber: profileData?.contact
  }; 

  return (

    
      <div className="w-full  ">
        <div className="space-y-4">
          <InfoRow label="First Name" value={userData.firstName} />
          <InfoRow label="Last Name" value={userData.lastName} />
          <InfoRow label="Date of birth" value={userData.dateOfBirth} />
          <InfoRow label="Gender" value={userData.gender} />
          <InfoRow label="Email" value={userData.email} />
          <InfoRow label="Contact Number" value={userData.contactNumber} />
        </div>
      </div>
  
   
  );
}

export default AccountDetails;