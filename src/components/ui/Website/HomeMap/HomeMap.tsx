/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import { ConfigProvider, Select } from "antd";
import dynamic from "next/dynamic";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
// import { LuGalleryHorizontal } from "react-icons/lu";
// import { ReactSimpleMap } from "react-simple-maps"; 

const ComposableMap = dynamic(
  () => import("react-simple-maps").then((mod) => mod.ComposableMap),
  { ssr: false }
);

const Geographies = dynamic(
  () => import("react-simple-maps").then((mod) => mod.Geographies),
  { ssr: false }
);

const Geography = dynamic(
  () => import("react-simple-maps").then((mod) => mod.Geography),
  { ssr: false }
);

const europeGeoUrl = "/geo/europe.json";

const countries = [
  { label: "Belgium", value: "Belgium" },         // Belgie/Belgique
  { label: "Denmark", value: "Denmark" },         // Danmark
  { label: "Germany", value: "Germany" },         // Deutschland
  { label: "France", value: "France" },
  { label: "Luxembourg", value: "Luxembourg" },   // Luxemburg/Luxembourg
  { label: "Netherlands", value: "Netherlands" }, // nederland
  { label: "Austria", value: "Austria" },         // Osterreich
  { label: "Poland", value: "Poland" },           // Polska
  { label: "Portugal", value: "Portugal" },
  { label: "Romania", value: "Romania" },
  { label: "Switzerland", value: "Switzerland" }, // Schweiz/Suisse
  { label: "Finland", value: "Finland" },         // Suomi
  { label: "Sweden", value: "Sweden" },           // Sverige
  { label: "Lithuania", value: "Lithuania" },     // Lietuva
  { label: "Spain", value: "Spain" }
];

interface Country {
  value: string | undefined;
  label: string | undefined;
}

const HomeMap = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCountryChange = (value: string) => {
    const country = countries.find((c) => c.value === value);
    setSelectedCountry(country || null);
  }; 

  const handleCountryClick = () => { 

    if (selectedCountry) {
      Cookies.set("country", selectedCountry.value || "", { expires: 15, path: "/" });
      router.push("/home");
    } 

  };

  return (
    <div className="w-full lg:h-full h-[calc(90vh-20px)]">
      <div className="flex flex-col items-center justify-center p-6 w-full">
        <h1 className="lg:text-[32px] text-[26px] font-semibold text-[#007F91] mb-3">
          Welcome to Doktor For You
        </h1>

        <div className="lg:text-[24px] text-[20px] font-[400] mb-4">
          {!selectedCountry ? (
            <p>Select your country to continue</p>
          ) : (
            <p>
              Your country "<span className="font-medium">{selectedCountry.label}</span>" is Selected
            </p>
          )}
        </div>

        <div className="pb-6 w-full flex items-center justify-center">
          <ConfigProvider
            theme={{
              components: {
                Select: {
                  activeBorderColor: "#BABABA",
                  hoverBorderColor: "#BABABA",
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
              options={countries}
              style={{ height: "48px" }}
              className="lg:w-[460px] w-full"
            />
          </ConfigProvider>
        </div>

        <div>
          <button
            disabled={!selectedCountry} 
            onClick={handleCountryClick}
            className={`bg-[#007F91] text-white h-[48px] flex gap-1 items-center justify-center px-5 mb-2 ${!selectedCountry ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            <span>Go to Doktor For You</span>
            <span>
              <MdOutlineKeyboardArrowRight size={22} />
            </span>
          </button>
        </div>

        <div className="relative w-full lg:w-[700px] lg:h-auto flex items-center justify-center">
          {mounted && (
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
                    const isSelected = selectedCountry && geo.properties.NAME === selectedCountry.label;
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
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeMap;