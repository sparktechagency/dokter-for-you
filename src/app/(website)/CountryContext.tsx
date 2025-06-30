"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useGetProfileQuery } from "@/redux/features/profile/getProfileSlice";

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
  const { data: profile } = useGetProfileQuery(undefined);
  const userCountry = profile?.data?.country;

  useEffect(() => {
    const storedCountry = Cookies.get("country");

    // Priority: Profile country > Cookie
    if (userCountry) {
      Cookies.set("country", userCountry, { expires: 15, path: "/" });
      setCountry(userCountry);
    } else if (storedCountry) {
      setCountry(storedCountry);
    }
  }, [userCountry]);

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => useContext(CountryContext);
