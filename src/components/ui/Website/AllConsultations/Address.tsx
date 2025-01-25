/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { netherlandsCities } from "@/components/shared/AllCity";
import InputField from "@/components/shared/InputField";
import { useGetProfileQuery } from "@/redux/features/profile/getProfileSlice";
import { Form, Radio, Select, Checkbox } from "antd";
import { useEffect } from "react";

const Address = ({ SubCategoryName, setAddress }: { SubCategoryName: string | null, setAddress: (address: { firstname: string; lastname: string; streetAndHouseNo: string; postalCode: string; place: string; country: string; }) => void }) => {
  const [form] = Form.useForm(); 
  const { data } = useGetProfileQuery(undefined) 
  const userData = data?.data  

  useEffect(() => {
    if (userData) {
        form.setFieldsValue({
            firstName: userData?.firstName,
            lastName: userData?.lastName,
            gender: userData?.gender,
            location: userData?.location,
            city: userData?.city,
            postcode: userData?.postcode,
        });
    }
}, [userData, form]);


 
    const handleFormChange = (changedValues: any, allValues: any) => {
      const formattedData = {
        firstname: allValues.firstName || userData?.firstName, 
        lastname: allValues.lastName || userData?.lastName,  
        streetAndHouseNo: allValues.location || userData?.location, 
        postalCode: allValues.postcode || userData?.postcode, 
        place: allValues.city || userData?.city,
        country: allValues.country || "Netherlands",
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

          <Form form={form} layout="vertical" onValuesChange={handleFormChange} 
          initialValues={{
              firstName: userData?.firstName,
              lastName: userData?.lastName,
              gender: userData?.gender,
              location: userData?.location,
              city: userData?.city,
              postcode: userData?.postcode,
            }} >
           
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 lg:mb-6">

              <InputField name="firstName" label="First Name" />

              <InputField name="lastName" label="Last Name" />

            </div>

            {/* Street and House Number */}
            <div className="grid grid-cols-2 gap-x-4 lg:mb-8">
              <InputField name="location" label="Street and house number" />
              <InputField name="postcode" label="Postal code" />
            </div>

            {/* Postal Code and Place */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 lg:mb-8">

              <Form.Item name="city"
                label={<p className='text-[#4E4E4E] text-[16px]'>City</p>}
                rules={[
                  {
                    required: true,
                    message: `Please enter your city name`,
                  },
                ]}
              >
                <Select
                  style={{ width: "100%", height: "48px" }}
                  options={netherlandsCities}
                  placeholder="Select your city name"
                />
              </Form.Item>
              <InputField name='gender' label='Gender' />
            </div>


          </Form>
        </div>

        <div className="bg-[#E8EEFE] p-4 mt-5">
          <h3 className="font-medium text-gray-900 text-[16px]">Overview</h3>
          <div className="flex lg:flex-row flex-col justify-between items-center lg:text-[16px] text-[14px] gap-3">
            <div>
              <p className="text-gray-500 pt-4">Consultation for {SubCategoryName} - €25.00</p>
            </div>
            <div className="text-right">
              <p className="text-primary font-medium">Total - €25.00</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Form.Item className="mb-0">
            <Checkbox defaultChecked>
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
