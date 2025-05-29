import { baseApi } from "./baseApi";
import authReducer from "../features/auth/authSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import selectedMedicineReducer from "@/redux/features/website/selectedMedicineSlice";

const persistAuthConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const baseReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: persistedAuthReducer,
  selectedMedicines: selectedMedicineReducer,
};