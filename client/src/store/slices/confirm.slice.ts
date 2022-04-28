import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfirmSolutionProps {
  code: string;
}

const initialState: ConfirmSolutionProps = {
  code: "",
};

const slice = createSlice({
  name: "confirmSolution",
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
