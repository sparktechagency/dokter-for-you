/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

"use client "
import { Button, ConfigProvider, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import PrescriptionDetails from '../TabsDetails/PrescriptionDetails';
import { useGetAllConsultationsQuery } from '@/redux/features/profile/consultationSlice';

interface ConsultationData {
  id: number;
  regNo: string;
  consultFor: string;
  dateTime: string;
  price: string;
}



const DigitalPrescriptionDetails = () => {
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const name = "regular"
  const { data: allConsultations, isLoading } = useGetAllConsultationsQuery(name)

  if (isLoading) {
    return <div>Loading...</div>
  }

  const DigitalPrescriptionDetails = allConsultations?.data?.filter(
    (consultation) => consultation?.suggestedMedicine?.length >= 1 || consultation?.opinion?.trim().length > 1
  );

  console.log("DigitalPrescriptionDetails",DigitalPrescriptionDetails);  

  //console.log(allConsultations);
  const columns: ColumnsType<ConsultationData> = [
    {
      title: 'S. No.',
      dataIndex: 'sNo',
      key: 'sNo',
      width: 80,
      render: (_, __, index) => index + 1,
    },

    {
      title: 'Consult for:',
      dataIndex: ["subCategory", "name"],
      key: 'consultFor',
      width: 250,
    },
    {
      title: 'Consultant:',
      dataIndex: "doctorId",
      key: 'consultant',
      width: 180,
      render: (_, record) => {
        return (
          <div>
            {record?.doctorId?.firstName} {record?.doctorId?.lastName}
          </div>
        )
      }
    },

    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: 120,
      render: () => {
        return (
          <div>
            {"€25.00"}
          </div>
        )
      }
    },
    {
      title: 'Action',
      key: 'action',
      width: 100,
      render: (_, record) => (
        <Button onClick={() => setSelectedConsultation(record)}
          type="text"
          icon={<MdOutlineArrowOutward size={24} />}
          style={{ color: '#00b96b' }}
        />
      ),
    },
  ];



  return (
    <div>
      <div className=" ">

        {selectedConsultation ? (
          <PrescriptionDetails
            DigitalPrescriptionDetails={DigitalPrescriptionDetails}
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
              dataSource={DigitalPrescriptionDetails}
              pagination={false}
              scroll={{ x: 'max-content' }}
              className="consultation-table"

            />
          </ConfigProvider>
        )}
      </div>
    </div>
  );
};

export default DigitalPrescriptionDetails;