import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Medicine {
  name: string;
  medicineType: string;
  dosage: string;
  image: string;
  form: string;
  count: string;
  total: string;
  sellingPrice: number;
}

const initialState: Medicine[] = [];

const selectedMedicineSlice = createSlice({
  name: "selectedMedicines",
  initialState,
  reducers: {
    setAllSelectedMedicines: (state, action: PayloadAction<Medicine[]>) => {
      return action.payload;
    },
    clearSelectedMedicines: () => {
      return [];
    },
  },
});

export const { setAllSelectedMedicines, clearSelectedMedicines } = selectedMedicineSlice.actions;
export default selectedMedicineSlice.reducer;