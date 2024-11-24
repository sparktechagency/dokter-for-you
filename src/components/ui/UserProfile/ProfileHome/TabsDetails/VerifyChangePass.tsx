/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Title from "@/components/shared/Title";
import { Button, Form, Typography } from "antd";
import React, { useState } from "react"
import OTPInput from "react-otp-input";


const { Text } = Typography; 

interface ConsultationDetailsProps {
   
    onClose: any
  }

const VerifyChangePass = ({  onClose }: ConsultationDetailsProps) => { 

    const [otp, setOtp] = useState<string>("");
  
    const onFinish = async(values:any) => {
        console.log(values); 
        onClose()
    };
  
  
    const handleResendEmail = async() => {
  
    };
    return (
        <div className=" flex justify-center items-center">
            
            <div className="w-[400px]">

<div className=" mb-6">
  <Title className="  mb-6">Change Password</Title>
  <p className=" ">We sent a reset link to contact@dscode...com
  enter 5 digit code that is mentioned in the email</p>
</div>


<Form layout="vertical" onFinish={onFinish}>

  <div className="flex items-center justify-center mb-6">
    <OTPInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      inputStyle={{
        height: 50,
        width: 50,
        borderRadius: "8px",
        margin: "16px",
        fontSize: "20px",
        border: "1px solid #007BA5",
        color: "#2B2A2A",
        outline: "none",
        marginBottom: 10
      }}
      renderInput={(props) => <input {...props} />}
    />

  </div>

  <div className="flex items-center justify-between mb-6 font-medium">
    <Text>Don&apos;t received code?</Text>

    <p
      onClick={handleResendEmail}
      className="login-form-forgot underline"
      style={{ color: "#00B047", cursor: "pointer" }}
    >
      Resend
    </p>
  </div>

  <Form.Item style={{marginBottom: 0}}>
    <Button
      htmlType="submit"
      style={{
        width: "100%",
        height: 48,
        border: "1px solid #d9d9d9",
        outline: "none",
        boxShadow: "none",
        background: "#0A2369",
        color: "white"
      }}
    >
    Verify
    </Button>
  </Form.Item>
</Form>
</div>

        </div>
    );
};

export default VerifyChangePass;