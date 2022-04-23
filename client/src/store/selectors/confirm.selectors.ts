import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/store";

export const codeSelector = createSelector(
  (state: RootState) => state.confirm,
  (confirm) => confirm.code
);
