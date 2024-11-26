import { Card, Checkbox, ConfigProvider, Select } from 'antd';
import Image from 'next/image';
import React from 'react';

const DeliveryPayment = () => {
    return (
        <div>
            
      <div className="">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Delivery</h1>
        <p className="text-gray-600 mb-8">Please make your choice below to receive your Consultation.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Transfer Booking Option */}
          <Card className="p-6 bg-[#F8F8F8] hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <Checkbox className="mt-1" />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 relative">
                    <Image
                      src="/transfer.png"
                      alt="Transfer"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium">Transfer your own booking</span>
                </div>
                <p className="text-sm text-gray-500">
                  This payment option entails additional costs. In addition, delivery is delayed by approximately 2 working days.
                </p>
              </div>
            </div>
          </Card>

          {/* Apple Pay Option */}
          <Card className="p-6 bg-[#F8F8F8] hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <Checkbox className="" />
              <div className="flex-1 gap-2">
                <div className="flex items-center space-x-2 ">
                  <div className=" relative">
                    <Image
                      src="/pay.png"
                      alt="Apple Pay"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium">Apple Pay</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Pay via your bank&apos;s trusted online payment environment.
                </p> 

                <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 0 , 
                    }, 
              
                }}
            > 
          <Select
            placeholder="Choose your bank" 
            style={{height:"48px"}}
            className="w-full "
            options={[
              { value: "germany", label: "Germany" },
              { value: "france", label: "France" },
              { value: "italy", label: "Italy" },
            ]}
          /> 
          </ConfigProvider>
              </div>
            </div>
          </Card>

          {/* PayPal Option */}
          <Card className="p-6 bg-[#F8F8F8] hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <Checkbox className="" />
              <div className="flex-1 gap-2">
                <div className="flex items-center space-x-2 mb-3">
                  <div className=" relative">
                    <Image
                      src="/PayPal.png"
                      alt="PayPal"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium">PayPal</span>
                </div>
                <p className="text-sm text-gray-500">
                  This payment option entails additional costs. In addition, delivery is delayed by approximately 2 working days.
                </p>
              </div>
            </div>
          </Card>

          {/* Visa Option */}
          <Card className="p-6 bg-[#F0F0F0] hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <Checkbox className="mt-1" />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <div className=" relative">
                    <Image
                      src="/visa.png"
                      alt="Visa"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium">Visa</span>
                </div>
                <p className="text-sm text-gray-500">
                  Pay via your bank&apos;s trusted online payment environment.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

        </div>
    );
};

export default DeliveryPayment;