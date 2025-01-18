/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import ProfileDetails from './Tabs/ProfileDetails';
import Consultation from './Tabs/Consultation';
import DigitalPrescriptionDetails from './Tabs/DigitalPrescriptionDetails';
import DigitalPrescriptionOrder from './Tabs/DigitalPrescriptionOrder';
import ChangePassword from './Tabs/ChangePassword';
import { useConsultationSuccessMutation, useEditProfileMutation, useGetProfileQuery } from '@/redux/features/profile/getProfileSlice';
import Swal from 'sweetalert2';
import { imageUrl } from '@/redux/base/baseApi';
import { useSearchParams } from 'next/navigation';


const tabs = [
  { id: "1", label: "Profile Details", component: <ProfileDetails /> },
  { id: "2", label: "Dr. Consultation", component: <Consultation /> },
  { id: "3", label: "Digital Prescription Details", component: <DigitalPrescriptionDetails /> },
  { id: "4", label: "Digital Prescription With Order", component: <DigitalPrescriptionOrder /> },
  { id: "5", label: "Change Password", component: <ChangePassword /> },
];

const ProfileHome = () => {
  const { data } = useGetProfileQuery(undefined)
  const [editProfile] = useEditProfileMutation()
  const userData = data?.data 
  const [imgURL, setImgURL] = useState("");
  const [activeTab, setActiveTab] = useState("1");   
  const searchParams = useSearchParams(); 
  const [consultationSuccess] = useConsultationSuccessMutation()
  const sessionId = searchParams.get('session_id');
  const id = searchParams.get('id');   

  useEffect(() => {
    if (id && sessionId) {
      const data = { id, session_id: sessionId };
      consultationSuccess(data).then((res) => {  
        console.log(res);
      });
    }
  }, [id, sessionId , consultationSuccess]);

  useEffect(() => {
    setImgURL(userData?.profile?.startsWith("https")? userData?.profile : `${imageUrl}${userData?.profile}`);
  }, [userData]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  const onChange = async (e: any) => {
    const file = e.target.files[0]; 
   
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImgURL(imgUrl);

      const formData = new FormData();
      formData.append("profile", file);

      await editProfile(formData).then((res) => { 
        //console.log(res);
        if (res?.data?.success) {
          Swal.fire({
            text: res?.data?.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          })
        } else {
          Swal.fire({
            title: "Oops",
            text: res?.data?.message,
            icon: "error",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      })
    }
  };

  return (
    <div className='bg-[#FBFBFB] min-h-[calc(90vh-10px)]'>

      <div className='bg-gradient-to-b from-[#FFF8F8] to-[#F3F6FF] pb-[20px]'>

        <div className='container'>

          <div className=' flex items-center gap-5'>
            <div className="flex  py-5">
              <input
                onChange={onChange}
                type="file"
                id="img"
                className="hidden"
              />
              <label
                htmlFor="img"
                className="relative w-[140px] h-[140px] cursor-pointer rounded-full  bg-white bg-cover bg-center"
                style={{ backgroundImage: `url(${imgURL})` }}
              >
                <div
                  className="absolute bottom-1 -right-1 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
                >
                  <AiOutlineEdit size={20} className="text-primary" />
                </div>
              </label>
            </div>

            <div className=' flex flex-col gap-1'>
              <p className='text-primary text-[22px] font-medium'>{userData?.firstName} {userData?.lastName}</p>
              <p className='text-[#11D279] text-[16px] font-[400]'>{userData?.location}</p>
            </div>

          </div>


          <div className="flex lg:flex-row flex-wrap lg:gap-4 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`lg:px-4 px-2 h-[40px] rounded-full font-medium lg:text-sm text-[11px] ${activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-[#E6F7FA] text-[#6B6B6B] hover:bg-primary hover:text-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>


      </div>

      {/* Active Tab Content */}
      <div>

      </div>
      <div className="pt-6 lg:p-4 pb-[72px] container  ">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>

    </div>
  );
};

export default ProfileHome;