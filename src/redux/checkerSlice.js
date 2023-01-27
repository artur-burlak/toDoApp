import { createSlice } from "@reduxjs/toolkit";

const checkerSlice = createSlice({
  name: 'checker',
  initialState: {
    box1: false,
    box2: false,
    box3: false
  },
  reducers: {
    checkBox1(state) {
      state.box1 = !state.box1
    },
    checkBox2(state) {
      state.box2 = !state.box2
    },
    checkBox3(state) {
      state.box3 = !state.box3
    }
  }
})

export const { checkBox1, checkBox2, checkBox3 } = checkerSlice.actions
export default checkerSlice.reducer