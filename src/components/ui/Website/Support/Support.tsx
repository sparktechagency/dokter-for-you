"use client";

import { PiMailbox } from "react-icons/pi";
import Image from "next/image";
import Title from "@/components/shared/Title";
import { TfiMapAlt } from "react-icons/tfi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import CommonBtn from "@/components/shared/CommonBtn";
import { useCreateSupportMutation } from "@/redux/features/website/footerSlice";
import Swal from "sweetalert2";

const Support = () => { 

  const [createSupport] = useCreateSupportMutation()
  const [form] = Form.useForm(); 

  const onFinish = async(values:{ email: string , description: string , subject: string , phone: string , name: string}) => {  
    await createSupport(values).then((res) => {
            if (res?.data?.success) {
                        Swal.fire({
                          text: res?.data?.message,
                          icon: "success",
                          showConfirmButton: false,
                          timer: 1500,
                        }).then(()=>{
                          form.resetFields()
                        })
                      } else {
                        Swal.fire({
                          title: "Oops",
                          text: res?.data?.message,
                          icon: "error",
                          timer: 1500,
                          showConfirmButton: false,
                        });
                      }
    })
    
  }

  return (
    <main className="bg-gray-50 ">
      {/* Hero Section with Image */}
      <div className="relative h-[600px] w-full ">
        <Image
          src="/support.jpg"
          alt="Customer service background"
          fill
          className="w-auto h-[500px] object-cover z-0"
        />
      </div>

      {/* Contact Info Section */}
      <div className=" -mt-44 relative">
        <div className="mx-auto px-8 pb-10 container bg-white">
          <Title className=" py-[40px] text-center">
            GET IN TOUCH WITH US
          </Title>
          <div className="grid grid-cols-1 gap-[53px] md:grid-cols-3">
            {/* Email Card */}
            <div className="rounded-lg bg-[#e8eefe] shadow-md transition-transform hover:scale-105  p-6">
              <div className="flex justify-center -mt-16">
                <div className="rounded-full bg-white p-4 h-[100px] w-[95px] flex items-center justify-center shadow-md">
                  <PiMailbox className="h-10 w-10 text-[#4E4E4E]" />
                </div>
              </div>
              <h3 className="text-center text-[24px] font-[500px] text-blue-900 mt-4">
                Email
              </h3>
              <p className="text-center text-gray-600 mt-2">contact@gmail.com</p>
              <p className="text-center text-gray-600">support@gmail.com</p>
            </div>

            {/* Help Line Card */}
            <div className="rounded-lg bg-[#E7FBF2] shadow-md transition-transform hover:scale-105 p-6">
              <div className="flex justify-center -mt-16">
                <div className="rounded-full bg-white p-4 h-[100px] w-[95px] flex items-center justify-center shadow-md">
                  <MdOutlineHeadsetMic className="h-10 w-10 text-[#4E4E4E]" />
                </div>
              </div>
              <h3 className="text-center text-[24px] font-semibold text-blue-900 mt-4">
                Help line
              </h3>
              <p className="text-center text-gray-600 mt-2">+1 234 567 8900</p>
              <p className="text-center text-gray-600">+1 234 567 8901</p>
            </div>

            {/* Address Card */}
            <div className="rounded-lg bg-[#E6F7FA] shadow-md transition-transform hover:scale-105 p-6">
              <div className="flex justify-center -mt-16">
                <div className="rounded-full bg-white p-4 h-[100px] w-[95px] flex items-center justify-center shadow-md">
                  <TfiMapAlt className="h-10 w-10 text-[#4E4E4E]" />
                </div>
              </div>
              <h3 className="text-center text-[24px] font-semibold text-blue-900 mt-4">
                Address
              </h3>
              <p className="text-center text-gray-600 mt-2">123 Business Street</p>
              <p className="text-center text-gray-600">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mx-auto container py-[94px] px-8  flex lg:flex-row flex-col w-full items-center gap-10  ">

        <div className=" lg:w-1/2 w-full">
          <Title className=" mb-6 font-[500] lg:text-[48px] text-[32px] tracking-wide">
            SEND US A MESSAGE
          </Title>
          <p className="text-[#6B6B6B] lg:text-[24px] text-[20px] lg:mb-8 mb-4 lg:tracking-wide ">
            JUST LEAVE US YOUR DETAILS HERE AND WE WILL GET BACK TO YOU WITHIN A
            FEW HOURS
          </p>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-lg lg:w-1/2 w-full">

          <Form

            layout="vertical"
            className="space-y-6"
            onFinish={onFinish}
 form={form}
          >
            <div className="">
           

              <div className="grid gap-x-4 md:grid-cols-2">
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: "Please enter your name" }]}
                >
                  <Input placeholder="Type name" className="h-[48px]" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Phone"
                  rules={[{ required: true, message: "Please enter your phone number" }]}
                >
                  <Input placeholder="Type your phone number" className="h-[48px]" />
                </Form.Item>
              </div>

              <Form.Item
                name="type"
                label="Subject"
                rules={[
                  { required: true, message: "Please enter your Subject" },
                 
                ]}
              >
                <Input placeholder="Type your subject" className="h-[48px]" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input placeholder="Type your email" className="h-[48px]" />
              </Form.Item>

              <Form.Item
                name="description"
                label="Message"
                rules={[{ required: true, message: "Please enter your message" }]}
              >
                <TextArea placeholder="Type description" rows={6} />
              </Form.Item>
            </div>

            <Form.Item>
              <CommonBtn className=" h-[48px] w-full" >
                Submit
              </CommonBtn>
            </Form.Item>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Support;
