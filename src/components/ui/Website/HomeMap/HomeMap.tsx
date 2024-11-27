/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React, { useState } from "react";
import { ConfigProvider, Select } from "antd";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import dynamic from "next/dynamic";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

const europeGeoUrl = "/geo/europe.json";

const countries = [
 
    { label: "Netherlands", value: "Netherlands" },
   
];

const HomeMap = () => {
    const router = useRouter()
    const [selectedCountry, setSelectedCountry] = useState<{ value: string, label: string } | null>(null);
    //     const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
    // const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);


    const handleCountryChange = (value: string) => {
        const country = countries.find((c) => c.value === value);
        //@ts-ignore
        setSelectedCountry(country);
    };

    return (
        <div className="  w-full  lg:h-full h-[calc(90vh-20px)] ">

            <div className=" flex flex-col items-center justify-center p-6 w-full">
                <h1 className="lg:text-[32px] text-[26px] font-semibold text-[#007F91] mb-3">Welcome to Doktor For You</h1>

                <div className="lg:text-[24px] text-[20px] font-[400] mb-4"> {
                    !selectedCountry ?
                        <p> Select your country to continue </p>
                        :
                        <p>Your country   “ <span className=" font-medium"> {selectedCountry?.label} </span> ” is Sellected  </p>
                }
                </div>
                <div className="pb-6 w-full  flex items-center justify-center">
                    <ConfigProvider
                       theme={{
                        components: {
                            Select: {
                                activeBorderColor: "#BABABA",
                                hoverBorderColor: "#BABABA"
                            },
                        },
                        token: {
                            borderRadius: 0,
                        },
    
                    }}
                    >
                        <Select
                            placeholder="Select your country"
                            onChange={handleCountryChange}
                            options={countries.map((country) => ({
                                label: country.label,
                                value: country.value,
                            }))}

                            style={{ height: "48px" }}
                            className=" lg:w-[460px] w-full"
                        />
                    </ConfigProvider>
                </div>

                <div className="">
                    <button
                        disabled={!selectedCountry}

                        onClick={() => router.push("/home")}
                        className={` bg-[#007F91] text-white h-[48px] flex gap-1 items-center justify-center px-5 mb-2  ${!selectedCountry ? 'opacity-50 cursor-not-allowed' : ''} `}

                    >

                        <span> Go to Doktor For You </span>
                        <span><MdOutlineKeyboardArrowRight size={22} /></span>
                    </button>
                </div>


                <div className=" relative w-full lg:w-[700px] lg:h-auto   flex items-center justify-center "
                >

                    <ComposableMap
                        projection="geoMercator"
                        projectionConfig={{
                            scale: 470,
                            center: [20, 57],
                        }}
                    >
                        <Geographies geography={europeGeoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => {
                                    const isSelected =
                                        selectedCountry &&
                                        //@ts-ignore
                                        geo.properties.NAME === selectedCountry.label;
                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            style={{
                                                default: {
                                                    fill: isSelected ? "#00B3CC" : "#A8A8A8",
                                                    stroke: "#FFF",
                                                },
                                                hover: { fill: "#2D3748", stroke: "#FFF" },
                                                pressed: { fill: "#FF5722", stroke: "#FFF" },
                                            }}
                                        //   onMouseEnter={() => {
                                        //     const { NAME } = geo.properties;
                                        //     setHoveredCountry(NAME); // Set hovered country name
                                        //   }}
                                        //   onMouseMove={(evt) => {
                                        //     setTooltipPosition({ x: evt.clientX, y: evt.clientY }); // Update tooltip position
                                        //   }}
                                        //   onMouseLeave={() => {
                                        //     setHoveredCountry(null); // Clear hovered country name
                                        //     setTooltipPosition(null); // Clear tooltip position
                                        //   }}
                                        />
                                    );
                                })
                            }
                        </Geographies>
                    </ComposableMap>
                    {/* {hoveredCountry && tooltipPosition && (
            <div
              style={{
                position: "absolute",
                top: tooltipPosition.y ,
                left: tooltipPosition.x ,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                padding: "5px 5px",
                borderRadius: "4px",
                pointerEvents: "none",
                fontSize: "14px",
              }}
            >
              {hoveredCountry}
            </div>
          )} */}
                </div>

            </div>

        </div>
    );
};

export default dynamic(() => Promise.resolve(HomeMap), { ssr: false });
