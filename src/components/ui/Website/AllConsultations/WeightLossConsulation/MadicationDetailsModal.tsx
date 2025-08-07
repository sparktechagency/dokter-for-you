"use client";

import { useEffect, useState } from 'react';
import { Modal, InputNumber, Button, message } from 'antd';
import Image from 'next/image';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { imageUrl } from '@/redux/base/baseApi';
import { useCountry } from '@/app/(website)/CountryContext';

interface MedicationModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  medicineData: {
    _id: string;
    name: string;
    company: string;
    description: string;
    form: string;
    dosage: string[];
    variations: variationsType[];
    image: string;
    medicineType: string;
    packSize: string;
    price: string;
    quantity: string | number | null;
    strength: string;
    unitPerBox: string[];
    sellingPrice: number;
    subDescription: string;
  };
  handleAddToSelected: (selectedItem: { _id: string; count: number; total: string, dosage: string, price: number, variationId: string, unitId: string }) => void;
}

interface unitType {
  unitPerBox: string | null,
  sellingPrice: number,
  _id: string
}
interface variationsType {
  _id: string;
  units: unitType[];
  dosage: string
}

const MadicationDetailsModal = ({ open, setOpen, medicineData, handleAddToSelected }: MedicationModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [packSize, setPackSize] = useState<string | null>('');
  const [dosage, setDosage] = useState('');
  const [unitPerBox, setUnitPerBox] = useState<unitType[]>([]);
  const [medicinePrice, setMedicinePrice] = useState<number>(0);
  const [variationId, setVariationId] = useState<string>('');
  const [unitId, setUnitId] = useState<string>('');
  const { country } = useCountry(); 
  console.log(country);

  useEffect(() => {
    if (medicineData?.variations?.length > 0) {
      const firstVariation = medicineData.variations[0];
      setDosage(firstVariation.dosage);
      setUnitPerBox(firstVariation.units);
      setVariationId(firstVariation._id);

      // Set default packSize, price, and unitId if units exist
      if (firstVariation.units?.length > 0) {
        setPackSize(firstVariation.units[0].unitPerBox);
        setUnitId(firstVariation.units[0]._id);
        setMedicinePrice(firstVariation.units[0].sellingPrice);
      }
    }
  }, [medicineData]);

  const handleDosageChange = (variation: variationsType) => {
    setDosage(variation.dosage);
    setUnitPerBox(variation.units);
    setVariationId(variation._id);

    // Reset packSize, medicinePrice, and unitId to the first unit of the new variation
    if (variation.units?.length > 0) {
      setPackSize(variation.units[0].unitPerBox);
      setMedicinePrice(variation.units[0].sellingPrice);
      setUnitId(variation.units[0]._id);
    } else {
      // Handle case where no units are available
      setPackSize(null);
      setMedicinePrice(0);
      setUnitId('');
    }
  };

  const totalPrice = medicinePrice * quantity;

  const handleSubmit = () => {
    if (!packSize) {
      return message.error("Please select a pcs before proceeding.");
    }

    handleAddToSelected({
      _id: medicineData?._id,
      count: quantity,
      total: `${packSize} pcs`,
      dosage: dosage,
      price: totalPrice,
      variationId: variationId,
      unitId: unitId
    });

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
      title={<p className='text-2xl font-medium text-[#222222]'>Medication Details</p>}
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
              className="object-contain "
            />
          </div>
        </div>

        <form className="w-full md:w-1/2" onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          <div className="uppercase text-[#1854F9] text-sm font-semibold mb-2">
            Square
          </div>

          <h2 className="text-2xl font-medium mb-1 text-[#222222]">{medicineData?.name}</h2>

          <p className="text-[#00B3CC] font-[400] text-[16px] mb-0.5"> {medicineData?.form} </p>
          <p className={`text-[#1854F9] font-[400] text-2xl mb-2 ${country === "Netherlands"?"hidden":"block"}`}> €{totalPrice?.toFixed(2)} </p>

          <p className="text-[#999999] font-[400] text-[14px] mb-4" dangerouslySetInnerHTML={{ __html: ` ${medicineData?.description === "undefined" ? "" : medicineData?.description} ` }} />

          <div className="flex flex-col items-start gap-5 mb-4">
            <div className="flex flex-col gap-2">
              <p className="text-[#999999] ">Dosage</p>
              <div className='flex items-center gap-2'>
                {medicineData?.variations?.map((items: variationsType) => (
                  <div
                    key={items?._id}
                    onClick={() => handleDosageChange(items)}
                    className={`px-3 py-2 text-[12px] font-[400] cursor-pointer ${dosage === items?.dosage ? 'bg-primary text-white' : 'bg-gray-200 text-black'} shadow-sm border-none`}
                  >
                    {items?.dosage}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[#999999] ">Select Units per Box</p>
              <div className='flex items-center gap-2'>
                {unitPerBox?.map((items: unitType) => (
                  <div
                    key={items?._id}
                    onClick={() => {
                      setPackSize(items?.unitPerBox);
                      setMedicinePrice(items?.sellingPrice);
                      setUnitId(items?._id);
                    }}
                    className={`px-3 py-2 text-[12px] font-[400] cursor-pointer ${packSize === items?.unitPerBox ? 'bg-primary text-white' : 'bg-gray-200 text-black'} shadow-sm border-none`}
                  >
                    {items?.unitPerBox}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-[#999999] mb-3 text-sm font-normal">Contents of the Box</div>
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

      <p className='text-[#999999] text-sm font-normal py-4'>
        Where your health is concerned, we believe you have the right to decide what to do with your body. That is why we offer you the opportunity to consult a licensed and registered EU
      </p>

      {country !== "Netherlands" ? (
        <div>
          <h2 className="text-[16px] font-medium mb-2 mt-2 text-[#0A2369]">Description</h2>
          <p className='text-[#999999] text-sm font-normal' dangerouslySetInnerHTML={{ __html: medicineData?.subDescription }} />
        </div>
      ) : null}
    </Modal>
  );
};

export default MadicationDetailsModal;