/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { LuSearch } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (index: any) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const navLinks = [
    { label: "Home", link: "/home" },
    {
      label: "All Consultation",
      subOptions: [
        {
          label: "For Men",
          value: "/for-men",
        },
        {
          label: "For Women",
          value: "/for-women",
        },
        {
          label: "STDs",
          value: "/stds",
        },
        {
          label: "Pain",
          value: "/pain",
        },
        {
          label: "Sleep",
          value: "/sleep",
        },
      ],
    },
    { label: "About", link: "/about" },
    { label: "Blogs", link: "/blogs" },
    { label: "Support", link: "/support" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 w-full bg-white/80 shadow z-50">
        <div className="container mx-auto flex items-center justify-between h-[96px]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/home">
              <Image
                src="/logo.svg"
                alt="Logo"
                height={100}
                width={200}
                className="mr-2"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-12">
            <div className="flex space-x-10">
              {navLinks.map((navItem, index) => (
                <div key={index} className="relative group">
                  {/* Main Nav Item */}
                  <div
                    className={`flex items-center cursor-pointer text-[#4E4E4E] hover:text-primary font-[400px] ${
                      activeLink === navItem.label
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
                        className={`ml-2 text-sm transition-transform ${
                          openDropdown === index ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    )}
                  </div>

                  {/* Dropdown Submenu */}
                  {navItem.subOptions && openDropdown === index && (
                    <div className="absolute left-0 mt-2 w-[200px] bg-white shadow-lg border rounded-md z-10">
                      {navItem.subOptions.map((option, subIndex) => (
                        <Link key={subIndex} href={option.value || "#"}>
                          <p
                            className={`py-2 px-4 text-sm text-[#4E4E4E] cursor-pointer hover:bg-primary hover:text-white rounded ${
                              activeLink === option.value
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
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <div className="text-[#4E4E4E] text-lg cursor-pointer bg-[#E8EEFE] w-[48px] h-[48px] rounded-full flex items-center justify-center">
              <LuSearch size={24} color="#4E4E4E" />
            </div>

            {/* Notification Icon */}
            <div className="text-[#4E4E4E] text-lg cursor-pointer bg-[#E8EEFE] w-[48px] h-[48px] rounded-full flex items-center justify-center">
              <IoNotificationsOutline size={24} color="#4E4E4E" />
            </div>

            {/* User Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Image src="/person.png" alt="" height={45} width={45} />
                <span className="text-[#4E4E4E] font-medium">Asadujjaman</span>
                <DownOutlined className="text-gray-500" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg hidden group-hover:block w-[200px]">
                <div className="p-4 flex flex-col gap-3 items-center space-x-3">
                  <Image src="/person.png" alt="" height={55} width={55} />
                  <div className="font-bold">MD.Asadujjaman</div>
                  <Link href="/profile">
                    <button className=" text-white bg-primary w-full px-6 py-2 rounded-lg text-[14px]">
                      Visit Your Profile
                    </button>
                  </Link>
                </div>
                <div className="border-t">
                  <div className="px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center justify-center gap-2">
                    <p>
                      <IoIosLogOut size={24} />
                    </p>
                    <p>Log Out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Padding */}
      <div className="pt-[96px]">
        {/* Page content here */}
      </div>
    </>
  );
};

export default Navbar;
