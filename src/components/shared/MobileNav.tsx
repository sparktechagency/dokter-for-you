import React from 'react';
import { Drawer } from "antd"; 
import Link from 'next/link';
import { LuSearch } from 'react-icons/lu';
import { IoNotificationsOutline } from 'react-icons/io5';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MobileNav = ({ navLinks, isDrawerVisible, toggleDrawer, totalNotifications }:any) => {
    return (
        <div>
            <Drawer
                placement="right"
                closable={true}
                onClose={toggleDrawer}
                open={isDrawerVisible}
            >
                <div className="flex flex-col space-y-4">
                    {navLinks?.map((navItem:{ link: string, label: string, subOptions: { value: string, label: string }[]}, index:number) => (
                        <div key={index}>
                            {navItem?.link ? (
                                <Link href={navItem?.link} onClick={toggleDrawer}>
                                    <p className="text-[#4E4E4E] hover:text-primary font-medium text-[20px]">
                                        {navItem?.label}
                                    </p>
                                </Link>
                            ) : (
                                <p className="text-[#4E4E4E] hover:text-primary font-medium text-[20px]">
                                    {navItem?.label}
                                </p>
                            )}
                            {navItem?.subOptions && (
                                <div className="pl-2 pt-3">
                                    {navItem?.subOptions?.map((option: { value: string, label: string }, subIndex: number) => (
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
        </div>
    );
};

export default MobileNav;