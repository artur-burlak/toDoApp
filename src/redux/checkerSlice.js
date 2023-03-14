import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settings: {}
}
console.log(initialState)

const checkerSlice = createSlice({
  name: 'checker',
  initialState,
  reducers: {
    checkBox1(state) {
      state.settings.SMS = !state.settings.SMS
    },
    checkBox2(state) {
      state.settings.Email = !state.settings.Email
    },
    checkBox3(state) {
      state.settings.Push = !state.settings.Push
    },
    loadSettings(state, action) {
      state.settings = action.payload
    }
  }
})

export const { checkBox1, checkBox2, checkBox3, loadSettings } = checkerSlice.actions
export default checkerSlice.reducer