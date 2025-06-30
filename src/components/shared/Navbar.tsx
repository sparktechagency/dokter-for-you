/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { LuSearch } from "react-icons/lu";
import { IoChevronDownOutline, IoNotificationsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { GoStar } from "react-icons/go";
import { HiOutlineTranslate } from "react-icons/hi";
import { Drawer } from "antd";
import Cookies from "js-cookie";
import AddReviewModal from "../ui/Website/home/AddReviewModal";
import { useGetProfileQuery } from "@/redux/features/profile/getProfileSlice";
import { imageUrl } from "@/redux/base/baseApi";
import { useGetAllCategoryQuery } from "@/redux/features/website/categorySlice";
import { useRouter } from "next/navigation";
import { useGetAllNotificationQuery } from "@/redux/features/website/notificationSlice";

const languages = [
  { label: "English", value: "en" },
  { label: "Dutch", value: "nl" },
  { label: "German", value: "de" },
  { label: "French", value: "fr" },
  { label: "Polish", value: "pl" },
  { label: "Portuguese", value: "pt" },
  { label: "Spanish", value: "es" },
  { label: "Swedish", value: "sv" },
  { label: "Danish", value: "da" },
  { label: "Romanian", value: "ro" },
  { label: "Finnish", value: "fi" },
  { label: "Lithuanian", value: "lt" },
  { label: "Arabic", value: "ar" },
];

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  //language 
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userData, setUserData] = useState<any>(null);
  const { data } = useGetProfileQuery(undefined)
  const [imgURL, setImgURL] = useState("");
  const { data: category } = useGetAllCategoryQuery(undefined)
  const { data: notifications } = useGetAllNotificationQuery(undefined)
  const router = useRouter()
  const totalNotifications = notifications?.data?.unreadCount

  const getProfileImageUrl = (profile: string): string => {
    return profile.startsWith("http") ? profile : `${imageUrl}${profile}`;
  };


  useEffect(() => {
    if (data?.data) {
      setUserData(data?.data);
      setImgURL(getProfileImageUrl(data?.data?.profile));
    }
  }, [data]);

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("DokterToken");
    router.push("/login");
  }


  const handleDropdown = (index: any) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownOpen(false);
      }

      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const storedLanguage = Cookies.get("currentLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);


  // Switch Language Function
  const switchLanguage = (lang: string) => {
    // Store selected language in cookies
    Cookies.set("currentLanguage", lang, { expires: 30 });

    // Correctly set the Google Translate cookie (googtrans)
    const googleTransValue = `/en/${lang}`;

    // Remove any existing "googtrans" cookies before setting a new one
    document.cookie =
      "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    // after add domain 
    // document.cookie =
    //   "googtrans=; domain=.1plus1dating.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; // Replace with your actual domain

    // Now, set the new "googtrans" cookie
    document.cookie = `googtrans=${googleTransValue}; path=/; max-age=${30 * 24 * 60 * 60
      }`;

    // for domain 
    // document.cookie = `googtrans=${googleTransValue}; domain=.1plus1dating.com; path=/; max-age=${
    //   30 * 24 * 60 * 60
    // };`;

    // Update state
    setSelectedLanguage(lang);

    // Reload the page to apply the translation
    window.location.reload();
  };

  const navLinks = [
    { label: "Home", link: "/home" },
    {
      label: "All Consultation",
      subOptions: category?.data?.map((item: { name: string; _id: string }) => ({
        label: item?.name,
        value: item?._id,
      })),
    },
    { label: "About", link: "/about" },
    { label: "Blogs", link: "/blogs" },
    { label: "Support", link: "/support" },
  ];



  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 w-full bg-white/100 shadow z-50">
        <div className="container mx-auto flex items-center justify-between h-[96px] px-4 lg:px-0">

          {/* Logo */}
          <div className=" flex items-center justify-between w-full lg:w-auto  ">

            <div className="lg:hidden flex items-center space-x-4">
              <MenuOutlined
                className="text-2xl cursor-pointer"
                onClick={toggleDrawer}
              />
            </div>


            <div className=" flex-shrink-0">
              <Link href="/home">
                <img
                  src="/logo.png"
                  alt="Logo"

                  className="mr-2  lg:h-[70px] h-[60px] lg:w-[200px] w-[190px]"
                />
              </Link>
            </div>


            {/* profile  */}
            {/* <div className="relative lg:hidden">
              <div 
            
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() =>
                  setIsProfileDropdownOpen(!isProfileDropdownOpen)
                }
              >
             { 
             userData ? <Image src={imgURL} alt="" height={45} width={45} style={{ borderRadius: "100%", width: "45px", height: "45px" }} className="object-cover" /> :
               <div><Link href={"/login"}><button className="bg-primary text-white px-6 py-3 rounded-lg text-[14px]">Login</button></Link></div>
             }   

              </div> 

              {
                 isProfileDropdownOpen && (
                  <div   ref={profileDropdownRef} className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-[200px] z-50">
                  <div className="p-4 flex flex-col gap-3 items-center">
                    <Image src={imgURL} alt="" height={55} width={55} style={{ borderRadius: "100%", width: "55px", height: "55px" }} />
                    <div className="font-bold">{userData?.firstName} {userData?.lastName}</div>
                    <Link href="/profile">
                      <button className="text-white bg-primary w-full px-6 py-2 rounded-lg text-[14px]" >
                        Visit Your Profile
                      </button>
                    </Link>

                  </div>
                  <p className="flex items-center justify-start px-4 pb-2 w-full  gap-2  rounded-lg mt-2 text-[16px] text-gray-700 cursor-pointer" onClick={showModal}>
                    <span> <GoStar size={16} /> </span>
                    <span className="  text-[16px] font-medium"> Review </span>
                  </p>
                  <div className="border-t">
                    <button className="px-4 py-3 text-primary hover:bg-gray-100 cursor-pointer flex items-center gap-2" onClick={handleLogout}>
                      <IoIosLogOut size={24} />
                      <p>Log Out</p>
                    </button>
                  </div>
                </div>
                )}
              

             
            </div> */}

          </div>

          {/* Large Device Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex space-x-10">
              {navLinks.map((navItem, index) => (
                <div key={index} className="relative group">
                  <div

                    className={`flex items-center cursor-pointer text-[#4E4E4E] hover:text-primary font-[400px] ${activeLink === navItem.label
                      ? "text-primary font-medium"
                      : ""
                      }`}
                    onClick={() => {
                      setActiveLink(navItem.label);
                      if (navItem.subOptions) handleDropdown(index);
                    }}
                  >
                    {navItem.link ? (
                      <Link href={navItem.link}>{navItem.label}</Link>
                    ) : (
                      navItem.label
                    )}
                    {navItem.subOptions && (
                      <DownOutlined
                        className={`ml-2 text-sm transition-transform ${openDropdown === index ? "rotate-180" : "rotate-0"
                          }`}
                      />
                    )}
                  </div>

                  {navItem.subOptions && openDropdown === index && (
                    <div ref={categoryDropdownRef} className="absolute left-0 mt-2 w-[200px] bg-white shadow-lg border rounded-md z-10">
                      {navItem.subOptions.map((option: { label: string, value: string }, subIndex: number) => (
                        <Link key={subIndex} href={`/subcategory?category=${option.value}`}>
                          <p
                            className={`py-2 px-4 text-sm text-[#4E4E4E] cursor-pointer hover:bg-primary hover:text-white rounded ${activeLink === option.value
                              ? "bg-primary text-white"
                              : ""
                              }`}
                            onClick={() => setActiveLink(option.value)}
                          >
                            {option.label}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className=" lg:flex items-center space-x-4">
            <Link href="/search" className="hidden lg:block">
              <div className="text-[#4E4E4E] text-lg cursor-pointer bg-[#E8EEFE] w-[48px] h-[48px] rounded-full flex items-center justify-center">
                <LuSearch size={24} color="#4E4E4E" />
              </div>
            </Link>
            <Link href="/notifications" className="hidden lg:block">
              <div className="relative bg-[#E8EEFE]  w-[48px] h-[48px] rounded-full flex items-center justify-center">
                <div className="text-[#4E4E4E] text-lg cursor-pointer ">
                  <IoNotificationsOutline size={24} color="#4E4E4E" />
                  {totalNotifications > 0 && (
                    <span className="absolute -top-2 -right-1 bg-red-500 text-white text-[10px] font-bold w-[26px] h-[26px] rounded-full flex items-center justify-center">
                      {totalNotifications > 9 ? "9+" : totalNotifications}
                    </span>
                  )}
                </div>
              </div>
            </Link>

            {/* language  */}
            <div className=" relative  ">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="w-12 h-12 bg-transparent  text-xl cursor-pointer flex items-center justify-center gap-0"
              >
                <span> <HiOutlineTranslate /> </span> <span><IoChevronDownOutline /> </span>
              </button>
              {isLanguageDropdownOpen && (
                <div ref={profileDropdownRef} className="absolute -right-6 py-2  mt-2 w-[210px] bg-white border border-gray-300 rounded shadow-lg z-10">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className={`px-4 py-2 h-10 hover:bg-[#e8eefe] cursor-pointer text-[#6B6B6B] ${selectedLanguage === lang?.value ? "bg-[#e8eefe] " : ""}`}
                      onClick={() => {
                        setIsLanguageDropdownOpen(false);
                        switchLanguage(lang?.value);
                      }}
                    >
                      {lang?.label}
                    </div>
                  ))}
                </div>
              )}
            </div>


            {/* Profile Dropdown */}
            <div className="relative w-full">
              {userData ? <div

                className="flex items-center space-x-2 cursor-pointer"
                onClick={() =>
                  setIsProfileDropdownOpen(!isProfileDropdownOpen)
                }
              >
                <Image src={imgURL} alt="" height={45} width={45} style={{ borderRadius: "100%", width: "45px", height: "45px" }} className="rounded-full" />
                <p className="text-[#4E4E4E] font-medium hidden lg:block">{userData?.firstName} {userData?.lastName}</p>
                <p className="hidden lg:block">  <DownOutlined
                  className={`transition-transform hidden lg:block ${isProfileDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                /> </p>

              </div>
                :
                <div><Link href={"/login"}><button className="bg-primary text-white px-6 py-3 rounded-lg text-[14px]">Login</button></Link></div>}

              {isProfileDropdownOpen && (
                <div ref={profileDropdownRef} className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-[200px] z-50">
                  <div className="p-4 flex flex-col gap-3 items-center">
                    <Image src={imgURL} alt="" height={55} width={55} style={{ borderRadius: "100%", width: "55px", height: "55px" }} />
                    <div className="font-bold ">{userData?.firstName} {userData?.lastName}</div>
                    <Link href="/profile">
                      <button className="text-white bg-primary w-full px-6 py-2 rounded-lg text-[14px]" >
                        Visit Your Profile
                      </button>
                    </Link>

                  </div>
                  <p className="flex items-center justify-start px-4 pb-2 w-full  gap-2  rounded-lg mt-2 text-[16px] text-gray-700 cursor-pointer" onClick={showModal}>
                    <span> <GoStar size={16} /> </span>
                    <span className="  text-[16px] font-medium"> Review </span>
                  </p>
                  <div className="border-t">
                    <button className="px-4 py-3 text-primary hover:bg-gray-100 cursor-pointer flex items-center gap-2" onClick={handleLogout}>
                      <IoIosLogOut size={24} />
                      <p>Log Out</p>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>



        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        placement="right"
        closable={true}
        onClose={toggleDrawer}
        open={isDrawerVisible}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((navItem, index) => (
            <div key={index}>
              {navItem.link ? (
                <Link href={navItem.link} onClick={toggleDrawer}>
                  <p className="text-[#4E4E4E] hover:text-primary font-medium text-[20px]">
                    {navItem.label}
                  </p>
                </Link>
              ) : (
                <p className="text-[#4E4E4E] hover:text-primary font-medium text-[20px]">
                  {navItem.label}
                </p>
              )}
              {navItem.subOptions && (
                <div className="pl-2 pt-3">
                  {navItem.subOptions.map((option: { value: string, label: string }, subIndex: number) => (
                    <Link key={subIndex} href={`/subcategory?category=${option.value}`} onClick={toggleDrawer}>
                      <p className=" text-[#4E4E4E] hover:text-primary pb-2 text-[18px] font-[400]">
                        {option.label}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className=" flex items-center gap-3">
            <Link href="/search">
              <div className="text-[#4E4E4E] text-lg cursor-pointer bg-[#E8EEFE] w-[48px] h-[48px] rounded-full flex items-center justify-center">
                <LuSearch size={24} color="#4E4E4E" />
              </div>
            </Link>
            <Link href="/notifications">
              <div className="relative bg-[#E8EEFE]  w-[48px] h-[48px] rounded-full flex items-center justify-center">
                <div className="text-[#4E4E4E] text-lg cursor-pointer ">
                  <IoNotificationsOutline size={24} color="#4E4E4E" />
                  {totalNotifications > 0 && (
                    <span className="absolute -top-2 -right-1 bg-red-500 text-white text-[10px] font-bold w-[26px] h-[26px] rounded-full flex items-center justify-center">
                      {totalNotifications > 9 ? "9+" : totalNotifications}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>

        </div>

      </Drawer>

      <AddReviewModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <div className="pt-[96px]">{/* Page content here */}</div>
    </>
  );
};

export default Navbar;
