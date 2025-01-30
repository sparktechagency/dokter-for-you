"use client";

import { useState } from 'react';
import { Modal, InputNumber, Button, message } from 'antd';
import Image from 'next/image';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { imageUrl } from '@/redux/base/baseApi';

interface MedicationModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>; 
  medicineData: { 
    _id: string;
    name: string; 
    company: string; 
    description: string; 
    form: string; 
    dosage: string; 
    image: string; 
    medicineType: string; 
    packSize: string; 
    price: string; 
    quantity: string|number|null; 
    strength: string;  
    unitPerBox: string[];
  };
  handleAddToSelected: (selectedItem: { _id: string; count: number; total: string }) => void;
}

const MadicationDetailsModal = ({ open, setOpen, medicineData, handleAddToSelected }: MedicationModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [packSize, setPackSize] = useState('');

  const handleSubmit = () => { 

    if (!packSize) {
      return message.error("Please select a pcs before proceeding.");
    } 

    handleAddToSelected({
      _id: medicineData?._id,
      count: quantity,
      total: `${packSize} pcs`,
    }) 

    setQuantity(1);
    setPackSize('');
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      centered
      footer={null}
      width={850}
      title="Medication Details"
      className="medication-modal"
    >
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        <div className="w-full md:w-1/2 h-auto">
          <div className="bg-gray-50 px-[25px] py-[77px] rounded-lg flex items-center justify-center">
            <Image
              src={medicineData?.image?.startsWith("http") ? medicineData?.image : `${imageUrl}${medicineData?.image}`}
              alt={medicineData?.name}
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>

        <form className="w-full md:w-1/2" onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          {/* <div className="uppercase text-[#1854F9] text-sm font-semibold mb-2">
            {medicineData?.company}
          </div> */}

          <h2 className="text-2xl font-medium mb-2 text-[#222222]">{medicineData?.name}</h2>
          <p className="text-[#6B6B6B] font-[400] text-[16px] mb-2">{medicineData?.medicineType}</p>

          <p className="text-[#999999] font-[400] text-[14px] mb-4">
            {medicineData?.description === "undefined" ? "" : medicineData?.description}
          </p>

          <div className="flex items-center gap-5 mb-4">
            <div>
              <div className="text-gray-600 mb-2">Form</div>
              <button className='px-4 py-1 font-[400] text-[16px] bg-primary text-white'>{medicineData?.form}</button>
            </div>

            <div>
              <div className="text-gray-600 mb-2">Dosage</div>
              <button className='px-4 py-1 font-[400] text-[16px] bg-primary text-white'>{medicineData?.dosage}</button>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-gray-600 mb-3 text-sm font-medium">Contents of the Box</div>
            <div className="flex lg:flex-row flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  icon={<MinusOutlined />}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 border-none shadow-sm"
                />
                <InputNumber
                  min={1}
                  value={quantity}
                  onChange={(value) => setQuantity(Number(value))}
                  className="text-center w-10 h-8 bg-gray-200 text-black rounded shadow-sm border-none"
                />
                <Button
                  icon={<PlusOutlined />}
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 border-none shadow-sm"
                />
              </div>

              <div className="flex gap-2">
                {medicineData?.unitPerBox?.map((size) => (
                  <div
                    key={size}
                    onClick={() => setPackSize(size)}
                    className={`px-3 py-2 text-[12px] font-[400] cursor-pointer ${packSize === size ? 'bg-primary text-white' : 'bg-gray-200 text-black'} shadow-sm border-none`}
                  >
                    {size} Pcs
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="h-12 bg-[#097443] text-white w-full text-[16px]"
          >
            Select
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default MadicationDetailsModal