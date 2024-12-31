/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import InputField from "@/components/shared/InputField"; 
import { Form, Radio, Select, Checkbox, ConfigProvider } from "antd";

const Address = ({SubCategoryName , setAddress}:{SubCategoryName:string|null , setAddress:(address: { firstname: string; lastname: string; streetAndHouseNo: string; postalCode: string; place: string; country: string;  }) => void}) => {
  const [form] = Form.useForm();

  const handleFormChange = (changedValues: any, allValues: any) => {

    const formattedData = {
        firstname: allValues.FirstName || "",
        lastname: allValues.LastName || "",
        streetAndHouseNo: allValues["Street and house number"] || "",
        postalCode: allValues["Postal code"] || "",
        place: allValues.Place || "",
        country: allValues.country || "",
    };
    setAddress(formattedData);
  };
  

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold mb-2">Address</h1>
        <p className="text-[#6B6B6B] mb-6">Please make your choice below to receive your Consultation.</p>

        <div className="bg-[#EEEEEE] p-6">
          <div className="flex gap-4 mb-6">
            <Radio.Group defaultValue="new" className="flex">
              <Radio value="new" className="flex items-center px-6 py-2 mr-4">
                New address
              </Radio>
              <Radio value="dhl" className="flex items-center px-6 py-2">
                DHL Service Point
              </Radio>
            </Radio.Group>
          </div>

          <Form form={form} layout="vertical" onValuesChange={handleFormChange}>
            {/* First Name and Last Name */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 lg:mb-6">
             
              <InputField name="FirstName" label="First Name" />
      
              <InputField name="LastName" label="Last Name" />
             
            </div>

            {/* Street and House Number */}
            <div className="grid grid-cols-2 gap-x-4 lg:mb-8">
                <InputField name="Street and house number" label="Street and house number" /> 
                <InputField name="Postal code" label="Postal code" />
            </div>

            {/* Postal Code and Place */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 lg:mb-8">      
             
                <InputField name="Place" label="Place" /> 

                <ConfigProvider
                  theme={{
                    components: {
                      Select: {
                        activeBorderColor: "#BABABA",
                        hoverBorderColor: "#BABABA",
                      },
                    },
                    token: {
                      borderRadius: 0,
                    },
                  }}
                >
              <Form.Item name="country" label="Country">
                  <Select
                    placeholder="Select country"
                    style={{ height: "48px" }}
                    className="w-full"
                    options={[
                      { value: "Netherlands", label: "Netherlands" }, 
                    ]}
                  />
              </Form.Item>
                </ConfigProvider> 

            </div>

  
          </Form>
        </div>

        <div className="bg-[#E8EEFE] p-4 mt-5">
          <h3 className="font-medium text-gray-900 text-[16px]">Overview</h3>
          <div className="flex lg:flex-row flex-col justify-between items-center lg:text-[16px] text-[14px] gap-3">
            <div>
              <p className="text-gray-500 pt-4">Consultation for {SubCategoryName} - $25.00</p>
            </div>
            <div className="text-right">
              <p className="text-primary font-medium">Total - $25.00</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Form.Item className="mb-0">
            <Checkbox>
              <span className="lg:text-sm text-[12px] text-red-500">
                Each person is responsible for the data they enter, and we are not responsible for any errors in data registration
              </span>
            </Checkbox>
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default Address;
