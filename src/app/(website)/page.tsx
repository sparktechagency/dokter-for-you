"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Select, Button } from 'antd';
import { Tooltip } from 'react-tooltip';
import "antd/dist/reset.css";

const { Option } = Select;

// GeoJSON data for Europe
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const countries = [
    { name: "Germany", iso: "DE" },
    { name: "Netherlands", iso: "NL" },
    { name: "France", iso: "FR" },
    { name: "Turkey", iso: "TR" },
    { name: "Poland", iso: "PL" },
    // Add more countries as needed
  ];

  const handleCountrySelect = (value:any) => {
    setSelectedCountry(value);
  };

  const handleMapClick = (iso:any) => {
    setSelectedCountry(iso);
  };

  const handleSubmit = () => {
    if (selectedCountry) {
      // Redirect or handle submission
      alert(`You selected ${selectedCountry}`);
    } else {
      alert("Please select a country first");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to Doktor For You</h1>
      <p className="mb-2">Select your country to continue</p>
      <div className="mb-4">
        <Select
          style={{ width: 300 }}
          placeholder="Select your country"
          onChange={handleCountrySelect}
          value={selectedCountry}
        >
          {countries.map((country) => (
            <Option key={country.iso} value={country.name}>
              {country.name}
            </Option>
          ))}
        </Select>
      </div>
      <div className="border rounded-lg p-4 ">
        <ComposableMap projection="geoMercator"
  projectionConfig={{
    scale: 1000, // Adjust scale for your viewport
    center: [10, 50], // Adjust center to position Europe correctly
  }}
  style={{ width: "100%", height: "auto" }}
        >
      <Geographies geography={geoUrl}>
  {({ geographies }) => {
    console.log("Geographies loaded:", geographies);
    return geographies.map((geo) => (
      <Geography
        key={geo.rsmKey}
        geography={geo}
        onClick={() => handleMapClick(geo.properties.name)}
        onMouseEnter={() => setHoveredCountry(geo.properties.name)}
        onMouseLeave={() => setHoveredCountry(null)}
        style={{
          default: { fill: "#d1d5db", stroke: "#000" },
          hover: { fill: "#4a90e2" },
          pressed: { fill: "#2b6cb0" },
        }}
      />
    ));
  }}
</Geographies>
        </ComposableMap>
        {hoveredCountry && (
          <Tooltip>{hoveredCountry}</Tooltip>
        )}
      </div>
      <Button
        type="primary"
        className="mt-4"
        onClick={handleSubmit}
        disabled={!selectedCountry}
      >
        Go to Doktor for you
      </Button>
    </div>
  );
}
