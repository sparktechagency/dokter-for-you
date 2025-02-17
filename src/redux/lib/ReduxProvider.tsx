"use client"
import {  store } from "../store";
import { ReactNode } from "react";
import { Provider } from "react-redux";


const ReduxProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const url = window.location.href;
    console.log("Current URL:", url);
    if(!url.toString().includes("www")){
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