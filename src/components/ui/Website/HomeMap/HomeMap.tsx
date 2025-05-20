/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import { ConfigProvider, Select } from "antd";
import dynamic from "next/dynamic";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
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
  { label: "Azerbaijan", value: "Azerbaijan" },
  { label: "Albania", value: "Albania" },
  { label: "Armenia", value: "Armenia" },
  { label: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
  { label: "Bulgaria", value: "Bulgaria" },
  { label: "Cyprus", value: "Cyprus" },
  { label: "Denmark", value: "Denmark" },
  { label: "Ireland", value: "Ireland" },
  { label: "Estonia", value: "Estonia" },
  { label: "Austria", value: "Austria" },
  { label: "Czech Republic", value: "Czech Republic" },
  { label: "Finland", value: "Finland" },
  { label: "France", value: "France" },
  { label: "Georgia", value: "Georgia" },
  { label: "Germany", value: "Germany" },
  { label: "Greece", value: "Greece" },
  { label: "Croatia", value: "Croatia" },
  { label: "Hungary", value: "Hungary" },
  { label: "Iceland", value: "Iceland" },
  { label: "Israel", value: "Israel" },
  { label: "Italy", value: "Italy" },
  { label: "Latvia", value: "Latvia" },
  { label: "Belarus", value: "Belarus" },
  { label: "Lithuania", value: "Lithuania" },
  { label: "Slovakia", value: "Slovakia" },
  { label: "Liechtenstein", value: "Liechtenstein" },
  { label: "The former Yugoslav Republic of Macedonia", value: "The former Yugoslav Republic of Macedonia" },
  { label: "Malta", value: "Malta" },
  { label: "Belgium", value: "Belgium" },
  { label: "Faroe Islands", value: "Faroe Islands" },
  { label: "Andorra", value: "Andorra" },
  { label: "Luxembourg", value: "Luxembourg" },
  { label: "Monaco", value: "Monaco" },
  { label: "Montenegro", value: "Montenegro" },
  { label: "Netherlands", value: "Netherlands" },
  { label: "Norway", value: "Norway" },
  { label: "Poland", value: "Poland" },
  { label: "Portugal", value: "Portugal" },
  { label: "Romania", value: "Romania" },
  { label: "Republic of Moldova", value: "Republic of Moldova" },
  { label: "Slovenia", value: "Slovenia" },
  { label: "Spain", value: "Spain" },
  { label: "Sweden", value: "Sweden" },
  { label: "Switzerland", value: "Switzerland" },
  { label: "Turkey", value: "Turkey" },
  { label: "United Kingdom", value: "United Kingdom" },
  { label: "Ukraine", value: "Ukraine" },
  { label: "San Marino", value: "San Marino" },
  { label: "Serbia", value: "Serbia" },
  { label: "Holy See (Vatican City)", value: "Holy See (Vatican City)" },
  { label: "Russia", value: "Russia" }
];

interface Country {
  value: string;
  label: string;
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
            onClick={() => router.push("/home")}
            className={`bg-[#007F91] text-white h-[48px] flex gap-1 items-center justify-center px-5 mb-2 ${
              !selectedCountry ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span>Go to Doktor For You</span>
            <span>
              <MdOutlineKeyboardArrowRight size={22} />
            </span>
          </button>
        </div>

        <div className="relative w-full lg:w-[700px] lg:h-auto flex items-center justify-center">
          {mounted  && (
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