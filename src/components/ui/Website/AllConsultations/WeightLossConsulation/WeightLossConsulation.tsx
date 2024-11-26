/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */ 

import React, { useState } from 'react';
import { Input, Select } from 'antd';
import MadicationDetailsModal from './MadicationDetailsModal';

const medications = [
  { id: 1, name: 'Ceevit', description: 'Vitamin C 250 mg', image: '/cevit.png' },
  { id: 2, name: 'Napa', description: 'Paracetamol 500 mg', image: '/napa.png' },
  { id: 3, name: 'Savlon Antiseptic Cream', description: 'Powerful Germicide 100 g', image: '/savlon.png' },
  { id: 4, name: 'Ace', description: 'Paracetamol BP 500 mg', image: '/ace.png' },
  { id: 5, name: 'Doxicap', description: 'Doxycycline C 100 mg', image: '/doxicap.png' },
  { id: 6, name: 'Cef - 3', description: 'Cefixime 200 mg', image: '/cef.png' },
];

const WeightLossConsulation = () => {
  const [search, setSearch] = useState('');
  const [selectedMeds, setSelectedMeds] = useState([]);
  const [filter, setFilter] = useState('Weight Problem'); 
  const [open , setOpen] = useState(false)

  const handleSelect = (med:any) => {
      //@ts-ignore
    if (!selectedMeds.find((m) => m.id === med.id)) {  
        //@ts-ignore
      setSelectedMeds([...selectedMeds, med]);
    }
  };

  //@ts-ignore
  const handleRemove = (id) => { 
    //@ts-ignore
    setSelectedMeds(selectedMeds.filter((med) => med.id !== id));
  };

  const filteredMeds = medications.filter((med) =>
    med.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="">
      {/* Header Section */}
      <h1 className="text-2xl font-semibold">Select your preferred medication for your Weight Loss Consultation - Weight Problem</h1>
      <p className="text-gray-600 mt-1">
        The doctor ultimately decides whether to issue you a prescription and whether to prescribe your preferred medication.
      </p>

      {/* Search and Filter */}
      <div className="flex items-center gap-4 mt-4">
        <Input
          placeholder="Type your medication"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-[48px]"
        />
        <Select 
        style={{height:"48px"}}
          value={filter}
          onChange={(value) => setFilter(value)}
          className="min-w-[200px]"
        >
          <Select.Option value="Weight Problem">Weight Problem</Select.Option>
          <Select.Option value="General Health">General Health</Select.Option>
        </Select>
      </div>

      {/* Medication List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredMeds.map((med) => (
          <div
            key={med.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer"
            onClick={() =>{  handleSelect(med) 
                setOpen(true)}}
          >
            <img src={med.image} alt={med.name} className="h-36 mx-auto" />
            <h3 className="text-lg font-semibold mt-4 text-center">{med.name}</h3>
            <p className="text-sm text-gray-500 text-center">{med.description}</p>
          </div>
        ))}
      </div>

      {/* Selected Medications */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Selected medication</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {selectedMeds.map((med:any) => (
            <div key={med.id} className="border rounded-lg p-4 relative bg-[#E7FBF2]">
              <button
                onClick={() => handleRemove(med.id)}
                className="absolute top-2 right-2 text-red-500 text-lg"
              >
                ✕
              </button>
              <img src={med.image} alt={med.name} className="h-36 mx-auto" />
              <h3 className="text-lg font-semibold mt-4 text-center">{med.name}</h3>
              <p className="text-sm text-gray-500 text-center">{med.description}</p>
            </div>
          ))}
        </div>
      </div> 
      <MadicationDetailsModal open={open} setopen={setOpen} />
    </div>
  );
};

export default WeightLossConsulation;
