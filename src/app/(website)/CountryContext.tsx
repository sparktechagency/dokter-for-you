"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface CountryContextProps {
  country: string | undefined;
  setCountry: (value: string) => void;
}

const CountryContext = createContext<CountryContextProps>({
  country: undefined,
  setCountry: () => {},
});

export const CountryProvider = ({ children }: { children: React.ReactNode }) => {
  const [country, setCountry] = useState<string | undefined>(undefined);

  useEffect(() => {
    const storedCountry = Cookies.get("country");
    if (storedCountry) {
      setCountry(storedCountry);
    }
  }, []);
 
  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => useContext(CountryContext);
