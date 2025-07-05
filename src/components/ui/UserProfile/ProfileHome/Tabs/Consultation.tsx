/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

"use client"
import { Button, ConfigProvider, Table } from 'antd';
import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import type { ColumnsType } from 'antd/es/table';
import ConsultationDetails from '../TabsDetails/ConsultationDetails';
import { useGetAllConsultationsQuery } from '@/redux/features/profile/consultationSlice';

interface ConsultationData {
  key: string;
  sNo: number;
  regNo: string;
  consultFor: string;
  consultant: string;
  dateTime: string;
  price: string;
}


const Consultation = () => {
  const [selectedConsultation, setSelectedConsultation] = useState<string | null>(null);


  // const name = "video"  
  const { data: consultations, isLoading } = useGetAllConsultationsQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  const consultationsData = consultations?.data?.filter(
    (consultation) => consultation.consultationType === "video"
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
      title: 'Consult for',
      dataIndex: ["subCategory", "name"],
      key: 'consultFor',
      width: 250,
    },
    {
      title: 'Consultant',
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
          <ConsultationDetails
            consultations={consultations}
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
              dataSource={consultationsData}
              pagination={false}
              scroll={{ x: '100vh' }}
              className="consultation-table"

            />
          </ConfigProvider>
        )}
      </div>
    </div>
  );
};

export default Consultation;