"use client";

import InputField from "@/components/shared/InputField";
import { Form, Radio, Select, Checkbox, ConfigProvider } from "antd";


const Address = () => {
  const [form] = Form.useForm();

  return (
    <div className=" ">
      <div className="">
        <h1 className="text-2xl font-semibold mb-2">Address</h1>
        <p className="text-[#6B6B6B] mb-6">Please make your choice below to receive your Consultation.</p>

        <div className="bg-[#EEEEEE]  p-6">
         
            <div className="flex gap-4 mb-6">
              <Radio.Group defaultValue="new" className="flex">
                <Radio value="new" className="flex items-center px-6 py-2  mr-4 ">
               
                  New address
                </Radio>
                <Radio value="dhl" className="flex items-center px-6 py-2 ">
                  DHL Service Point
                </Radio>
              </Radio.Group>
            </div> 

            <Form form={form} layout="vertical">
      {/* First Name and Last Name */}
      <div className="grid grid-cols-2 gap-x-4 mb-6">
        <InputField name="FirstName" label="First Name" />

        <InputField name="LastName" label="Last Name"/>
      </div>

      {/* Street and House Number */} 
      <div className="grid grid-cols-1  mb-8">
      <InputField name="Street and house number" label="Street and house number"/>
</div>
      {/* Postal Code and Place */}
      <div className="grid grid-cols-2 gap-x-4 mb-8">
        <InputField name="Postal code" label="Postal code"/>

        <InputField name="Place" label="Place" />
      </div>

      {/* Second Postal Code and Country */}
      <div className="grid grid-cols-2 gap-x-4 mb-6">
        <InputField name="postalCode2" label="Postal code" /> 

        <Form.Item name="country" label="Country"> 
        <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 0 , 
                    }, 
              
                }}
            > 
          <Select
            placeholder="Select country" 
            style={{height:"48px"}}
            className="w-full "
            options={[
              { value: "germany", label: "Germany" },
              { value: "france", label: "France" },
              { value: "italy", label: "Italy" },
            ]}
          /> 
          </ConfigProvider>
        </Form.Item>
      </div>
    </Form>
        </div>
 
 <div className="bg-[#E8EEFE] p-4 mt-5">
        <h3 className="font-medium text-gray-900 text-[16px]">Overview</h3>
        <div className="flex justify-between items-center text-[16px]">
          <div> 
            <p className="text-gray-500 pt-4 ">Consultation for man / weigh problem - $25.00</p>
          </div>
          <div className="text-right">
            <p className="text-primary font-medium">Total - $25.00</p>
          </div>
        </div> 
 </div>


        <div className="mt-6 flex items-center justify-between">
          <Form.Item className="mb-0">
            <Checkbox>
              <span className="text-sm text-red-500">
                Each person is responsible for the data they enter, and we are not responsible for any errors in data registration
              </span>
            </Checkbox>
          </Form.Item>
   
        </div>
      </div>
    </div>
  );
} 

export default Address;