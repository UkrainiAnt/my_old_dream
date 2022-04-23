import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfirmServiceProps {
  code: string;
}

const initialState: ConfirmServiceProps = {
  code: "",
};

const slice = createSlice({
  name: "confirmService",
  initialState,
  reducers: {
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    cleanCode: (state) => {
      state.code = "";
    },
  },
});

export default slice.reducer;
export const ConfirmActions = slice.actions;
