"use client";
import WeightLossConsultation from "@/components/ui/Website/AllConsultations/WeightLossConsulation/WeightLossConsulation";
import { useState } from "react";

const BuyMedicine = ({SubCategoryName, subcategoryId}:{SubCategoryName: string|null, subcategoryId: string|null}) => { 
    const [medicines , setMedicines] = useState([])  
     const [selectedMedicines , setSelectedMedicines] = useState([]) 
     console.log(selectedMedicines , medicines);
    return (
        <div className="bg-white p-5"> 

            <div className=""> 
            <WeightLossConsultation SubCategoryName={SubCategoryName} setMedicines={setMedicines} setSelectedMedicines={setSelectedMedicines} SubCategory={subcategoryId} />
            </div>
        </div>
    );
};

export default BuyMedicine;