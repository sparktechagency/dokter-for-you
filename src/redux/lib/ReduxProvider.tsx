"use client"
import {  store } from "../store";
import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const url = window.location.href;
    console.log("Current URL:", url);
    if(!url.toString().includes("www" && url.toString().includes("dokter"))){
      window.location.href = "https://www.dokterforyou.com"
    } 
  }, []); 

  return (
    <Provider store={store}>
    {children}
    </Provider>
  );
};

export default ReduxProvider;