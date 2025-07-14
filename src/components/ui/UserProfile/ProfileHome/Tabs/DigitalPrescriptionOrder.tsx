/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Button, ConfigProvider, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import PrescriptionOrder from '../TabsDetails/PrescriptionOrder';
import { useGetAllConsultationsQuery } from '@/redux/features/profile/consultationSlice';


interface ConsultationData {
  id: number;
  regNo: string;
  consultFor: string;
  medication: string;
  dateTime: string;
  price: string;
  suggestedMedicine: { dosage: string; }[]
  isMedicine: boolean;
}

const DigitalPrescriptionOrder = () => {
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  // const name = "medication" 
  const { data: allConsultations, isLoading } = useGetAllConsultationsQuery(undefined)

  if (isLoading) {
    return <div>Loading...</div>
  }

  const DigitalPrescriptionOrderDetails = allConsultations?.data?.filter(
    (consultation: { forwardToPartner: boolean; isMedicine: boolean; }) => consultation?.forwardToPartner === true && consultation?.isMedicine === false
  );

  const columns: ColumnsType<ConsultationData> = [
    {
      title: 'S. No.',
      dataIndex: 'sNo',
      key: 'sNo',
      width: 80,
      render: (_, __, index) => index + 1,
    },


    {
      title: 'Reg. No.',
      dataIndex: '_id',
      key: 'regNo',
      width: 150,
    },
    {
      title: 'Consult for:',
      dataIndex: ["subCategory", "name"],
      key: 'consultFor',
      width: 250,
    },
    {
      title: 'Medication',
      dataIndex: 'suggestedMedicine',
      key: 'medication',
      width: 250,
      render: (_, record) => (
        <div className="flex gap-1">
          {record?.suggestedMedicine?.map((item: any, index: number) => (
            <span key={index}>
              {item?.name}
              {index < record.suggestedMedicine.length - 1 && ','}
            </span>
          ))}
        </div>
      )
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: 120,
      render: (_, record) => {
        const total = record?.suggestedMedicine?.reduce(
          (sum: number, item: any) => sum + (item?.totalPrice || 0),
          0
        );

        return <span> €{total}</span>;
      }
    },
    {
      title: 'Action',
      key: 'action',
      width: 100,
      render: (_, record: any) => (
        <Button onClick={() => setSelectedConsultation(record)}
          type="text"
          icon={<MdOutlineArrowOutward size={24} />}
          style={{ color: '#00b96b' }}
        />
      ),
    },
  ];

  return (
    <div className=" ">

      {selectedConsultation ? (
        <PrescriptionOrder
          consultationId={selectedConsultation}
          onClose={() => setSelectedConsultation(null)}
        />
      ) : (

        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: '#F7F7F7'
              },
            },
            token: {
              colorBgContainer: "#E7FBF2"
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={DigitalPrescriptionOrderDetails}
            pagination={false}
            className="consultation-table"
            scroll={{ x: 'max-content' }}
          />
        </ConfigProvider>
      )}
    </div>

  );
};

export default DigitalPrescriptionOrder;