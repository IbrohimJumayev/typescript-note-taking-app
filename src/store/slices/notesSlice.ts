import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils";

export interface Notes {
  id: string;
  note: string;
}

interface NotesState {
  notes: Notes[];
  id: string;
  fontSize: string;
  isBold: boolean;
  color: string;
}

const initialState: NotesState = {
  notes: getFromLocalStorage("notes") ?? [],
  id: Date.now().toString(),
  fontSize: "16",
  isBold: false,
  color: "#000000",
};
const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Notes>) => {
      state.notes.push(action.payload);
      saveToLocalStorage("notes", state.notes);
    },
    changeSize: (state, action: PayloadAction<string>) => {
      state.fontSize = action.payload;
    },
    bold: (state, action: PayloadAction<boolean>) => {
      state.isBold = !action.payload;
    },
    changeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const { add, changeSize, bold, changeColor } = notesSlice.actions;
export default notesSlice.reducer;
