/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */ 
//@ts-nocheck
import React, { useState, useEffect } from "react";
import { Input } from "antd";
import {
  useGetAllMedicinesQuery,
  useGetMedicineByIdQuery,
} from "@/redux/features/website/consultationSlice";
import { imageUrl } from "@/redux/base/baseApi";
import MadicationDetailsModal from "./MadicationDetailsModal";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";


const WeightLossConsultation = () => {
  const [search, setSearch] = useState("");
  const [selectedMeds, setSelectedMeds] = useState([]);
  const [medicineData, setMedicineData] = useState({});
  const [open, setOpen] = useState(false);
  const [singleMedicineId, setSingleMedicineId] = useState(null);
  const { data } = useGetAllMedicinesQuery(search);
  const medications = data?.data;

  const { data: medicineById } = useGetMedicineByIdQuery(singleMedicineId, {
    skip: !singleMedicineId,
  });

  useEffect(() => {
    if (medicineById?.data && singleMedicineId) {
      const existingMed = selectedMeds.find(
        (med: { _id: string }) => med._id === singleMedicineId
      );

      if (!existingMed) {
        setSelectedMeds((prev) => [
          ...prev,
          {
            ...medicineById.data,
            count: medicineData.count || 1,
            total: `${medicineData.count || 1} pcs`,
          },
        ]);
      }
    }
  }, [medicineById, singleMedicineId, medicineData, selectedMeds]);

  const handleSelect = (med) => {
    // Open modal only if it's not already selected
    if (!isSelected(med._id)) {
      setMedicineData(med);
      setOpen(true);
    }
  };

  const handleAddToSelected = (medData) => {
    setSingleMedicineId(medData._id);
    setMedicineData({ count: medData.count, total: medData.total });

    const existingMedIndex = selectedMeds.findIndex(
      (med) => med._id === medData._id
    );

    if (existingMedIndex !== -1) {
      setSelectedMeds((prev) =>
        prev.map((med, index) =>
          index === existingMedIndex
            ? { ...med, count: medData.count, total: medData.total }
            : med
        )
      );
    } else {
      setSelectedMeds((prev) => [...prev, medData]);
    }

    setOpen(false);
  };

  const handleRemove = (id, e) => {
    e.stopPropagation(); // Stop the click event from bubbling up
    setSelectedMeds((prev) => prev.filter((med) => med._id !== id));
  };

  const filteredMeds = medications?.filter((med) =>
    med.name.toLowerCase().includes(search.toLowerCase())
  );

  const isSelected = (id) =>
    selectedMeds.some((selectedMed) => selectedMed?._id === id);

  return (
    <div>
      <h1 className="lg:text-2xl text-[20px] font-semibold">
        Select your preferred medication for your Weight Loss Consultation - Weight Problem
      </h1>
      <p className="text-gray-600 mt-1">
        The doctor ultimately decides whether to issue you a prescription and whether to prescribe your preferred medication.
      </p>

      <div className="flex lg:flex-row flex-col items-center justify-center gap-4 mt-6"> 
        <div className=" w-1/2">

        <Input
          placeholder="Type your medication"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" h-[48px] w-1/2"  
          style={{ borderRadius: "0px"  , border: "1px solid #d9d9d9"}}
          prefix={<CiSearch size={24} color="#4b5563" />}
        />
        </div>
      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredMeds?.map((med) => (
          <div
            key={med._id}
            className={`border relative rounded-lg p-4 shadow hover:shadow-lg cursor-pointer ${
              isSelected(med._id) ? "bg-[#E7FBF2]" : ""
            }`}
            onClick={() => handleSelect(med)}
          >
            <img
              src={med?.image?.startsWith("http") ? med?.image : `${imageUrl}${med?.image}`}
              alt={med.name}
              className="h-36 mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4 text-center">{med.name}</h3>
            <p className="text-sm text-gray-500 text-center">
              {`${med?.company} ${med?.dosage}`}
            </p>
            {isSelected(med._id) && (
              <p
                onClick={(e) => handleRemove(med._id, e)} // Prevent modal from opening when clicking the cancel icon
                className="top-2 right-2 absolute text-red-500 py-1 rounded-lg text-sm"
              >
                <RxCross2 size={22} />
              </p>
            )}
          </div>
        ))}
      </div>

      <MadicationDetailsModal
        open={open}
        setOpen={setOpen}
        medicineData={medicineData}
        handleAddToSelected={handleAddToSelected}
      />
    </div>
  );
};

export default WeightLossConsultation;
