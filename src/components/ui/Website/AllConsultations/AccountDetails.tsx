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

const userData = {
  firstName: "Asadujjaman",
  lastName: "Mahfuz",
  dateOfBirth: "12 nov, 2024",
  gender: "Male",
  email: "Asadujjaman@gmail.com",
  contactNumber: "+09999999999999999"
};

const AccountDetails = () => {
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