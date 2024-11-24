"use client"
import { Button, ConfigProvider, Table } from 'antd';
import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import type { ColumnsType } from 'antd/es/table'; 
import ConsultationDetails from '../TabsDetails/ConsultationDetails';

interface ConsultationData {
    key: string;
    sNo: number;
    regNo: string;
    consultFor: string;
    consultant: string;
    dateTime: string;
    price: string;
  } 

  const data: ConsultationData[] = [
    {
      key: '1',
      sNo: 1,
      regNo: '19065378617',
      consultFor: 'Man problem/Erectile dysfunction',
      consultant: 'Dr. Arco Verhoog',
      dateTime: '1/1/2025, 5:30 pm',
      price: '€ 25.00',
    },
    {
      key: '2',
      sNo: 2,
      regNo: '19065378553',
      consultFor: 'Man problem/Erectile dysfunction',
      consultant: 'Dr. Arco Verhoog',
      dateTime: '1/1/2025, 5:30 pm',
      price: '€ 25.00',
    },
    {
      key: '3',
      sNo: 3,
      regNo: '19065356283',
      consultFor: 'Man problem/Erectile dysfunction',
      consultant: 'Dr. Arco Verhoog',
      dateTime: '1/1/2025, 5:30 pm',
      price: '€ 25.00',
    },
    {
      key: '4',
      sNo: 4,
      regNo: '19065235684',
      consultFor: 'Man problem/Erectile dysfunction',
      consultant: 'Dr. Arco Verhoog',
      dateTime: '1/1/2025, 5:30 pm',
      price: '€ 25.00',
    },
  ]; 

const Consultation = () => {  
  const [selectedConsultation, setSelectedConsultation] = useState<string | null>(null);
      
      const columns: ColumnsType<ConsultationData> = [
        {
          title: 'S. No.',
          dataIndex: 'sNo',
          key: 'sNo',
          width: 80,
        },
        {
          title: 'Reg. No.',
          dataIndex: 'regNo',
          key: 'regNo',
          width: 150,
        },
        {
          title: 'Consult for:',
          dataIndex: 'consultFor',
          key: 'consultFor',
          width: 250,
        },
        {
          title: 'Consultant:',
          dataIndex: 'consultant',
          key: 'consultant',
          width: 180,
        },
        {
          title: 'Date & Time:',
          dataIndex: 'dateTime',
          key: 'dateTime',
          width: 180,
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          width: 120,
        },
        {
          title: 'Action',
          key: 'action',
          width: 100,
          render: (_,record) => (
            <Button  onClick={() => setSelectedConsultation(record.regNo)}
              type="text" 
              icon={<MdOutlineArrowOutward size={24}/>}
              style={{ color: '#00b96b' }}
            />
          ),
        },
      ];
      
    
      
    return (
        <div>
           <div className="container "> 

           {selectedConsultation ? (
        <ConsultationDetails
          consultationId={selectedConsultation}
          onClose={() => setSelectedConsultation(null)}
        />
      ) : (
    
           <ConfigProvider
  theme={{
    components: {
        Table: {
            headerBg:'#F7F7F7'
        },
      },
    token: {
        colorBgContainer: "#E7FBF2"  
    },
  }}
>
      <Table
        columns={columns} 
        dataSource={data} 
        pagination={false}
        className="consultation-table"
        
      /> 
      </ConfigProvider> 
       )}
    </div>
        </div>
    );
};

export default Consultation;