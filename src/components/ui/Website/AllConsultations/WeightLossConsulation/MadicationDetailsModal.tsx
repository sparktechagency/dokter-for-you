"use client";

    import { useState } from 'react';
    import { Modal, InputNumber, Button } from 'antd';
    import Image from 'next/image';
    import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

    
    interface MedicationModalProps {
      open: boolean;
      setopen: React.Dispatch<React.SetStateAction<boolean>>;
    }
    
const  MadicationDetailsModal = ({ open, setopen }: MedicationModalProps) => {
      const [quantity, setQuantity] = useState(0);
      const [packSize, setPackSize] = useState('50'); 
      console.log(packSize);
    
      return (
        <Modal
          open={open}
          onCancel={() => setopen(false)} 
          centered
          footer={null}
          width={850}
          title="Medication Details"
          className="medication-modal"
        >
          <div className="flex flex-col md:flex-row gap-8 mt-4">
            <div className="w-full md:w-1/2">
              <div className="bg-gray-50 px-[25px] py-[77px] rounded-lg flex items-center justify-center">
                <Image
                  src="/Ceevit.svg"
                  alt="Ceevit Vitamin C"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="uppercase text-[#1854F9] text-sm font-semibold mb-2">
                SQUARE
              </div>
              
              <h2 className="text-2xl font-medium mb-2 text-[#222222]">Ceevit</h2>
              <p className="text-[#6B6B6B] font-[400] text-[16px] mb-2">Vitamin C</p>
              
              <p className="text-[#999999] font-[400] text-[14px] mb-4 ">
                When your health is concerned, we believe you have the right to decide
                what to do with your body. That is why we offer you the opportunity to
                consult a licensed and registered EU
              </p> 

              <div className=' flex items-center gap-5 mb-4 '>

              <div className="">
                <div className="text-gray-600 mb-2">From</div>
                <button className='px-4 py-1 font-[400] text-[16px] bg-primary text-white'>Tablet</button>
              </div>
              
              <div className="">
                <div className="text-gray-600 mb-2">Dosage</div>
                <button className='px-4 py-1 font-[400] text-[16px] bg-primary text-white'>250 mg</button>
              </div>
              </div>
              
              
              <div className="mb-6">
      {/* Title */}
      <div className="text-gray-600 mb-3 text-sm font-medium">Contents of the Box</div>

      {/* Controls */}
      <div className="flex lg:flex-row flex-col items-center gap-4">
        {/* Quantity controls */}
        <div className="flex items-center gap-2">
          <Button
            icon={<MinusOutlined />}
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 border-none shadow-sm"
          />
          <InputNumber
            min={0}
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

        {/* Pack size selection using buttons */}
        <div className="flex  gap-2">
          {['10', '50', '100'].map((size) => (
            <button
              key={size}
              onClick={() => setPackSize(size)}
              className={`px-3 py-2 text-[12px] font-[400]  ${
                packSize === size
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-black'
              } shadow-sm border-none`}
            >
              {size} Pcs
            </button>
          ))}
        </div>
      </div>
    </div>
              
              <button 
                className="h-12 bg-[#097443]  text-white w-full text-[16px]"
              >
                + My preference
              </button>
            </div>
          </div>
        </Modal>
      );
    } 

    export default MadicationDetailsModal